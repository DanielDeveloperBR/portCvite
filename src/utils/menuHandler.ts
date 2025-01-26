import { ref, onMounted } from 'vue';

export default {
  setup() {
    // Crie uma referência para a navegação
    const navegacao = ref<HTMLElement | null>(null);

    // Adicione o listener de tamanho de tela
    onMounted(() => {
      if (navegacao.value) {
        checkScreenSize(navegacao.value);
        window.addEventListener("resize", () => {
          if (navegacao.value) checkScreenSize(navegacao.value);
        });
      }
    });

    // Função para o botão de menu
    const handleToggleMenu = () => {
      if (navegacao.value) toggleMenu(navegacao.value);
    };

    return {
      navegacao,
      handleToggleMenu,
    };
  },
};


// Funções de utilidade
export const toggleMenu = (navegacao: HTMLElement) => {
  if (navegacao.style.display === "none" || !navegacao.style.display) {
    navegacao.style.display = "block";
  } else {
    navegacao.style.display = "none";
  }
};

export const checkScreenSize = (navegacao: HTMLElement) => {
  if (window.innerWidth >= 650) {
    navegacao.style.display = "block";
  } else {
    navegacao.style.display = "none";
  }
};

