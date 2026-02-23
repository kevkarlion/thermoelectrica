import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const { nombre, email, mensaje } = await request.json();

  // 1. Configurar el transportador (el que envía)
  const transporter = nodemailer.createTransport({
    host: "secure.emailsrvr.com", // O el host que te indique DonWeb (ej: smtp.donweb.com)
    port: 465,
    secure: true, // true para puerto 465
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Esto ayuda a evitar errores de certificado en algunos hostings
    },
  });

  try {
    // 2. Definir el contenido del email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "servicios@thermolectrica.com",
      subject: `Nuevo mensaje de contacto de ${nombre}`,
      html: `
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensaje:</strong> ${mensaje}</p>
            `,
    });

    return NextResponse.json(
      { message: "Correo enviado con éxito" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error al enviar el correo" },
      { status: 500 },
    );
  }
}
