
import Vue from "vue"
import BaseInput from "./index.vue"


const SystemInput = Vue.component("system-input", {
    components: { BaseInput },
    template: `<BaseInput round="8px" padding="10px" height="auto" v-bind={width,required,placeholder,maxlength,name} />`,
    props: { ...BaseInput.props }
});

export { SystemInput }