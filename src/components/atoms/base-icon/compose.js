
import Vue from "vue"
import styled from "vue-styled-components";
import BaseIcon from "./index.vue"

/*=========================================================

=========================================================*/
const StyledComponent = styled(BaseIcon)``
const ExtendsButton = Vue.component("extends-component",{
    components: {StyledComponent},
    template: `<StyledComponent />`,
    methods:{
        ...BaseIcon.methods
    }
    });

export {ExtendsButton}