<template>
  <Message target="profile">
    <User />
  </Message>
</template>

<script>
import User from "@/containers/User";
import Message from "@/containers/Message";
export default {
  name: "RegistProfilePage",
  props: {},
  components: { User, Message }
};
</script>
<style lang="scss" module>
</style>


