<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const navegacao = ref<HTMLElement | null>(null);
const menuAberto = ref(false);

const aplicarEstadoMenu = () => {
  if (!navegacao.value) return;

  if (window.innerWidth >= 760) {
    navegacao.value.style.display = 'block';
    menuAberto.value = false;
    return;
  }

  navegacao.value.style.display = menuAberto.value ? 'block' : 'none';
};

const toggleMenu = () => {
  menuAberto.value = !menuAberto.value;
  aplicarEstadoMenu();
};

const fecharMenu = () => {
  if (window.innerWidth >= 760) return;
  menuAberto.value = false;
  aplicarEstadoMenu();
};

onMounted(() => {
  aplicarEstadoMenu();
  window.addEventListener('resize', aplicarEstadoMenu);
});

onUnmounted(() => {
  window.removeEventListener('resize', aplicarEstadoMenu);
});
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Ir para o início">DS<span>.</span></a>

    <button
      id="burguer"
      type="button"
      aria-label="Abrir ou fechar menu"
      :aria-expanded="menuAberto"
      aria-controls="menu-principal"
      @click="toggleMenu"
    >
      <span class="material-symbols-outlined" aria-hidden="true">menu</span>
    </button>

    <nav ref="navegacao" id="menu-principal" aria-label="Navegação principal">
      <ul id="menu">
        <li><a href="#experiencia" @click="fecharMenu">Experiência</a></li>
        <li><a href="#projetos" @click="fecharMenu">Cases</a></li>
        <li><a href="#habilidades" @click="fecharMenu">Stack</a></li>
        <li><a href="#sobre" @click="fecharMenu">Sobre</a></li>
        <li><a href="#avaliacoes" @click="fecharMenu">Avaliações</a></li>
        <li><a class="nav-cta" href="#contatos" @click="fecharMenu">Contato</a></li>
      </ul>
    </nav>
  </header>
</template>