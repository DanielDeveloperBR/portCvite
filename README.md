# Portfólio — Daniel Souza

Portfólio profissional em Vue 3 + TypeScript + Vite, estruturado para apresentar experiência por meio de evidências de trabalho, cases e responsabilidades técnicas.

## Objetivo

O conteúdo prioriza o que um recrutador ou responsável técnico precisa identificar rapidamente:

- atuação em sistema profissional existente;
- entrega Full Stack de ponta a ponta;
- backend, frontend, dados e infraestrutura;
- segurança, testes de regressão e manutenção;
- cases reais em vez de projetos introdutórios.

## Stack do portfólio

- Vue 3
- TypeScript
- Vite
- Vercel Analytics / Speed Insights
- API serverless para contato
- Google reCAPTCHA
- Nodemailer

## Estrutura de conteúdo

- posicionamento profissional;
- experiência profissional — VistoriApp / Web Fire Risk;
- cases selecionados — Aguentaí, gestão comercial e RPG em tempo real;
- stack e capacidades;
- processo de trabalho;
- avaliações de clientes;
- formulário de contato.

## Desenvolvimento

```bash
npm ci
npm run dev
```

## Validação

```bash
npm test
npm run build
```

Os testes de regressão protegem pontos críticos do portfólio, incluindo o fluxo existente de reCAPTCHA/contato e os destinos da navegação interna.

## Segurança do formulário

O fluxo existente foi preservado: o frontend obtém o token do reCAPTCHA, valida o token na API `/api/validateRecaptcha` e somente depois envia o formulário para `/api/sendEmail`.

As chaves e credenciais continuam sendo fornecidas por variáveis de ambiente e não devem ser versionadas.
