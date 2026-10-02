<script setup lang="ts">
import ContactForm from './ContactForm.vue';

const stackPrincipal = [
  'React',
  'TypeScript',
  'Node.js',
  'Express',
  'PostgreSQL',
  'Firebase',
  'Docker',
  'Linux',
];

const capacidades = [
  {
    titulo: 'Backend & arquitetura',
    texto: 'APIs REST, services, middlewares, validação, autenticação, autorização e regras de negócio.',
    itens: ['Node.js', 'TypeScript', 'Express', 'REST', 'JWT / cookies', 'RBAC'],
  },
  {
    titulo: 'Frontend de produto',
    texto: 'Interfaces integradas a fluxos reais, formulários complexos, estados previsíveis e manutenção de bases existentes.',
    itens: ['React', 'Vue', 'Angular', 'TypeScript', 'Vite', 'UX operacional'],
  },
  {
    titulo: 'Dados & plataforma',
    texto: 'Modelagem relacional e NoSQL, persistência, regras de acesso e integrações com serviços gerenciados.',
    itens: ['PostgreSQL', 'SQLite', 'Firestore', 'Firebase Auth', 'Storage', 'Functions'],
  },
  {
    titulo: 'Produção & qualidade',
    texto: 'Deploy, proxy reverso, containers, logs, segurança web e testes direcionados a comportamento crítico.',
    itens: ['Linux', 'Docker', 'Nginx', 'PM2', 'Vitest / Jest', 'Git'],
  },
];

const formaDeTrabalho = [
  {
    passo: '01',
    titulo: 'Entendo o impacto antes de alterar',
    texto: 'Mapeio fluxo, dependências e contratos para evitar correções que resolvem um ponto e quebram outro.',
  },
  {
    passo: '02',
    titulo: 'Protejo comportamento crítico',
    texto: 'Quando o risco de regressão existe, uso testes e validação direcionada como parte da correção.',
  },
  {
    passo: '03',
    titulo: 'Entrego além da tela',
    texto: 'Considero API, dados, segurança, deploy, rollback e manutenção; Não apenas a implementação isolada.',
  },
  {
    passo: '04',
    titulo: 'Explico decisões e trade-offs',
    texto: 'Registro o motivo das escolhas técnicas, riscos remanescentes e o que precisa ser observado depois da entrega.',
  },
];
</script>

