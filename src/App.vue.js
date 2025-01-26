import Header from './views/Header.vue';
import Main from './views/Main.vue';
import Footer from './views/Footer.vue'; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    /** @type { [typeof Header, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Header, new Header({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    /** @type { [typeof Main, ] } */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(Main, new Main({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    // @ts-ignore
    /** @type { [typeof Footer, ] } */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(Footer, new Footer({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
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
            Header: Header,
            Main: Main,
            Footer: Footer,
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
