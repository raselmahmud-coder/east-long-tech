require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middle ware
// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("EAST running the server");
});
app.listen(port, () => {
  console.log(`EAST LONG app listening on port ${port}`);
});

try {
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, message } = await req.body;
    const USERNAME = process.env.EMAIL_USERNAME;
    const PASSWORD = process.env.EMAIL_PASSWORD;
    const HOST = process.env.HOST_NAME;
    console.log(HOST, "getting host");
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
    res.status(200).send({ message: "Successfully sent an email!" });
  });

  // end of try block
} catch (err) {
  res.status(500).send({ message: err });
  console.log("error getting", err);
}
