
import Vue from "vue"

import BaseFileSelect from "./index.vue"

/*=========================================================

=========================================================*/

const ExtendsButton = Vue.component("extends-component", {
    components: { StyledComponent },
    template: `<StyledComponent />`,
    methods: {
        ...BaseFileSelect.methods
    }
});

export { ExtendsButton }