import nodemailer from "nodemailer";
import { gmail, gmailAppPassword } from "../src/constant";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmail,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${gmail}>`,
      to: gmail,

      subject: "📩 PORTFOLIO MAIL | New Contact Form Submission",

      html: `
      <div style="font-family:Arial,sans-serif;padding:24px;background:#0f172a;color:#fff;">
        <h2 style="color:#8b5cf6;">🚀 New Portfolio Contact Request</h2>

        <table style="width:100%;margin-top:20px;border-collapse:collapse;">
          <tr>
            <td style="padding:12px;font-weight:bold;">👤 Name</td>
            <td style="padding:12px;">${name}</td>
          </tr>

          <tr style="background:#1e293b;">
            <td style="padding:12px;font-weight:bold;">📧 Email</td>
            <td style="padding:12px;">${email}</td>
          </tr>

          <tr>
            <td style="padding:12px;font-weight:bold;">📱 Phone</td>
            <td style="padding:12px;">${phone}</td>
          </tr>

          <tr style="background:#1e293b;">
            <td style="padding:12px;font-weight:bold;">💬 Message</td>
            <td style="padding:12px;white-space:pre-line;">${message}</td>
          </tr>
        </table>

        <hr style="margin:25px 0;border-color:#334155;" />

        <p style="color:#94a3b8;font-size:14px;">
          Sent from Aditya Goel Portfolio Website.
        </p>
      </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to send email.",
    });
  }
}