import nodemailer from "nodemailer";

console.log("Initializing Mailer with:", {
  host: process.env.SMTP_HOST,
  user: process.env.SMTP_USER,
  port: 465
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface MailOptions {
  to: string;
  subject: string;
  text?: string;
  html: string;
}

export async function sendMail({ to, subject, text, html }: MailOptions) {
  try {
    const info = await transporter.sendMail({
      from: `"X Freight Notifications" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html,
    });
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
}
