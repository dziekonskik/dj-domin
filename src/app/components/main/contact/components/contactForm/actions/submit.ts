"use server";

import nodemailer from "nodemailer";
import { FormState } from "../types";

export async function submit(prevState: FormState, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("msg") as string;

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

    return { success: true };
  } catch (err) {
    console.error("Błąd wysyłki:", err);
    return { success: false };
  }
}
