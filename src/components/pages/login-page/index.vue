<template>
    <Message target="auth">
        <Auth />
    </Message>
</template>

<script>
/**
 *ログイン・会員登録ページ
 */
import Auth from "@/containers/Auth";
import Message from "@/containers/Message";
export default {
    name: "LoginPage",
    components: { Auth, Message }
};
</script>
<style lang="scss" module></style>
