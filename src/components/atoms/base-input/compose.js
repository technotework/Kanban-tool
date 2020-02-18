import Vue from "vue"
import BaseInput from "./index.vue"
import base from "@/components/utils/base-mixin";

function getMixin(compose, type) {

  let mixin = {
    components: {
      BaseInput
    },
    template: `<BaseInput type="${type}" compose="${compose}" v-bind="{placeholder,required,maxlength,name,readonly}" v-model.lazy="myValue" @keyup-enter="onKeyup" />`,
    props: {
      ...BaseInput.props
    },
    methods: {
      ...BaseInput.methods
    },
    computed: {
      ...BaseInput.computed
    },
  }
  return mixin;
}

const SystemInput = Vue.component("system-input", {
  mixins: [base, getMixin("system", "text")],
});
export {
  SystemInput
}

const SystemPassword = Vue.component("system-password", {
  mixins: [base, getMixin("system", "password")],
});
export {
  SystemPassword
}

const EditInput = Vue.component("edit-input", {
  mixins: [base, getMixin("editable", "text")],
});
export {
  EditInput
}