<template>
  <main id="top">
    <section class="principal hero section-shell" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">FULL STACK · PRODUTO · ENGENHARIA</p>
        <h1 id="hero-title">Construo e evoluo sistemas reais, do código à produção.</h1>
        <p class="hero-lead">
          Atuo de ponta a ponta em aplicações reais: frontend, backend, dados e infraestrutura, com foco em
          regras de negócio, segurança, testes de regressão e manutenção sustentável.
        </p>

        <div class="hero-actions">
          <a class="button button-primary" href="#experiencia">Ver experiência</a>
          <a class="button button-secondary" href="#projetos">Ver cases</a>
          <a class="text-link" href="https://github.com/DanielDeveloperBR" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>

        <div class="stack-list" aria-label="Stack principal">
          <span v-for="tecnologia in stackPrincipal" :key="tecnologia">{{ tecnologia }}</span>
        </div>
      </div>

      <aside class="hero-profile" aria-label="Resumo profissional de Daniel Souza">
        <img src="../assets/static/minhaFoto.jpg" alt="Daniel Souza" />
        <div>
          <p class="profile-name">Daniel Souza</p>
          <p class="profile-role">Full Stack Developer</p>
        </div>

        <div class="profile-proof">
          <span>Sistemas em produção</span>
          <span>Entrega ponta a ponta</span>
          <span>Remoto · PJ</span>
        </div>

        <a class="profile-link" href="https://www.linkedin.com/in/daniel-desenvolvedor/" target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
      </aside>
    </section>

    <section class="proof-bar" aria-label="Resumo de atuação">
      <div class="section-shell proof-grid">
        <article>
          <strong>Base profissional existente</strong>
          <span>Manutenção, evolução e regressão</span>
        </article>
        <article>
          <strong>Produto próprio end-to-end</strong>
          <span>API, frontend, dados e infraestrutura</span>
        </article>
        <article>
          <strong>Segurança aplicada</strong>
          <span>Auth, autorização, validação e acesso</span>
        </article>
        <article>
          <strong>Produção</strong>
          <span>Linux, Docker, Nginx, logs e deploy</span>
        </article>
      </div>
    </section>

    <section id="experiencia" class="section-shell section-block">
      <div class="section-heading section-heading-wide">
        <p class="eyebrow">EXPERIÊNCIA PROFISSIONAL</p>
        <h2>Trabalho em sistema real exige mais do que fazer a feature funcionar.</h2>
        <p>
          Minha atuação mais relevante hoje é em uma base profissional existente, onde mudanças precisam respeitar
          regras já utilizadas, permissões, dados, integrações e comportamento anterior.
        </p>
      </div>

      <article class="experience-card">
        <div class="experience-topline">
          <div>
            <p class="case-label">CASE PROFISSIONAL · CÓDIGO RESTRITO</p>
            <h3>VistoriApp / Web Fire Risk</h3>
            <p class="experience-subtitle">Sistema técnico para fluxos de vistoria, engenharia e documentação.</p>
          </div>
          <div class="case-status">Sistema real</div>
        </div>

        <div class="experience-grid">
          <div>
            <p class="mini-title">Escopo de atuação</p>
            <ul class="check-list">
              <li>Evolução e manutenção de funcionalidades em uma base já utilizada.</li>
              <li>Fluxos de laudos, inconformidades, anexos, relatórios, assinaturas e documentos.</li>
              <li>Formulários técnicos e regras de negócio com múltiplos estados e dependências.</li>
              <li>Correções com análise de impacto e proteção contra regressões.</li>
            </ul>
          </div>

          <div>
            <p class="mini-title">Responsabilidade técnica</p>
            <ul class="check-list">
              <li>Firebase Auth, Firestore, Storage e Functions.</li>
              <li>Permissões por dono, colaborador e editor.</li>
              <li>Revisão de segurança, upload, cache/offline e acesso a dados.</li>
              <li>Services, validações, testes e ajustes de UX em fluxos críticos.</li>
            </ul>
          </div>
        </div>

        <div class="project-tags" aria-label="Tecnologias do VistoriApp">
          <span>React</span><span>TypeScript</span><span>Firebase</span><span>Vitest</span><span>Segurança</span><span>PDF</span>
        </div>
      </article>
    </section>

    <section id="projetos" class="section-block projects-section">
      <div class="section-shell">
        <div class="section-heading section-heading-wide">
          <p class="eyebrow">CASES SELECIONADOS</p>
          <h2>Projetos escolhidos pelo que demonstram de engenharia.</h2>
          <p>
            Menos projetos de estudo e mais contexto: problema, responsabilidade, decisões técnicas e operação.
          </p>
        </div>

        <div class="cases-grid">
          <article class="case-card case-card-featured">
            <div class="case-card-header">
              <div>
                <p class="case-label">PRODUTO PRÓPRIO · FULL STACK</p>
                <h3>Aguentaí</h3>
              </div>
              <span class="case-badge">End-to-end</span>
            </div>

            <p class="case-lead">
              Plataforma financeira com autenticação, orçamento, metas, grupos, diagnóstico financeiro,
              regras de plano e recursos assistidos por IA.
            </p>

            <div class="case-columns">
              <div>
                <p class="mini-title">O que construí</p>
                <ul class="check-list compact">
                  <li>Backend Node.js/TypeScript organizado por domínios e serviços.</li>
                  <li>PostgreSQL, autenticação, autorização e middlewares de plano.</li>
                  <li>Frontend integrado a fluxos financeiros e regras de produto.</li>
                </ul>
              </div>
              <div>
                <p class="mini-title">O que isso demonstra</p>
                <ul class="check-list compact">
                  <li>Decisão de arquitetura com manutenção e evolução em mente.</li>
                  <li>Testes automatizados no frontend e backend.</li>
                  <li>Deploy em VPS Linux com Docker, Nginx, domínio e logs.</li>
                </ul>
              </div>
            </div>

            <div class="project-tags">
              <span>React</span><span>TypeScript</span><span>Node.js</span><span>Express</span><span>PostgreSQL</span><span>Docker</span><span>Nginx</span>
            </div>
          </article>

          <article class="case-card">
            <div class="case-card-header">
              <div>
                <p class="case-label">SISTEMA COMERCIAL · 2024</p>
                <h3>Gestão para salão de beleza</h3>
              </div>
            </div>
            <img class="case-image" src="../assets/static/imgSalao.png" alt="Tela do sistema de gestão para salão de beleza" />
            <p>
              Sistema com autenticação, recuperação de senha, agendamentos, estoque, vendas e relatórios financeiros.
              A persistência começou em SQLite e evoluiu para PostgreSQL.
            </p>
            <div class="project-tags">
              <span>Node.js</span><span>Express</span><span>PostgreSQL</span><span>Auth</span><span>CRUD</span>
            </div>
          </article>

          <article class="case-card">
            <div class="case-card-header">
              <div>
                <p class="case-label">TEMPO REAL · PROJETO PUBLICADO</p>
                <h3>RPG online por turnos</h3>
              </div>
            </div>
            <img class="case-image" src="../assets/static/projetos/jogo.png" alt="Tela do RPG online por turnos" />
            <p>
              Multiplayer com fila de jogadores, estado de partida, classes, ações por turno e sincronização entre clientes.
            </p>
            <div class="project-tags">
              <span>Node.js</span><span>Express</span><span>WebSocket</span><span>Estado</span><span>Tempo real</span>
            </div>
            <a class="text-link" href="https://rpg-online-v5tk.onrender.com/" target="_blank" rel="noreferrer">Abrir projeto ↗</a>
          </article>
        </div>
      </div>
    </section>

    <section id="habilidades" class="section-shell section-block">
      <div class="section-heading section-heading-wide">
        <p class="eyebrow">STACK & CAPACIDADES</p>
        <h2>Meu nível aparece no tipo de problema que consigo assumir.</h2>
        <p>
          A stack é parte da história. O ponto principal é conseguir ligar frontend, backend, dados, segurança e produção
          sem perder legibilidade e previsibilidade do sistema.
        </p>
      </div>

      <div class="skills-grid">
        <article v-for="grupo in capacidades" :key="grupo.titulo" class="skill-group">
          <h3>{{ grupo.titulo }}</h3>
          <p>{{ grupo.texto }}</p>
          <div>
            <span v-for="item in grupo.itens" :key="item">{{ item }}</span>
          </div>
        </article>
      </div>
    </section>

    <section class="section-block work-section">
      <div class="section-shell">
        <div class="section-heading section-heading-wide">
          <p class="eyebrow">COMO EU TRABALHO</p>
          <h2>Processo técnico que reduz surpresa depois da entrega.</h2>
        </div>

        <div class="work-grid">
          <article v-for="item in formaDeTrabalho" :key="item.passo" class="work-card">
            <span>{{ item.passo }}</span>
            <h3>{{ item.titulo }}</h3>
            <p>{{ item.texto }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="sobre" class="section-shell section-block about-section">
      <div class="about-title">
        <p class="eyebrow">SOBRE</p>
        <h2>Visão do sistema inteiro, sem perder o detalhe da implementação.</h2>
      </div>

      <div class="about-copy">
        <p>
          Sou Daniel Souza, desenvolvedor Full Stack. Meu trabalho combina frontend, backend e infraestrutura, com
          preferência por problemas em que é preciso entender a regra de negócio e o impacto da mudança no sistema como um todo.
        </p>
        <p>
          Em bases existentes, priorizo preservar contratos e comportamento antes de refatorar. Em projetos novos,
          busco separar responsabilidades, reduzir acoplamento e deixar espaço para evolução sem criar complexidade antes da hora.
        </p>
        <p>
          Também gosto de assumir responsabilidade por módulos completos: investigar, propor, implementar, testar,
          documentar o necessário e acompanhar o que acontece depois do deploy.
        </p>
      </div>
    </section>

    <section id="avaliacoes" class="section-block testimonials-section">
      <div class="section-shell">
        <div class="section-heading section-heading-wide">
          <p class="eyebrow">FEEDBACK DE CLIENTES</p>
          <h2>Entrega técnica também precisa gerar confiança.</h2>
        </div>

        <div class="testimonials-grid">
          <blockquote>
            <p>“Profissional e de fácil comunicação.”</p>
            <footer>
              <strong>Rodrigo A.</strong>
              <span>Projeto com reCAPTCHA · 99Freelas</span>
            </footer>
          </blockquote>

          <blockquote>
            <p>
              “Sua habilidade técnica e comprometimento com a qualidade realmente se destacaram, proporcionando uma experiência de usuário incrível.”
            </p>
            <footer>
              <strong>Edvaldo V.</strong>
              <span>Implementação de telas e integração · 99Freelas</span>
            </footer>
          </blockquote>
        </div>

        <a class="text-link" href="https://www.99freelas.com.br/user/Daniel-Developer" target="_blank" rel="noreferrer">Ver avaliações no 99Freelas ↗</a>
      </div>
    </section>

    <section class="contact-intro section-shell section-block" aria-labelledby="contact-title">
      <div class="section-heading section-heading-wide">
        <p class="eyebrow">CONTATO</p>
        <h2 id="contact-title">Se você procura alguém para assumir um problema completo, podemos conversar.</h2>
        <p>
          Estou aberto a oportunidades Full Stack remotas e contratos PJ, especialmente com React, TypeScript,
          Node.js, PostgreSQL, Firebase e ambientes Linux.
        </p>
        <div class="contact-links">
          <a class="text-link" href="mailto:danieldetrabalho1@gmail.com">danieldetrabalho1@gmail.com</a>
          <a class="text-link" href="https://www.linkedin.com/in/daniel-desenvolvedor/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </section>

    <ContactForm />
  </main>
</template>