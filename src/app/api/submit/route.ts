import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formType, ...formData } = body;

    const companyEmail = process.env.SMTP_USER;
    const userEmail = formData.email;

    if (!companyEmail || !userEmail) {
      return NextResponse.json(
        { success: false, error: "Configuration or User email missing" },
        { status: 400 }
      );
    }

    // 1. Send detailed info to the Company
    const companySubject = `New Form Submission: ${formType}`;
    const companyHtml = `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #e5282d;">New ${formType} Submission</h2>
        <p>You have received a new submission from the website.</p>
        <hr />
        <table style="width: 100%; border-collapse: collapse;">
          ${Object.entries(formData)
            .map(
              ([key, value]) => `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">${key}</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${Array.isArray(value) ? value.join(", ") : value}</td>
            </tr>
          `
            )
            .join("")}
        </table>
      </div>
    `;

    await sendMail({
      to: companyEmail,
      subject: companySubject,
      html: companyHtml,
    });

    // 2. Send confirmation to the User
    const userSubject = "We've received your request - X Freight Group";
    const userHtml = `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #e5282d;">Thank You for Reaching Out</h2>
        <p>Dear ${formData.firstName || "Customer"},</p>
        <p>We have received your ${formType} submission and our team is currently reviewing it.</p>
        <p>We will get back to you as soon as possible with more information.</p>
        <br />
        <p>Best regards,</p>
        <p><strong>X Freight Group Team</strong></p>
      </div>
    `;

    await sendMail({
      to: userEmail,
      subject: userSubject,
      html: userHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Submission Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
