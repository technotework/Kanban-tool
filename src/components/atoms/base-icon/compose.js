import Vue from "vue"
import BaseIcon from "./index.vue"

let factory = (id, size) => {

    return Vue.component(id, {
        components: { BaseIcon },
        template: `<BaseIcon width="${size}" height="${size}" round="${size}" :src="src"><slot /></BaseIcon>`,
        props: { ...BaseIcon.props }
    });
}

const IconL = factory("icon-l", "200px");
const IconM = factory("icon-m", "150px");
const IconS = factory("icon-s", "100px");

export { IconL, IconM, IconS }
