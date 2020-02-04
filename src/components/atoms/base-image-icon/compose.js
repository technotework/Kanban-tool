import Vue from "vue"
import BaseImageIcon from "./index.vue"

function getMixin(compose,shape) {

    let mixin = {
        components: { BaseImageIcon },
        template: `<BaseImageIcon compose="${compose}" shape="${shape}" :img="img"><slot /></BaseImageIcon>`,
        props: { ...BaseImageIcon.props },
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


export { IconL, IconM, IconS, IconSquare }
