import Vue from "vue"
import styled from "vue-styled-components";
import BaseHeading from "./index.vue"

/*=========================================================

=========================================================*/
const StyledComponent = styled(BaseHeading)``
const ExtendsButton = Vue.component("extends-component",{
    components: {StyledComponent},
    template: `<StyledComponent />`,
    methods:{
        ...BaseHeading.methods
    }
    });

export {ExtendsButton}