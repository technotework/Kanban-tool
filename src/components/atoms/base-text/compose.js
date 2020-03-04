import Vue from "vue"
import BaseText from "./index.vue"
import base from "@/components/utils/base-mixin";

function getMixin(compose) {

    let mixin = {
        components: { BaseText },
        template: `<BaseText compose="${compose}"><slot /></BaseText>`,
        props: { ...BaseText.props },
        methods: { ...BaseText.methods },
    }
    return mixin;
}

const ErrorText = Vue.component("error-text", {
    mixins: [getMixin("error")],
});

export { ErrorText }