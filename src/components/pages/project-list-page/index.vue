<template>
  <Message v-model="disableMessage">
    <Projects />
  </Message>
</template>

<script>
import Message from "@/containers/Message";
import Projects from "@/containers/Projects";
export default {
  name: "ProjectListPage",
  props: {},
  created() {
    this.disableMessage = false;
  },
  destroyed() {
    this.disableMessage = true;
  },
  data: () => {
    return {
      disableMessage: false
    };
  },
  components: {
    Projects,
    Message
  }
};
</script>

