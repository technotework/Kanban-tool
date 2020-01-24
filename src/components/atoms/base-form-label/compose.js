
import Vue from "vue"
import styled from "vue-styled-components";
import BaseFormLabel from "./index.vue"

/*=========================================================

=========================================================*/
const StyledComponent = styled(BaseFormLabel)``
const ExtendsButton = Vue.component("extends-component",{
    components: {StyledComponent},
    template: `<StyledComponent />`,
    methods:{
        ...BaseFormLabel.methods
    }
    });

export {ExtendsButton}