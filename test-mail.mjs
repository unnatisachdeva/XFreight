import nodemailer from "nodemailer";

async function testMail() {
  console.log("Testing SMTP connection with:", {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    passLength: process.env.SMTP_PASS ? process.env.SMTP_PASS.length : 0,
  });

  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

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

  try {
    const success = await transporter.verify();
    console.log("✅ Server is ready to take our messages:", success);
  } catch (error) {
    console.error("❌ Error verifying connection:", error);
  }
}

testMail();
