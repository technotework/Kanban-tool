import Vue from "vue"
import ClickToEditableMD from "./index.vue"
import base from "@/components/utils/base-mixin";

function getMixin(initial) {

  let mixin = {
    components: {
      ClickToEditableMD
    },
    template: `<ClickToEditableMD :isinitial="${initial}" v-model.lazy="myValue" ${initial ? `@cancel-submit-md="onCancelSubmitMD" @submit-md="onSubmitMD"`:``} />`,
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
  mixins: [base, getMixin(false, false)],
});
export {
  PostedMD
}

//--------
//Submit

const SubmitMD = Vue.component("submit-md", {
  mixins: [base, getMixin(true, false)],
});
export {
  SubmitMD
}