import Vue from "vue"
import styled from "vue-styled-components";
import BaseHeading from "./index.vue"

let factory = (id, tag) => {

    return Vue.component(id, {
        components: { BaseHeading },
        template: `<BaseHeading tag="${tag}"><slot /></BaseHeading>`,
        props: { ...BaseHeading.props }
    });
}

const H1 = factory("heading-h1", "h1");
const H2 = factory("heading-h2", "h2");
const H3 = factory("heading-h3", "h3");
const H4 = factory("heading-h3", "h4");

export { H1, H2, H3, H4 };