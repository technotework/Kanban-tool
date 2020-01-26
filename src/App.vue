<template>
  <div id="app">
    <router-view />
    <Theme>
       <BaseHeading heading="lv1">h1</BaseHeading>
      <Select name="hoge" :items="items"  />
    </Theme>
  </div>
</template>

<script>
import Theme from "@/components/themes/theme";
import BaseHeading from "@/components/atoms/base-heading"
import Select from "@/components/atoms/base-select"
export default {
  name: "App",
  props: {},
  data:function(){
    return {
      selected:"",
      items:[
                {value:"cat", content:"ねこさん"},
                {value:"dog", content:"いぬさん"},
                {value:"panda", content:"ぱんださん"}
            ]
    }
  },
  components: { Select,BaseHeading,Theme }
};
</script>
