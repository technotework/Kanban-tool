import Vue from "vue";
import BaseNoLinkButton from "./index.vue";
import base from "@/components/utils/base-mixin";

function getMixin(compose) {
  let mixin = {
    components: { BaseNoLinkButton },
    template: `<BaseNoLinkButton compose="${compose}" @click="onClick"><slot /></BaseNoLinkButton>`,
    props: { ...BaseNoLinkButton.props },
    methods: { ...BaseNoLinkButton.methods }
  };
  return mixin;
}

const PrimaryButton = Vue.component("primary-button", {
  mixins: [getMixin("primary"), base]
});
export { PrimaryButton };

const SecondaryButton = Vue.component("secondary-button", {
  mixins: [getMixin("secondary"), base]
});
export { SecondaryButton };

const TransparentButton = Vue.component("transparent-button", {
  mixins: [getMixin("transparent"), base]
});
export { TransparentButton };
