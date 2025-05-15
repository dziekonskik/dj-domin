import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.formData();
  const name = data.get("name") as string;
  const email = data.get("email") as string;
  const message = data.get("msg") as string;

  try {
    const transporter = nodemailer.createTransport({
      host: "poczta.int.pl",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER?.trim(),
        pass: process.env.SMTP_PASS?.trim(),
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: "Nowa wiadomość z djdomin.pl",
      text: `Imię: ${name}\nEmail: ${email}\nWiadomość: ${message}`,
    });

    return NextResponse.json({ status: "success" });
  } catch (err) {
    console.error("Błąd SMTP:", err);
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}
