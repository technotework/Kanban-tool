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

const CaptionText = Vue.component("caption-text", {
    mixins: [getMixin("caption")],
});


const ErrorText = Vue.component("error-text", {
    mixins: [getMixin("error")],
});

const WarnText = Vue.component("warn-text", {
    mixins: [getMixin("warn")],
});

const NormalText = Vue.component("warn-text", {
    mixins: [getMixin("normal")],
});
export { CaptionText, ErrorText, WarnText, NormalText }