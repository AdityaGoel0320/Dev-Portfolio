import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

// -------------------- Middleware --------------------
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://aditya-goel-dev.vercel.app",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// -------------------- Health Check --------------------
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Portfolio Contact API is running.",
  });
});

// -------------------- Contact API --------------------
app.post("/api/contact", async (req, res) => {
  console.log("📩 Contact API Hit");
  console.log("Body:", req.body);

  try {
    const { name, email, phone, message } = req.body;

    // Validate input
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Gmail SMTP Transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      family: 4, // Force IPv4 (fixes Render IPv6 issue)

      auth: {
        user: process.env.PORTFOLIO_EMAIL,
        pass: process.env.PORTFOLIO_APP_PASSWORD,
      },

      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    // Verify SMTP
    await transporter.verify();
    console.log("✅ Gmail SMTP Connected");

    // Send Email
    const info = await transporter.sendMail({
      from: `"Aditya Goel Portfolio" <${process.env.PORTFOLIO_EMAIL}>`,
      to: process.env.PORTFOLIO_EMAIL,
      replyTo: email,

      subject: "📩 PORTFOLIO MAIL | New Contact Form Submission",

      html: `
      <div style="background:#0f172a;padding:30px;font-family:Arial,sans-serif;color:#ffffff;">
        <h2 style="color:#8b5cf6;margin-bottom:20px;">
          🚀 New Portfolio Contact Request
        </h2>

        <table style="width:100%;border-collapse:collapse;font-size:15px;">
          <tr>
            <td style="padding:10px 0;font-weight:bold;">👤 Name</td>
            <td>${name}</td>
          </tr>

          <tr>
            <td style="padding:10px 0;font-weight:bold;">📧 Email</td>
            <td>${email}</td>
          </tr>

          <tr>
            <td style="padding:10px 0;font-weight:bold;">📱 Phone</td>
            <td>${phone}</td>
          </tr>
        </table>

        <hr style="margin:25px 0;border-color:#334155;" />

        <h3 style="color:#a855f7;">💬 Message</h3>

        <div style="
          background:#1e293b;
          padding:18px;
          border-radius:10px;
          line-height:1.7;
          white-space:pre-line;
        ">
${message}
        </div>

        <hr style="margin:25px 0;border-color:#334155;" />

        <p style="font-size:13px;color:#94a3b8;">
          This email was submitted from <strong>Aditya Goel's Portfolio Website</strong>.
        </p>
      </div>
      `,
    });

    console.log("✅ Email Sent:", info.messageId);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("❌ Email Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to send email.",
    });
  }
});

// -------------------- Start Server --------------------
app.listen(PORT, () => {
  console.log(`🚀 Portfolio Backend Running`);
  console.log(`🌐 Server listening on port ${PORT}`);
});