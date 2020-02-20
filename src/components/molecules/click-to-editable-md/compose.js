import Vue from "vue"
import ClickToEditableMD from "./index.vue"
import base from "@/components/utils/base-mixin";

function getMixin() {

  let mixin = {
    components: {
      ClickToEditableMD
    },
    template: `<ClickToEditableMD :content="content" @md-save-event="onSave" @md-delete-event="onDeleteMD" />`,
    props: {
      ...ClickToEditableMD.props
    },
    methods: {
      ...ClickToEditableMD.methods,
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