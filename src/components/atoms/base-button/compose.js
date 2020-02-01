import Vue from "vue"
import BaseButton from "./index"


let factory = (id, compose, value) => {

    return Vue.component(id, {
        components: { BaseButton },
        template: `<BaseButton compose="${compose}" value="${value}" :name="name" @click="onClick"/>`,
        props: { ...BaseButton.props },
        methods: { ...BaseButton.methods }
    });
}

const PrimaryButton = factory("primary-button", "primary", "OK");
export { PrimaryButton }

const SaveButton = factory("save-button", "primary", "保存");
export { SaveButton }

const SecondaryButton = factory("secondary-button", "secondary", "キャンセル");
export { SecondaryButton }

