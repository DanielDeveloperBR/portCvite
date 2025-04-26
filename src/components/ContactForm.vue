<script setup lang="ts">
import { ref, onMounted } from 'vue';

declare const grecaptcha: any; 
const recaptchaScriptLoaded = ref(false);

onMounted(() => {
  const script = document.createElement('script');
  script.src = `https://www.google.com/recaptcha/api.js?render=${import.meta.env.VITE_CHAVE_PUBLICA}`;
  script.async = true;
  script.onload = () => {
    recaptchaScriptLoaded.value = true;
  };
  document.head.appendChild(script);
});

const responseMessage = ref('');
const successMessage = ref(false);

async function handlerSubmit(e: Event) {
  e.preventDefault();

  const nome = (document.querySelector('#nome') as HTMLInputElement).value;
  const email = (document.querySelector('#email') as HTMLInputElement).value;
  const assunto = (document.querySelector('#assunto') as HTMLInputElement).value;
  const mensagem = (document.querySelector('#mensagem') as HTMLTextAreaElement).value;

  try {
    const token = await grecaptcha.execute(import.meta.env.VITE_CHAVE_PUBLICA, { action: 'submit' });

    // Valida o token no backend
    const recaptchaResponse = await fetch('/api/validateRecaptcha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });

    const recaptchaResult = await recaptchaResponse.json();

    if (!recaptchaResult.valid) {
      responseMessage.value = 'Erro na validação do reCAPTCHA. Por favor, tente novamente.';
      successMessage.value = false;
      return;
    }

    // Envia os dados do formulário
    const response = await fetch(`/api/sendEmail`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, assunto, mensagem }),
    });

    const result = await response.json();

    responseMessage.value = result.message;
    successMessage.value = result.success;
  } catch (error) {
    responseMessage.value = 'Erro ao enviar o email. Por favor, tente novamente.';
    successMessage.value = false;
  }
}
</script>

<template>
  <section class="container-form" id="contatos">
    <div class="modeloFormulario">
      <h1>Contatos</h1>
      <form @submit="handlerSubmit" method="post">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" placeholder="Seu Nome" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Seu Email" required />

        <label for="assunto">Assunto:</label>
        <input type="text" id="assunto" name="assunto" placeholder="Assunto" />

        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" placeholder="Sua mensagem" rows="10" required></textarea>

        <button>Enviar</button>
      </form>
      <!-- Mensagem de status -->
      <p :class="successMessage ? 'success' : 'error'" v-if="responseMessage">
        {{ responseMessage }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.success {
  color: #15d615;
}

.error {
  color: red;
}
</style>
