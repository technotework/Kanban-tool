import Vue from "vue"
import BaseIcon from "./index.vue"
import base from "@/components/utils/base-mixin";

function getMixin(compose,shape) {

    let mixin = {
        components: { BaseIcon },
        template: `<BaseIcon compose="${compose}" shape="${shape}" :img="img"><slot /></BaseIcon>`,
        props: { ...BaseIcon.props },
    }
    return mixin;
}

const IconL = Vue.component("icon-l", {
    mixins: [getMixin("l","round")],
});

const IconM = Vue.component("icon-m", {
    mixins: [getMixin("m","round")],
});

const IconS = Vue.component("icon-s", {
    mixins: [getMixin("s","round")],
});

const IconSquare = Vue.component("icon-sq", {
    mixins: [getMixin("s","square")],
});

//================================================


export { IconL, IconM, IconS, IconSquare }
