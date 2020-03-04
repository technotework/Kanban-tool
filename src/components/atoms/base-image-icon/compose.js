import Vue from "vue"
import BaseImageIcon from "./index.vue"

function getMixin(compose) {

    let mixin = {
        components: { BaseImageIcon },
        template: `<BaseImageIcon compose="${compose}"  :img="img"><slot /></BaseImageIcon>`,
        props: { ...BaseImageIcon.props },
    }
    return mixin;
}

const IconXL = Vue.component("icon-xl", {
    mixins: [getMixin("xl")],
});

const IconL = Vue.component("icon-l", {
    mixins: [getMixin("l")],
});

const IconM = Vue.component("icon-m", {
    mixins: [getMixin("m")],
});

const IconS = Vue.component("icon-s", {
    mixins: [getMixin("s")],
});


export { IconXL, IconL, IconM, IconS }
