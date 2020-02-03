import Vue from "vue"
import BaseIcon from "./index.vue"
import base from "@/components/utils/base-mixin";

function getMixin(size) {

    let mixin = {
        components: { BaseIcon },
        template: `<BaseIcon width="${size}" height="${size}" round="${size}" :url="url" ><slot /></BaseIcon>`,
        props: { ...BaseIcon.props },
    }
    return mixin;
}

const IconL = Vue.component("icon-l", {
    mixins: [getMixin("200px")],
});

const IconM = Vue.component("icon-m", {
    mixins: [getMixin("150px")],
});

const IconS = Vue.component("icon-s", {
    mixins: [getMixin("100px")],
});

export { IconL, IconM, IconS }
