import Vue from "vue"
import BaseInput from "./index.vue"
import base from "@/components/utils/base-mixin";

function getMixin() {

    let mixin = {
        components: { BaseInput },
        template: `<BaseInput round="8px" padding="10px" height="auto" @input="onInput" />`,
        props: { ...BaseInput.props },
        methods: { ...BaseInput.methods },
    }
    return mixin;
}

const SystemInput = Vue.component("system-input", {
    mixins: [getMixin()],
});
export { SystemInput }

