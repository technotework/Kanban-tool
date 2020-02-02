import Vue from "vue"
import BaseHeading from "./index.vue"


function getMixin(tag) {

    let mixin = {
        components: { BaseHeading },
        template: `<BaseHeading tag="${tag}"><slot /></BaseHeading>`,
        props: { ...BaseHeading.props }
    }
    return mixin;
}

const H1 = Vue.component("heading-h1", {
    mixins: [getMixin("h1")],
});

const H2 = Vue.component("heading-h2", {
    mixins: [getMixin("h2")],
});

const H3 = Vue.component("heading-h3", {
    mixins: [getMixin("h3")],
});

const H4 = Vue.component("heading-h4", {
    mixins: [getMixin("h4")],
});

export { H1, H2, H3, H4 };