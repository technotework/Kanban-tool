import Vue from "vue";
import BaseNoLinkButton from "./index.vue";
import base from "@/components/utils/base-mixin";

function getMixin(compose) {
  let mixin = {
    components: {
      BaseNoLinkButton
    },
    template: `<BaseNoLinkButton compose="${compose}" @click="onClick"><slot /></BaseNoLinkButton>`,
    props: {
      ...BaseNoLinkButton.props
    },
    methods: {
      ...BaseNoLinkButton.methods
    }
  };
  return mixin;
}

const PrimaryButton = Vue.component("primary-button", {
  mixins: [getMixin("primary"), base]
});


const SecondaryButton = Vue.component("secondary-button", {
  mixins: [getMixin("secondary"), base]
});


const PrimaryMiniButton = Vue.component("primary-mini-button", {
  mixins: [getMixin("mprimary"), base]
});


const SecondaryMiniButton = Vue.component("secondary-mini-button", {
  mixins: [getMixin("msecondary"), base]
});

const TransparentButton = Vue.component("transparent-button", {
  mixins: [getMixin("transparent"), base]
});

const MenuButton = Vue.component("menu-button", {
  mixins: [getMixin("menu"), base]
});


const MiniButton = Vue.component("mini-button", {
  mixins: [getMixin("mini"), base]
});

const BigButton = Vue.component("big-button", {
  mixins: [getMixin("big"), base]
});

//fixme
const TextButton = Vue.component("text-button", {
  mixins: [getMixin("text"), base]
});


export {
  PrimaryButton, SecondaryButton, PrimaryMiniButton, SecondaryMiniButton, TransparentButton, MenuButton, MiniButton, BigButton,
  TextButton
};
