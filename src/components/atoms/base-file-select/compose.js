
import Vue from "vue"
import styled from "vue-styled-components";
import BaseFileSelect from "./index.vue"

/*=========================================================

=========================================================*/
const StyledComponent = styled(BaseFileSelect)``
const ExtendsButton = Vue.component("extends-component",{
    components: {StyledComponent},
    template: `<StyledComponent />`,
    methods:{
        ...BaseFileSelect.methods
    }
    });

export {ExtendsButton}