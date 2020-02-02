import Vue from "vue"
import BaseButton from "./index"
import styles from "@/components/utils/styles-mixin";
function getMixin(compose, value) {

    let mixin = {
        components: { BaseButton },
        template: `<BaseButton compose="${compose}" value="${value}" :name="name" @click="onClick" />`,
        props: { ...BaseButton.props },

    }
    return mixin;
}

const PrimaryButton = Vue.component("primary", {
    mixins: [styles, getMixin("primary", "OK")],
});
export { PrimaryButton }


const SaveButton = Vue.component("save", {
    mixins: [styles, getMixin("primary", "保存")],
});
export { SaveButton }

const SecondaryButton = Vue.component("secondary", {
    mixins: [styles, getMixin("secondary", "キャンセル")],
});
export { SecondaryButton }


function getMixin2(compose) {

    let mixin = {
        components: { BaseButton },
        template: `<BaseButton compose="${compose}" :style="styles" v-bind="{value,name}"  @click="onClick" />`,
        props: { ...BaseButton.props },

    }
    return mixin;
}

const MenuButton = Vue.component("menu-button", {
    mixins: [styles, getMixin2("menu")],
});
export { MenuButton }

