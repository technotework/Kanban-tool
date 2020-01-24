
import Vue from "vue"
import styled from "vue-styled-components";
import BaseEditableText from "./index.vue"

/*=========================================================

=========================================================*/
const StyledComponent = styled(BaseEditableText)``
const ExtendsButton = Vue.component("extends-component",{
    components: {StyledComponent},
    template: `<StyledComponent />`,
    methods:{
        ...BaseEditableText.methods
    }
    });

export {ExtendsButton}