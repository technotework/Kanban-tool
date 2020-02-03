
import Vue from "vue"

import BaseFormLabel from "./index.vue"

/*=========================================================

=========================================================*/

const ExtendsButton = Vue.component("extends-component", {
    components: { StyledComponent },
    template: `<StyledComponent />`,
    methods: {
        ...BaseFormLabel.methods
    }
});

export { ExtendsButton }