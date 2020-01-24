
import Vue from "vue"
import styled from "vue-styled-components";
import BaseText from "./index.vue"

/*=========================================================

=========================================================*/
const StyledComponent = styled(BaseText)``
const ExtendsButton = Vue.component("extends-component",{
    components: {StyledComponent},
    template: `<StyledComponent />`,
    methods:{
        ...BaseText.methods
    }
    });

export {ExtendsButton}