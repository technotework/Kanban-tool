<template>
    <div :class="$style.wrapper">
        <form @submit.prevent>
            <span :class="$style.label">ID</span>
            <SystemInput v-model="id" required :class="$style.item" />
            <span :class="$style.label">パスワード</span>
            <SystemPassword v-model="pass" required :class="$style.item" />
            <div :class="$style.submit">
                <BaseSubmitButton
                    @click="onLogin"
                    value="ログイン"
                    :class="$style.button"
                />
            </div>
        </form>
    </div>
</template>

<script>
/**
 * ログインフォームのコンポーネント
 */
import {
    SystemInput,
    SystemPassword
} from "@/components/atoms/base-input/compose";
import BaseSubmitButton from "@/components/atoms/base-submit-button/";
import base from "@/components/utils/base-mixin";
export default {
    mixins: [base],
    name: "loginForm",
    data: () => {
        return {
            id: "",
            pass: ""
        };
    },
    props: {},
    methods: {
        onLogin(e) {
            this.$emit("login-event", { id: this.id, pass: this.pass, e: e });
        }
    },
    components: {
        SystemInput,
        SystemPassword,
        BaseSubmitButton
    }
};
</script>

<style lang="scss" module>
.wrapper {
    max-width: 350px;
}
.item {
    margin: 0 0 19px 0;
}
.label {
    @include authLabel;
}
.submit {
    width: 100%;
    text-align: right;
}
.button {
    width: 86px;
}
</style>
