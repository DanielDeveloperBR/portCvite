import dotenv from 'dotenv';
dotenv.config();

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ valid: false, message: 'Método não permitido' });
  }

  try {
    const { token } = req.body; 

    // Crie os parâmetros para a verificação do reCAPTCHA
    const recaptchaBody = new URLSearchParams({
      'secret': process.env.CHAVE_SECRETA || '',
      'response': token,
    });

    // Realize a verificação do reCAPTCHA com o fetch nativo
    const recaptchaResponse = await fetch('https://www.recaptcha.net/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: recaptchaBody,
    });

    const recaptchaData = await recaptchaResponse.json();

    // Verifique o sucesso e o score da resposta do reCAPTCHA
    if (!recaptchaData.success) {
      return res.status(400).json({ valid: false, message: 'Falha na verificação reCAPTCHA' });
    }

    // Se o reCAPTCHA for válido, retorne a resposta positiva
    return res.json({ valid: true, message: 'Validação reCAPTCHA bem-sucedida!' });
  } catch (error) {
    console.error('Erro ao validar reCAPTCHA:', error);
    return res.status(500).json({ valid: false, message: 'Erro ao validar o reCAPTCHA' });
  }
}