import Vue from "vue"
import ClickToEditableTextarea from "./index.vue"
import base from "@/components/utils/base-mixin";

function getMixin() {

  let mixin = {
    components: {
      ClickToEditableTextarea
    },
    template: `<ClickToEditableTextarea :content="content" @save-event="onSave" @delete-event="onDelete" />`,
    props: {
      ...ClickToEditableTextarea.props
    },
    methods: {
      ...ClickToEditableTextarea.methods,
      onSave(value) {
        this.$emit("save-event", value)
      }
    }
  }
  return mixin;
}

//--------
//Posted

const PostedTextarea = Vue.component("posted-textarea", {
  mixins: [base, getMixin()],
});
export {
  PostedTextarea
}