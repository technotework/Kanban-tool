import Vue from "vue"
import BaseIcon from "./index.vue"
import base from "@/components/utils/base-mixin";

function getMixin(compose) {

    let mixin = {
        components: { BaseIcon },
        template: `<BaseIcon compose="${compose}" :img="img"><slot /></BaseIcon>`,
        props: { ...BaseIcon.props },
    }
    return mixin;
}

const IconL = Vue.component("icon-l", {
    mixins: [getMixin("l")],
});

const IconM = Vue.component("icon-m", {
    mixins: [getMixin("m")],
});

const IconS = Vue.component("icon-s", {
    mixins: [getMixin("s")],
});

export { IconL, IconM, IconS }
