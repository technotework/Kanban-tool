<template>
  <div id="app">
    <BaseButton value="hoge" @click="handler" />
     <router-view />

  </div>
</template>

<script>
import BaseButton from "@/components/atoms/base-button"

export default {
  name: "App",
  props: {},
  components:{BaseButton},
  methods:{handler:function(e){

    console.log("e");
  }}
};
</script>
