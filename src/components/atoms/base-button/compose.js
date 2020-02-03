import Vue from "vue"
import BaseButton from "./index"
import base from "@/components/utils/base-mixin";
function getMixin(compose, value) {

    let mixin = {
        components: { BaseButton },
        template: `<BaseButton compose="${compose}" value="${value}" :name="name" @click="onClick" />`,
        props: { ...BaseButton.props },

    }
    return mixin;
}

const PrimaryButton = Vue.component("primary", {
    mixins: [getMixin("primary", "OK")],
});
export { PrimaryButton }


const SaveButton = Vue.component("save", {
    mixins: [getMixin("primary", "保存")],
});
export { SaveButton }

const SecondaryButton = Vue.component("secondary", {
    mixins: [getMixin("secondary", "キャンセル")],
});
export { SecondaryButton }


function getMixin2(compose) {

    let mixin = {
        components: { BaseButton },
        template: `<BaseButton compose="${compose}" v-bind="{value,name}"  @click="onClick" />`,
        props: { ...BaseButton.props },

    }
    return mixin;
}

const MenuButton = Vue.component("menu-button", {
    mixins: [getMixin2("menu")],
});
export { MenuButton }

