import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('mantém o fluxo de reCAPTCHA e envio de contato', async () => {
  const [contactForm, recaptchaApi] = await Promise.all([
    read('src/components/ContactForm.vue'),
    read('api/validateRecaptcha.ts'),
  ]);

  assert.match(contactForm, /recaptcha\/api\.js\?render=/);
  assert.match(contactForm, /grecaptcha\.ready/);
  assert.match(contactForm, /grecaptcha\.execute/);
  assert.doesNotMatch(contactForm, /recaptcha\/enterprise\.js/);
  assert.match(contactForm, /\/api\/validateRecaptcha/);
  assert.match(contactForm, /\/api\/sendEmail/);
  assert.match(recaptchaApi, /recaptcha\.net\/recaptcha\/api\/siteverify/);
  assert.match(recaptchaApi, /if \(!recaptchaData\.success\)/);
});

test('todos os links internos do menu apontam para seções existentes', async () => {
  const [header, main, contactForm] = await Promise.all([
    read('src/components/Header.vue'),
    read('src/components/Main.vue'),
    read('src/components/ContactForm.vue'),
  ]);

  const ids = new Set(
    [...`${main}\n${contactForm}`.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
  );
  const targets = [...header.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);

  assert.ok(targets.length > 0);
  for (const target of targets) {
    assert.ok(ids.has(target), `Seção #${target} não encontrada`);
  }
});

test('prioriza experiência e cases compatíveis com o posicionamento profissional', async () => {
  const main = await read('src/components/Main.vue');

  assert.match(main, /VistoriApp \/ Web Fire Risk/);
  assert.match(main, /Aguentaí/);
  assert.match(main, /Gestão para salão de beleza/);
  assert.doesNotMatch(main, /Curiosidades de Tecnologia/);
  assert.doesNotMatch(main, /Api de Pokemon/i);
});
