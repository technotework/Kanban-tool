
import Vue from "vue"
import styled from "vue-styled-components";
import BaseCheckBox from "./index.vue"

/*=========================================================

=========================================================*/
const StyledComponent = styled(BaseCheckBox)``
const ExtendsButton = Vue.component("extends-component",{
    components: {StyledComponent},
    template: `<StyledComponent />`,
    methods:{
        ...BaseCheckBox.methods
    }
    });

export {ExtendsButton}