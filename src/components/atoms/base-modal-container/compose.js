import Vue from "vue";
import BaseModalContainer from "./index.vue";

/*=========================================================
Dialogue
=========================================================*/

const Dialogue = Vue.component("dialogue", {
    components: { BaseModalContainer },
    template: `<BaseModalContainer compose="dialogue"><slot /></BaseModalContainer>`,
    props: {
        ...BaseModalContainer.props
    }
});

export { Dialogue };
