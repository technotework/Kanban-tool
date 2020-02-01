
import Vue from "vue"
import BaseModalContainer from "./index.vue"

/*=========================================================
Dialogue
=========================================================*/

const Dialogue = Vue.component("dialogue", {
    components: { BaseModalContainer },
    template: `<BaseModalContainer top="auto" left="auto" compose="dialogue" width="350px" minHeight="200px"><slot /></BaseModalContainer> `,
    props: {
        ...BaseModalContainer.props
    }
});

export { Dialogue }