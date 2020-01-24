
import Vue from "vue"
import styled from "vue-styled-components";
import BaseColorChip from "./index.vue"

/*=========================================================

=========================================================*/
const StyledComponent = styled(BaseColorChip)``
const ExtendsButton = Vue.component("extends-component",{
    components: {StyledComponent},
    template: `<StyledComponent />`,
    methods:{
        ...BaseColorChip.methods
    }
    });

export {ExtendsButton}