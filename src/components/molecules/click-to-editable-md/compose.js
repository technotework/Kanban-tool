import Vue from "vue"
import ClickToEditableMD from "./index.vue"
import base from "@/components/utils/base-mixin";

function getMixin() {

  let mixin = {
    components: {
      ClickToEditableMD
    },
    template: `<ClickToEditableMD v-model.lazy="myValue" />`,
    props: {
      ...ClickToEditableMD.props
    },
    methods: {
      ...ClickToEditableMD.methods
    },
    computed: {
      ...ClickToEditableMD.computed
    },
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