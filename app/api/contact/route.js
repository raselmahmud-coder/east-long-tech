import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  const USERNAME = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const PASSWORD = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
  const HOST = process.env.NEXT_PUBLIC_HOST_NAME;

  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");

  // create transporter object
  const transporter = nodemailer.createTransport({
    host: HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: USERNAME,
      pass: PASSWORD,
    },
  });

  try {
     await transporter.sendMail({
      from: email,
      to: ["raselmahmud98262@gmail.com", "demo@dreameduinfo.com"],
      subject: `New client request from ➡️ ${email}`,
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${name} -- Email Opened</title>
      </head>
      <body>
      <h2>Here is the client details you may contact further</h2>
      <h3>Name: ${name} </h3>
      <h5>Phone Number: ${phone} </h5>
      <h6>Email: ${email} </h6>
      <p>Message: ${message} </p>
      </body>
      </html>
            `,
    });
    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error, "I am an error from route.js");
    NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
