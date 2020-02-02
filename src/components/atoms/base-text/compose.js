import Vue from "vue"
import BaseText from "./index.vue"
import styles from "@/components/utils/styles-mixin";

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
    mixins: [styles, getMixin("300px", "caption")],
});


const ErrorText = Vue.component("error-text", {
    mixins: [styles, getMixin("300px", "error")],
});

const WarnText = Vue.component("warn-text", {
    mixins: [styles, getMixin("300px", "warn")],
});

const NormalText = Vue.component("warn-text", {
    mixins: [styles, getMixin("300px", "normal")],
});
export { CaptionText, ErrorText, WarnText, NormalText }