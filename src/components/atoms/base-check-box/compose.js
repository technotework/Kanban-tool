import Vue from "vue";
import base from "@/components/utils/base-mixin";
import cbMixin from "./mixin"

/**
 * modelがBooleanのcheckbox
 */
const BaseCheckBox = Vue.component("base-check-box", {
    mixins: [cbMixin, base],
    props: {
        model: Boolean
    }
});

/**
 * modelがArrayのcheckbox
 */
const BaseCheckBoxVModel = Vue.component("base-check-box-vmodel", {
    mixins: [cbMixin, base],
    props: {
        model: Array
    }
});

export { BaseCheckBox, BaseCheckBoxVModel };