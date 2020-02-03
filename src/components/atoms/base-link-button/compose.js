import Vue from "vue"
import BaseLinkButton from "./index.vue"
import base from "@/components/utils/base-mixin";

function getMixin(compose) {

    let mixin = {
        components: { BaseLinkButton },
        template: `<BaseLinkButton width="150px" v-bind="{href,target}" compose="${compose}"><slot /></BaseLinkButton>`,
        props: { ...BaseLinkButton.props },
        methods: { ...BaseLinkButton.methods },
    }
    return mixin;
}

const PrimaryButton = Vue.component("primary-button", {
    mixins: [getMixin("primary"), base],
});
export { PrimaryButton }

const SecondaryButton = Vue.component("secondary-button", {
    mixins: [getMixin("secondary"), base],
});
export { SecondaryButton }
