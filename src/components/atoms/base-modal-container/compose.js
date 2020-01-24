
import Vue from "vue"
import styled from "vue-styled-components";
import BaseModalContainer from "./index.vue"

/*=========================================================

=========================================================*/
const StyledComponent = styled(BaseModalContainer)``
const ExtendsButton = Vue.component("extends-component",{
    components: {StyledComponent},
    template: `<StyledComponent />`,
    methods:{
        ...BaseModalContainer.methods
    }
    });

export {ExtendsButton}