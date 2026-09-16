import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = 9000;

// Middleware
app.use(
  cors({
    origin: ["https://aditya-goel-dev.vercel.app" , "http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio Contact API is running 🚀",
  });
});

app.post("/api/contact", async (req, res) => {
  console.log("📩 Contact API Hit");
  console.log("Body:", req.body);

  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    console.log("Creating transporter...");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.PORTFOLIO_EMAIL,
        pass: process.env.PORTFOLIO_APP_PASSWORD,
      },
    });

    console.log("Verifying Gmail SMTP...");
    await transporter.verify();
    console.log("✅ Gmail Connected");

    console.log("Sending email...");

    const info = await transporter.sendMail({
      from: `"Aditya Goel Portfolio" <${process.env.PORTFOLIO_EMAIL}>`,
      to: process.env.PORTFOLIO_EMAIL,
      replyTo: email,
      subject: "📩 PORTFOLIO MAIL | New Contact Form Submission",
      html: `<h2>New Contact</h2><p>${message}</p>`,
    });

    console.log("✅ Email Sent:", info.messageId);

    return res.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("❌ Email Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Portfolio Backend Running`);
  console.log(`🌐 http://localhost:${PORT}`);
});