
import Vue from "vue"
import styled from "vue-styled-components";
import BaseSelect from "./index.vue"

/*=========================================================

=========================================================*/
const StyledComponent = styled(BaseSelect)``
const ExtendsButton = Vue.component("extends-component",{
    components: {StyledComponent},
    template: `<StyledComponent />`,
    methods:{
        ...BaseSelect.methods
    }
    });

export {ExtendsButton}