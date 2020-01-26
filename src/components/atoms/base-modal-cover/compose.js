
import Vue from "vue"
import styled from "vue-styled-components";
import BaseModalCover from "./index.vue"

/*=========================================================

=========================================================*/
const StyledComponent = styled(BaseModalCover)``
const ExtendsButton = Vue.component("extends-component", {
    components: { StyledComponent },
    template: `<StyledComponent />`,
    methods: {
        ...BaseModalCover.methods
    }
});

export { ExtendsButton }