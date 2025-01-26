import { createApp } from 'vue';
import './assets/css/style.css';
import './assets/css/responsivo.css';
import './assets/css/main.css';
import './assets/css/hovers.css';
import './assets/css/animacao.css';
import { animacoes } from '@/utils/animacoes'; // Certifique-se de que o caminho está correto
import router from './router/index';
import App from './App.vue';
const app = createApp(App);
app.use(router);
app.mount('#app');
// Executa a função animacoes após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    animacoes();
});
// Verifica a visibilidade das seções
const sections = document.querySelectorAll('section');
function checkVisibility() {
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom >= 0;
        if (isVisible) {
            section.classList.add('active');
        }
    });
}
checkVisibility();
