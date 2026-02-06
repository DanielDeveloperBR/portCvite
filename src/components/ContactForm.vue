<script setup lang="ts">
import { ref, onMounted } from 'vue';

declare const grecaptcha: any;
const recaptchaScriptLoaded = ref(false);
const isLoading = ref(false);
const isSuccess = ref(false);
const isError = ref(false);

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

  isLoading.value = true;
  isSuccess.value = false;
  isError.value = false;
  responseMessage.value = '';
  const nome = (document.querySelector('#nome') as HTMLInputElement).value;
  const email = (document.querySelector('#email') as HTMLInputElement).value;
  const assunto = (document.querySelector('#assunto') as HTMLInputElement).value;
  const mensagem = (document.querySelector('#mensagem') as HTMLTextAreaElement).value;

  try {
    const token = await grecaptcha.execute(import.meta.env.VITE_CHAVE_PUBLICA, { action: 'submit' });

    const recaptchaResponse = await fetch('/api/validateRecaptcha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });

    const recaptchaResult = await recaptchaResponse.json();

    if (!recaptchaResult.valid) {
      throw new Error('Recaptcha inválido');
    }

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, assunto, mensagem }),
    });

    const result = await response.json();

    if (!result.success) throw new Error();

    responseMessage.value = result.message;
    isSuccess.value = true;
  } catch {
    responseMessage.value = 'Não foi possível enviar a mensagem. Tente novamente.';
    isError.value = true;
  } finally {
    isLoading.value = false;
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

        <button type="submit" :disabled="isLoading" class="submit-btn" :class="{
          loading: isLoading,
          successBtn: isSuccess,
          errorBtn: isError
        }">
          <span class="btn-content">
            <span v-if="!isLoading && !isSuccess">Enviar</span>
            <span v-if="isLoading" class="spinner"></span>
            <span v-if="isSuccess">✔ Enviado</span>
          </span>
        </button>


        <transition name="fade-slide">
          <p v-if="responseMessage" :class="isSuccess ? 'success' : 'error'">
            {{ responseMessage }}
          </p>
        </transition>
      </form>
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