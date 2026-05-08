import nodemailer from "nodemailer";

async function testMail() {
  console.log("Testing SMTP connection with:", {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    passLength: process.env.SMTP_PASS ? process.env.SMTP_PASS.length : 0,
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const success = await transporter.verify();
    console.log("✅ Server is ready to take our messages:", success);
  } catch (error) {
    console.error("❌ Error verifying connection:", error);
  }
}

testMail();
