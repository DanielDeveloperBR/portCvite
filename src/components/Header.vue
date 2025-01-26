<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const navegacao = ref<HTMLElement | null>(null);

const toggleMenu = () => {
  if (navegacao.value) {
    if (navegacao.value.style.display === 'none' || !navegacao.value.style.display) {
      navegacao.value.style.display = 'block';
    } else {
      navegacao.value.style.display = 'none';
    }
  }
};

const checkScreenSize = () => {
  if (navegacao.value) {
    if (window.innerWidth >= 650) {
      navegacao.value.style.display = 'block';
    } else {
      navegacao.value.style.display = 'none';
    }
  }
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<template>
  <header>
    <a href="index.html">D.S</a>
    <button id="burguer" @click="toggleMenu">
      <span class="material-symbols-outlined">menu</span>
    </button>
    <nav ref="navegacao">
      <ul id="menu">
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#comentarios">Avaliações</a></li>
        <li><a href="#contatos">Contatos</a></li>
      </ul>
    </nav>
  </header>
</template>