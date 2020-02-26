<template>
  <Message v-model="disableMessage">
    <Boards />
  </Message>
</template>

<script>
import Boards from "@/containers/Boards";
import Message from "@/containers/Message";
export default {
  name: "ProjectPage",
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
    Message,
    Boards
  }
};
</script>
<style lang="scss" module>
</style>


