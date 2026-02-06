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
        Sou Daniel Souza, desenvolvedor Full Stack com foco em backend, arquitetura de sistemas
        e segurança de aplicações web. Atuo na construção de soluções robustas e escaláveis,
        com atenção especial à confiabilidade, controle de acesso e integridade dos dados.
        <br><br>
        Tenho experiência prática no desenvolvimento de SPAs, APIs REST, sistemas com
        autenticação, integração com serviços externos (como reCAPTCHA, e-mail e Firebase),
        além de deploy e configuração de ambientes em produção. Trabalho com JavaScript
        e TypeScript no frontend e backend, utilizando frameworks modernos e boas práticas
        de engenharia de software.
        <br><br>
        Ao longo dos meus projetos, desenvolvi sistemas reais utilizados por clientes,
        o que me permitiu lidar com requisitos práticos, manutenção de código, organização
        de dados e tomada de decisões técnicas. Tenho facilidade em aprender novas tecnologias
        e transformar problemas reais em soluções funcionais e bem pensadas.
      </article>
    </section>
    <h2>Um pouco mais sobre mim</h2>
    <section class="sobre">
      <article>
        Este portfólio reúne projetos que representam minha evolução técnica e minha
        capacidade de construir soluções completas do zero. Cada aplicação foi pensada
        considerando fluxo do usuário, estrutura de dados, segurança e escalabilidade.
        <br><br>
        Tenho interesse em projetos desafiadores, produtos digitais e ambientes onde
        arquitetura, código limpo e boas decisões técnicas fazem diferença. Valorizo
        colaboração, organização e clareza na comunicação técnica, tanto no código quanto
        no trabalho em equipe.
        <br><br>
        Estou sempre aprimorando minhas habilidades, explorando novas abordagens e
        ferramentas quando necessário, sem perder o foco em entregar soluções estáveis,
        eficientes e bem construídas.
      </article>
    </section>
    <!--Habilidades-->
    <h2>Habilidades</h2>
    <section class="habilidades" id="habilidades">
      <ul>
        <li><img src="../assets/static/habilidades/html.png" alt="html"></li>
        <li><img src="../assets/static/habilidades/css.png" alt="css"></li>
        <li><img src="../assets/static/habilidades/js.png" alt="javascript"></li>
        <li><img src="../assets/static/habilidades/react.png" alt="react"></li>
        <li><img src="../assets/static/habilidades/typescript.png" alt="typescript"></li>
      </ul>
      <ul>
        <li><img src="../assets/static/habilidades/debian.png" alt="debian"></li>
        <li><img src="../assets/static/habilidades/docker.png" alt="docker"></li>
        <li><img src="../assets/static/habilidades/mysql.png" alt="mysql"></li>
        <li><img src="../assets/static/habilidades/sqlite.png" alt="sqlite"></li>
        <li><img src="../assets/static/habilidades/firebase-logo.png" alt="firebase"></li>
        <li><img src="../assets/static/habilidades/gimp.png" alt="gimp"></li>
      </ul>
      <ul>
        <li><img src="../assets/static/habilidades/node.png" alt="node"></li>
        <li><img src="../assets/static/habilidades/java.png" alt="Java"></li>
        <li><img src="../assets/static/habilidades/php.png" alt="php"></li>
        <li><img src="../assets/static/habilidades/apiRest-logo.png" alt="apiRest"></li>
        <li><img src="../assets/static/habilidades/autenticacao-logo.png" alt="autenticação"></li>

      </ul>
      <div class="descricao">
        <p>
          Atuo como desenvolvedor Full Stack com forte foco em backend, arquitetura de sistemas
          e segurança de aplicações. Tenho experiência na construção de APIs robustas,
          autenticação e autorização, integração com serviços externos, validação de dados
          e proteção contra vulnerabilidades comuns em aplicações web.
          <br><br>
          No frontend, trabalho com frameworks modernos como React e Vue quando necessário,
          priorizando integração eficiente com o backend, performance e previsibilidade
          do fluxo de dados.
          <br><br>
          Possuo atenção especial a boas práticas de segurança, controle de acesso,
          gerenciamento de segredos, validação de requisições e configuração correta de
          ambientes em produção.
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
        <h2>Curiosidades de Tecnologia</h2>
        <img src="../assets/static/projetos/bugdroid.png" alt="Bug android">
        <article>O artigo <strong>História do Mascote Android</strong> explora a evolução do
          <strong>Bugdroid</strong> e a associação das versões a doces. Uma apresentação profissional e
          envolvente, demonstrando habilidades de desenvolvimento e atenção aos detalhes.
        </article>
        <p>Link: <a href="https://danieldeveloperbr.github.io/android/" target="_blank">Clica aqui</a></p>
      </div>
      <div>
        <h2>RPG Online de Turnos</h2>
        <img src="../assets/static/projetos/jogo.png" alt="RPG de turnos">
        <article>Um jogo online de 2 vs 2 onde você escolhe um personagem com uma única habilidade especial e com os
          seus atributos. O jogo têm 3 classes de personagens por enquanto que são: Bárbaro, Arqueiro e Mago.</article>
        <p>Link: <a href="https://rpg-online-v5tk.onrender.com/" target="_blank">Clica aqui</a></p>
      </div>
      <div>
        <h2>Agendamento Expresso</h2>
        <img src="../assets/static/projetos/agendamento expresso.png" alt="API-Pokemon">
        <article>O agendamento Expresso é um sistema moderno e responsivo de agendamento de horários para
          estabelecimentos, desenvolvido com foco em usabilidade, segurança e escalabilidade. Ele permite que clientes
          reservem horários online de forma prática, enquanto o administrador tem acesso a uma interface limpa para
          gerenciar reservas.</article>
        <p>Link: <a href="https://danieldeveloperbr.github.io/Projeto-ReservaNaLoja/" target="_blank">Clica aqui</a></p>
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