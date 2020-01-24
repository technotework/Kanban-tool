import Vue from "vue"
import styled from "vue-styled-components";
import BaseButton from "./index.vue"


/*=========================================================
PrimaryButton
=========================================================*/
const StyledPrimaryButton = styled(BaseButton)`

    background-color:#ff0;
`;

const PrimaryButton = Vue.component("primary-button",{
    components: {StyledPrimaryButton},
    template: `<StyledPrimaryButton @click="onClick" />`,
    methods:{
        ...BaseButton.methods
    }
    });

export {PrimaryButton}

/*=========================================================
SecondaryButton
=========================================================*/

const StyledSecondaryButton = styled(BaseButton)`

    background-color:#ccc;
`;

const SecondaryButton = Vue.component("secondary-button",{
    components: {StyledSecondaryButton},
    template: `<StyledSecondaryButton @click="onClick" />`,
    methods:{
        ...BaseButton.methods
    }
    });

export {SecondaryButton}