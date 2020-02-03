import Vue from "vue"
import BaseInput from "./index.vue"
import base from "@/components/utils/base-mixin";

function getMixin(compose) {

    let mixin = {
        components: { BaseInput },
        template: `<BaseInput compose="${compose}" v-bind="{placeholder,required,maxlength,name}" @input="onInput" />`,
        props: { ...BaseInput.props },
        methods: { ...BaseInput.methods },
    }
    return mixin;
}

const SystemInput = Vue.component("system-input", {
    mixins: [base, getMixin("system")],
});
export { SystemInput }

