
import Vue from "vue"
import styled from "vue-styled-components";
import BaseLinkButton from "./index.vue"

/*=========================================================

=========================================================*/
const StyledComponent = styled(BaseLinkButton)``
const ExtendsButton = Vue.component("extends-component",{
    components: {StyledComponent},
    template: `<StyledComponent />`,
    methods:{
        ...BaseLinkButton.methods
    }
    });

export {ExtendsButton}