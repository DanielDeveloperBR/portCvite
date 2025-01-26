import { ref } from 'vue';
// Variáveis reativas para armazenar mensagens e status
const responseMessage = ref('');
const successMessage = ref(false);
async function handlerSubmit(e) {
    e.preventDefault();
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const assunto = document.querySelector('#assunto').value;
    const mensagem = document.querySelector('#mensagem').value;
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
        }
        else {
            responseMessage.value = result.message;
            successMessage.value = false;
        }
    }
    catch (error) {
        responseMessage.value = 'Erro ao enviar o email. Por favor, tente novamente.';
        successMessage.value = false;
    }
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: ("container-form") },
        id: ("contatos"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("modeloFormulario") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
        ...{ onSubmit: (__VLS_ctx.handlerSubmit) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        for: ("nome"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
        type: ("text"),
        id: ("nome"),
        name: ("nome"),
        placeholder: ("Seu Nome"),
        required: (true),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        for: ("email"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
        type: ("email"),
        id: ("email"),
        name: ("email"),
        placeholder: ("Seu Email"),
        required: (true),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        for: ("assunto"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
        type: ("text"),
        id: ("assunto"),
        name: ("assunto"),
        placeholder: ("Assunto"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        for: ("mensagem"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
        id: ("mensagem"),
        name: ("mensagem"),
        placeholder: ("Sua mensagem"),
        rows: ("10"),
        required: (true),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        type: ("submit"),
    });
    if (__VLS_ctx.responseMessage) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ((__VLS_ctx.successMessage ? 'success' : 'error')) },
        });
        (__VLS_ctx.responseMessage);
    }
    ['container-form', 'modeloFormulario',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            responseMessage: responseMessage,
            successMessage: successMessage,
            handlerSubmit: handlerSubmit,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
