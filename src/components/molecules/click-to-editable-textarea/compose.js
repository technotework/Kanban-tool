import Vue from "vue"
import ClickToEditableTextarea from "./index.vue"
import base from "@/components/utils/base-mixin";

function getMixin() {

  let mixin = {
    components: {
      ClickToEditableTextarea
    },
    template: `<ClickToEditableTextarea :content="content" @md-save-event="onSave" @md-delete-event="onDeleteMD" />`,
    props: {
      ...ClickToEditableTextarea.props
    },
    methods: {
      ...ClickToEditableTextarea.methods,
      onSave(value) {
        this.$emit("md-save-event", value)
      }
    }
  }
  return mixin;
}

//--------
//Posted

const PostedMD = Vue.component("posted-md", {
  mixins: [base, getMixin()],
});
export {
  PostedMD
}