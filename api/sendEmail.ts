import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config()

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    console.error()
    return res.status(405).json({ success: false, message: 'Método não permitido' });
  }

  const { nome, email, assunto, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ success: false, message: 'Todos os campos são obrigatórios' });
  }

  try {
    // Configurar o transporte do Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
        
      },
    });

    // Configurar o email
    const mailOptions = {
      from: `"${nome}" <${email}>`,
      to: process.env.EMAIL_RECEIVER, 
      subject: assunto || 'Sem Assunto', 
      text: mensagem,
    };

    // Enviar o email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Email enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return res.status(500).json({ success: false, message: 'Erro ao enviar email' });
  }
}
