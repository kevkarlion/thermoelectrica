import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const { nombre, email, mensaje } = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Web Thermoelectrica" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // mejor enviarlo al mismo correo corporativo
      replyTo: email, // 🔥 esto es PRO: podés responder directo al cliente
      subject: `Nuevo mensaje de ${nombre}`,
      html: `
        <h2>Nuevo contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
    });

    return NextResponse.json(
      { message: "Correo enviado con éxito" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error enviando email:", error);
    return NextResponse.json(
      { message: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}