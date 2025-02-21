import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(req: NextRequest) {
  const { name, email, message, phone } = await req.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 45,
    secure: true,
    auth: {
      user: "archish99@gmail.com",
      pass: "dqwj ydwg sxti ebnv",
    },
  });

  const mailOptions: Mail.Options = {
    from: "madhu@planetgreen.co.in",
    to: "madhu@planetgreen.co.in",
    subject: `Message from ${name} (${email}) (${phone})`,
    text: message,
  };

  const sendMailPromise = () => {
    return new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, (err) => {
        if (!err) {
          resolve("Mail sent");
        } else {
          reject(err.message);
        }
      });
    });
  };

  try {
    await sendMailPromise();
    return NextResponse.json({ status: 200, message: "Mail sent" });
  } catch (err) {
    console.log("ERROR: ", err);
    return NextResponse.json({ status: 500, error: err });
  }
}
