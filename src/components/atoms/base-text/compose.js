import Vue from "vue"
import BaseText from "./index.vue"
import base from "@/components/utils/base-mixin";

function getMixin(mw, compose) {

    let mixin = {
        components: { BaseText },
        template: `<BaseText minWidth="${mw}" compose="${compose}"><slot /></BaseText>`,
        props: { ...BaseText.props },
        methods: { ...BaseText.methods },
    }
    return mixin;
}

const CaptionText = Vue.component("caption-text", {
    mixins: [getMixin("300px", "caption")],
});


const ErrorText = Vue.component("error-text", {
    mixins: [getMixin("300px", "error")],
});

const WarnText = Vue.component("warn-text", {
    mixins: [getMixin("300px", "warn")],
});

const NormalText = Vue.component("warn-text", {
    mixins: [getMixin("300px", "normal")],
});
export { CaptionText, ErrorText, WarnText, NormalText }