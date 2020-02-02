import Vue from "vue"
import BaseLinkButton from "./index.vue"
import styles from "@/components/utils/styles-mixin";

function getMixin(compose) {

    let mixin = {
        components: { BaseLinkButton },
        template: `<BaseLinkButton :compose="compose"><slot /></BaseLinkButton>`,
        props: { ...BaseLinkButton.props },
        methods: { ...BaseLinkButton.methods },
    }
    return mixin;
}

const PrimaryButton = Vue.component("primary-button", {
    mixins: [styles, getMixin("primary")],
});
export { PrimaryButton }

const SecondaryButton = Vue.component("secondary-button", {
    mixins: [styles, getMixin("secondary")],
});
export { SecondaryButton }
