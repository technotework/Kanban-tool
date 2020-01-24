
import Vue from "vue"
import styled from "vue-styled-components";
import BaseInput from "./index.vue"

/*=========================================================

=========================================================*/
const StyledComponent = styled(BaseInput)``
const ExtendsButton = Vue.component("extends-component",{
    components: {StyledComponent},
    template: `<StyledComponent />`,
    methods:{
        ...BaseInput.methods
    }
    });

export {ExtendsButton}