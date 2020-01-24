
import Vue from "vue"
import styled from "vue-styled-components";
import BaseModelessContainer from "./index.vue"

/*=========================================================

=========================================================*/
const StyledComponent = styled(BaseModelessContainer)``
const ExtendsButton = Vue.component("extends-component",{
    components: {StyledComponent},
    template: `<StyledComponent />`,
    methods:{
        ...BaseModelessContainer.methods
    }
    });

export {ExtendsButton}