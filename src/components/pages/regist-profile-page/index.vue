<template>
    <Message target="profile">
        <User />
    </Message>
</template>

<script>
/**
 *プロフィール登録ページ
 */
import User from "@/containers/User";
import Message from "@/containers/Message";
export default {
    name: "RegistProfilePage",
    components: { User, Message }
};
</script>
<style lang="scss" module></style>
