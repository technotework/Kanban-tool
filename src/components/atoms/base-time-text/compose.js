
import Vue from "vue"
import styled from "vue-styled-components";
import BaseTimeText from "./index.vue"

/*=========================================================

=========================================================*/
const StyledComponent = styled(BaseTimeText)``
const ExtendsButton = Vue.component("extends-component",{
    components: {StyledComponent},
    template: `<StyledComponent />`,
    methods:{
        ...BaseTimeText.methods
    }
    });

export {ExtendsButton}