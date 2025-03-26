import { describe } from "@jest/globals";
import nodemailer from "nodemailer";
import 'dotenv/config';

const transporter = nodemailer.createTransport({
  host: process.env.HOST_EMAIL,
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASS_EMAIL,
  },
});

const verificarConexão = () => new Promise((resolver, reject) => {
  transporter.verify((error, success) => {
    if (error) {
      reject(error);
    } else {
      resolver(success);
    }
  });
});

describe("Testando Disparo de email", () => {
  it('O sistema deve validar se a conexão com o sistema de disparo de email', async () => {
      const estaConectado = true;
  });
});