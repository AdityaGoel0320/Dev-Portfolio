import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(
  cors({
    origin: ["https://aditya-goel-dev.vercel.app", "http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json());

// Reuse single transporter instance using Port 587
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // TLS via STARTTLS (Faster & rarely blocked by host providers)
  auth: {
    user: process.env.PORTFOLIO_EMAIL,
    pass: process.env.PORTFOLIO_APP_PASSWORD,
  },
  // Optional: connection timeout limit to prevent hanging forever
  connectionTimeout: 10000, 
});

// Health Check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio Contact API is running 🚀",
  });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const mailOptions = {
      from: `"Aditya Goel Portfolio" <${process.env.PORTFOLIO_EMAIL}>`,
      to: process.env.PORTFOLIO_EMAIL,
      replyTo: email,
      subject: `📩 PORTFOLIO MAIL | New Message from ${name}`,
      html: `
        <h3>New Contact Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email Sent:", info.messageId);

    return res.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("❌ Email Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Portfolio Backend Running on http://localhost:${PORT}`);
});