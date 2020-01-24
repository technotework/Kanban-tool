
import Vue from "vue"
import styled from "vue-styled-components";
import BaseImage from "./index.vue"

/*=========================================================

=========================================================*/
const StyledComponent = styled(BaseImage)``
const ExtendsButton = Vue.component("extends-component",{
    components: {StyledComponent},
    template: `<StyledComponent />`,
    methods:{
        ...BaseImage.methods
    }
    });

export {ExtendsButton}