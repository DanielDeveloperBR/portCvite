<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { smoothScrollTo } from '../utils/scrollHandler';
import ContactForm from './ContactForm.vue';

export default defineComponent({
  name: 'Main',
  components: {
    ContactForm,
  },
  setup() {
    onMounted(() => {
      const links = document.querySelectorAll('#menu li a');
      links.forEach(link =>
        link.addEventListener('click', (event) => {
          event.preventDefault();
          const id = link.getAttribute('href');
          if (id) smoothScrollTo(id);
        })
      );
    });
  },
});
</script>

<template>
  <main>
    <!--Principal-->
    <section class="principal">
      <div>
        <h1>Daniel Souza</h1>
        <p>Desenvolvedor Full-Stack</p>
      </div>

      <picture>
        <source media="(max-width: 600px)" srcset="../assets/static/minhaFoto.jpg" alt="Daniel Souza">
        <img src="../assets/static/minhaFoto.jpg" alt="Daniel Souza">
        <p title="Daniel Souza">Daniel Souza</p>
        <a href="https://github.com/DanielDeveloperBR" target="_blank">Meu Github</a>
        <p>danieldetrabalho@hotmail.com</p>
      </picture>
    </section>

    <!--Sobre mim-->
    <h2>Sobre mim</h2>
    <section class="sobre" id="sobre">
      <article>
        Olá! Sou Daniel, um entusiasta de Tecnologia da Informação com habilidades em HTML, CSS, JavaScript
        e
        PHP,
        além de conhecimentos em Java. Embora não tenha experiência profissional formal, sou dedicado a
        aprimorar
        minhas habilidades e construir projetos pessoais que demonstrem meu conhecimento técnico.
        Minha paixão pela programação e desenvolvimento web me levou a explorar diferentes projetos
        independentes,
        nos quais me desafiei a criar sites e aplicativos interativos. Esses projetos me permitiram aplicar
        os
        conceitos que aprendi e me aperfeiçoar em áreas como design responsivo, experiência do usuário e
        otimização
        de desempenho.
        <br><br>
        Estou constantemente atualizado sobre as tendências mais recentes e melhores práticas no campo da
        tecnologia, buscando aprender e aplicar novos conceitos em meus projetos. Sou um aprendiz ávido e
        estou
        sempre em busca de novos conhecimentos e desafios que me ajudem a crescer como desenvolvedor.
      </article>
    </section>
    <h2>Um pouco mais sobre mim</h2>
    <section class="sobre">
      <article>
        Este portfólio é um reflexo dos meus esforços para aprimorar minhas habilidades e mostrar meu potencial
        como
        desenvolvedor. Cada projeto apresentado aqui representa meu empenho em aprender, experimentar e superar
        obstáculos ao longo do caminho.
        Estou animado com a possibilidade de colaborar em projetos desafiadores e trabalhar em equipe para
        transformar ideias em realidade.

        Embora não tenha experiência profissional, minha paixão e dedicação são
        evidentes em cada linha de código que escrevo.
        Convido você a explorar meu portfólio e conhecer meus projetos pessoais. Ficarei feliz em discutir
        oportunidades de colaboração ou compartilhar mais detalhes sobre meu trabalho. Estou ansioso para
        continuar
        aprendendo e crescendo como desenvolvedor.
      </article>
    </section>
    <!--Habilidades-->
    <h2>Habilidades</h2>
    <section class="habilidades" id="habilidades">
      <ul>
        <li><img src="../assets/static/habilidades/html.png" alt="html logo"></li>
        <li><img src="../assets/static/habilidades/css.png" alt="css logo"></li>
        <li><img src="../assets/static/habilidades/js.png" alt="javascript logo"></li>
        <li><img src="../assets/static/habilidades/mysql.png" alt="mysql logo"></li>
      </ul>
      <ul>
        <li><img src="../assets/static/habilidades/docker.png" alt="docker logo"></li>
        <li><img src="../assets/static/habilidades/react.png" alt="react logo"></li>
        <li><img src="../assets/static/habilidades/debian.png" alt="debian logo"></li>
        <li><img src="../assets/static/habilidades/sqlite.png" alt="sqlite logo"></li>
      </ul>
      <ul>
        <li><img src="../assets/static/habilidades/node.png" alt="node logo"></li>
        <li><img src="../assets/static/habilidades/gimp.png" alt="gimp logo"></li>
        <li><img src="../assets/static/habilidades/java.png" alt="Java logo"></li>
        <li><img src="../assets/static/habilidades/php.png" alt="php logo"></li>

      </ul>
      <div class="descricao">
        <p>
          Como desenvolvedor Full-Stack, possuo habilidades sólidas em diversas tecnologias
          e ferramentas essenciais para a criação de aplicações web modernas e funcionais.
          <br><br>
          Busco aplicar meus conhecimentos para criar interfaces responsivas e atraentes,
          desenvolver funcionalidades interativas e dinâmicas, além de garantir a
          integração das aplicações com bancos de dados para o armazenamento e recuperação
          de informações importantes.
          <br><br>
          Estou sempre aberto a aprender novas tecnologias e
          enfrentar desafios para aprimorar minhas habilidades como desenvolvedor.
        </p>
      </div>
    </section>

    <!-- Projetos -->
    <h2>Projetos</h2>
    <section class="projetos" id="projetos">
      <div>
        <h2>Controle de Estoque para Salão de Beleza</h2>
        <img src="../assets/static/imgSalao.png" alt="Salão">
        <article>Desenvolvimento de um sistema de gestão completo para um salão de beleza.
        </article>
        <p>Código: <strong style="color: red;">Restrito</strong></p>
      </div>
      <div>
        <h2>Api de Pokemon</h2>
        <img src="../assets/static/projetos/pokeApi.png" alt="API-Pokemon">
        <article>Fiz um mini projeto de pegar os personagens do pokémon. Ele retorna o nome, peso, altura e a
          imagem. A seguir o link para acessar o projeto:</article>
        <p>Link: <a href="https://danieldeveloperbr.github.io/API-Pokemon/" target="_blank">Clica aqui</a></p>
      </div>
      <div>
        <h2>Curiosidades de Tecnologia</h2>
        <img src="../assets/static/projetos/bugdroid.png" alt="Bug android">
        <article>O artigo <strong>História do Mascote Android</strong> explora a evolução do
          <strong>Bugdroid</strong> e a associação das versões a doces. Uma apresentação profissional e
          envolvente, demonstrando habilidades de desenvolvimento e atenção aos detalhes.
        </article>
        <p>Link: <a href="https://danieldeveloperbr.github.io/android/" target="_blank">Clica aqui</a></p>
      </div>
      <div>
        <h2>Calculadora</h2>
        <img src="../assets/static/calcFormatado.png" alt="Calculadora">
        <article>Uma calculadora com funcionalidades de somar, subtrair, multiplicar e dividir</article>
        <p>Link: <a href="https://danieldeveloperbr.github.io/Minha-Calculadora/" target="_blank">Clica aqui</a>
        </p>
      </div>
      <div>
        <h2>RPG Online de Turnos</h2>
        <img src="../assets/static/projetos/jogo.png" alt="RPG de turnos">
        <article>Um jogo online de 2 vs 2 onde você escolhe um personagem com uma única habilidade especial e com os seus atritubutos. O jogo têm 3 classes de personagens por enquanto que são: Bárbaro, Arqueiro e Mago.</article>
        <p>Link: <a href="https://rpg-online-v5tk.onrender.com/" target="_blank">Clica aqui</a></p>
      </div>
      <div>
        <h2>Em breve</h2>
        <img src="../assets/static/emBreve.png" alt="API-Pokemon">
        <article>Em breve...</article>
        <p>Link: <a href="https://github.com/DanielDeveloperBR/API-Pokemon" target="_blank">Clica aqui</a></p>
      </div>
    </section>

    <!-- Comentários -->
    <h2>Avaliações de Clientes</h2>
    <section class="comentarios" id="comentarios">
      <a style="color: black;" href="https://www.99freelas.com.br/user/Daniel-Developer" target="_blank">Instalar
        recaptcha em um site HTML
      </a>
      <p>Profissional e de fácil comunicação</p>
      <div>Cliente: Rodrigo A.</div>
      <span>
        <span class="material-symbols-outlined">
        </span>
        <span class="material-symbols-outlined">
        </span>
        <span class="material-symbols-outlined">
        </span>
        <span class="material-symbols-outlined">
        </span>
        <span class="material-symbols-outlined">
        </span>

        <span>agosto 2023</span>
      </span>
    </section>

    <section class="comentarios" id="comentarios">
      <a style="color: black;" href="https://www.99freelas.com.br/user/Daniel-Developer" target="_blank">Integrar
        API WhatsApp para abrir com QR Code
      </a>
      <p class="segundoParagrafo">Gostaria de expressar minha sincera admiração e gratidão pelo excepcional
        trabalho que você realizou na implementação das telas em nosso sistema. Sua habilidade técnica e
        comprometimento com a qualidade realmente se destacaram, proporcionando uma experiência de usuário
        incrível</p>
      <div>Cliente: Edvaldo V.</div>
      <span>
        <span class="material-symbols-outlined">
        </span>
        <span class="material-symbols-outlined">
        </span>
        <span class="material-symbols-outlined">
        </span>
        <span class="material-symbols-outlined">
        </span>
        <span class="material-symbols-outlined">
        </span>&nbsp;

        <span>agosto 2023</span>
      </span>
    </section>

    <ContactForm />
  </main>
</template>