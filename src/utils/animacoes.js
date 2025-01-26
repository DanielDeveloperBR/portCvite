export const animacoes = () => {
    const animatedText = document.querySelector('.principal h1');
    // Verifica se o elemento existe antes de acessar textContent
    if (animatedText) {
        const textContent = animatedText.textContent?.trim();
        if (textContent) {
            animatedText.innerHTML = '';
            // Cria os spans para cada letra
            for (let i = 0; i < textContent.length; i++) {
                const span = document.createElement('span');
                span.textContent = textContent[i];
                span.style.opacity = '0';
                span.style.animation = `fadeIn 0.5s ${i * 0.1}s forwards`;
                animatedText.appendChild(span);
            }
        }
    }
};
