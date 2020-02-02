import Vue from "vue"
import BaseIcon from "./index.vue"
import styles from "@/components/utils/styles-mixin";

function getMixin(size) {

    let mixin = {
        components: { BaseIcon },
        template: `<BaseIcon width="${size}" height="${size}" round="${size}" :url="url" ><slot /></BaseIcon>`,
        props: { ...BaseIcon.props },
    }
    return mixin;
}

const IconL = Vue.component("icon-l", {
    mixins: [styles, getMixin("200px")],
});

const IconM = Vue.component("icon-m", {
    mixins: [styles, getMixin("150px")],
});

const IconS = Vue.component("icon-s", {
    mixins: [styles, getMixin("100px")],
});

export { IconL, IconM, IconS }
