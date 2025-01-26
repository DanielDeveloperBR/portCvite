<script setup lang="ts">
import { ref } from 'vue';

// Variáveis reativas para armazenar mensagens e status
const responseMessage = ref('');
const successMessage = ref(false);

async function handlerSubmit(e: Event) {
  e.preventDefault();

  const nome = (document.querySelector('#nome') as HTMLInputElement).value;
  const email = (document.querySelector('#email') as HTMLInputElement).value;
  const assunto = (document.querySelector('#assunto') as HTMLInputElement).value;
  const mensagem = (document.querySelector('#mensagem') as HTMLTextAreaElement).value;

  try {
    const response = await fetch(`/api/sendEmail`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, assunto, mensagem }),
    });

    const result = await response.json();

    if (result.success) {
      responseMessage.value = result.message;
      successMessage.value = true;
    } else {
      responseMessage.value = result.message;
      successMessage.value = false;
    }
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
      <form @submit="handlerSubmit">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" placeholder="Seu Nome" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Seu Email" required />

        <label for="assunto">Assunto:</label>
        <input type="text" id="assunto" name="assunto" placeholder="Assunto" />

        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" placeholder="Sua mensagem" rows="10" required></textarea>

        <button type="submit">Enviar</button>
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
  color: green;
}

.error {
  color: red;
}
</style>
