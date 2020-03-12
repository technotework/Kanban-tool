import Vue from "vue"
import BaseInput from "./index.vue"
import base from "@/components/utils/base-mixin";

function getMixin(compose, type) {

  let mixin = {
    components: {
      BaseInput
    },
    template: `<BaseInput type="${type}" compose="${compose}" v-bind="{placeholder,required,maxlength,name,readonly}" v-model.lazy="myValue" @keydown-enter="onKeydown" />`,
    props: {
      ...BaseInput.props
    },
    methods: {
      ...BaseInput.methods,
      onKeydown() {
        this.$emit("keydown-enter");

      }
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

const EditInputTitle = Vue.component("edit-input-title", {
  mixins: [base, getMixin("editableTitle", "text")],
});
export {
  EditInputTitle
}