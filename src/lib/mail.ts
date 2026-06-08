import nodemailer from "nodemailer";

const host = process.env.SMTP_HOST;
const port = parseInt(process.env.SMTP_PORT || "587", 10);
const secure = process.env.SMTP_SECURE === "true";
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

console.log("Initializing Mailer with:", {
  host,
  port,
  secure,
  user,
  passLength: pass ? pass.length : 0,
});

const transporter = nodemailer.createTransport(
  host
    ? {
        host,
        port,
        secure,
        auth: {
          user,
          pass,
        },
        tls: {
          rejectUnauthorized: false,
        },
      }
    : {
        service: "gmail",
        auth: {
          user,
          pass,
        },
      }
);

interface MailOptions {
  to: string;
  subject: string;
  text?: string;
  html: string;
  attachments?: Array<{
    filename: string;
    path: string;
    cid: string;
  }>;
}

export async function sendMail({ to, subject, text, html, attachments }: MailOptions) {
  try {
    const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER;
    const info = await transporter.sendMail({
      from: `"X Freight Notifications" <${fromAddress}>`,
      to,
      subject,
      text,
      html,
      attachments,
    });
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
}
