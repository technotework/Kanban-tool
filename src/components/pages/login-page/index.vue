<template>
  <Message target="auth">
    <Auth />
  </Message>
</template>

<script>
import Auth from "@/containers/Auth";
import Message from "@/containers/Message";
export default {
  name: "LoginPage",
  props: {},
  components: { Auth, Message }
};
</script>
<style lang="scss" module>
</style>


