<template>
  <div id="app">
    <router-view />
    <SB4 :items="items" />
  </div>
</template>

<script>
import SB4 from "./Sandbox4";
export default {
  name: "SB5",
  data: () => {
    return {
      items: [
        {
          id: "t1",
          content: "a",
          data: [
            { id: "at1", content: "aaaa" },
            { id: "at2", content: "aaaaaa" }
          ]
        },
        {
          id: "t2",
          content: "b",
          data: [
            { id: "bt1", content: "bbbbb" },
            { id: "bt2", content: "bbbb" }
          ]
        }
      ]
    };
  },
  methods: {},
  components: { SB4 }
};
</script>
