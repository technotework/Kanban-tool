import Vue from "vue";
import base from "@/components/utils/base-mixin";
import cbMixin from "./mixin"

const BaseCheckBox = Vue.component("base-check-box", {
  mixins: [cbMixin, base],
  props: {
    model: Boolean
  }
});

const BaseCheckBoxVModel = Vue.component("base-check-box-vmodel", {
  mixins: [cbMixin, base],
  props: {
    model: Array
  }
});

export { BaseCheckBox, BaseCheckBoxVModel };