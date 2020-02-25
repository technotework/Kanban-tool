<template>
  <div id="app">
    <Message>
      <router-view />
    </Message>
  </div>
</template>

<script>
import Message from "@/containers/Message";
export default {
  name: "App",
  computed: {},
  data: () => {
    return {};
  },
  methods: {},
  components: { Message }
};
</script>
