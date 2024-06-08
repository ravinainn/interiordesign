import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const data = await request.json();
  const { name, phoneNumber, query } = data;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nain.ravi12345@gmail.com",
      pass: "nxdf zfxy ncee snyp",
    },
  });
  // try {
  //
  //   res.status(200).json({ message: "Message sent successfully!" });
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ message: "Error sending email." });
  // }

  try {
    const mailOptions = {
      from: "nain.ravi12345@gmail.com",
      to: "ravinain00007@gmail.com",
      subject: `Contact Us Form Submission: ${name}`,
      text: `
              Name: ${name}
              Phone Number: ${phoneNumber}
              Query: ${query}
            `,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error(error);
    // Return an error response with appropriate status code
    return NextResponse.json(
      { message: "Error sending email.", error },
      {
        status: 500,
      }
    );
  }
}
