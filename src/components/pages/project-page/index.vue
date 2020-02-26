<template>
  <Message target="board">
    <Boards />
  </Message>
</template>

<script>
import Boards from "@/containers/Boards";
import Message from "@/containers/Message";
export default {
  name: "ProjectPage",
  props: {},
  data: () => {
    return {};
  },
  components: {
    Message,
    Boards
  }
};
</script>
<style lang="scss" module>
</style>


