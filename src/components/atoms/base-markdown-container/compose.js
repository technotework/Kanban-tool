
import Vue from "vue"
import styled from "vue-styled-components";
import BaseMarkdownContainer from "./index.vue"

/*=========================================================

=========================================================*/
const StyledComponent = styled(BaseMarkdownContainer)``
const ExtendsButton = Vue.component("extends-component",{
    components: {StyledComponent},
    template: `<StyledComponent />`,
    methods:{
        ...BaseMarkdownContainer.methods
    }
    });

export {ExtendsButton}