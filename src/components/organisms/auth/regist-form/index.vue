<template>
    <div :class="$style.wrapper">
        <form @submit.prevent>
            <span :class="$style.label">メールアドレス</span>
            <SystemInput v-model="id" required :class="$style.item" />
            <span :class="$style.label">パスワード</span>
            <SystemPassword v-model="pass" required :class="$style.item" />

            <div :class="$style.bottoms">
                <LabeledCheckbox
                    id="agreement"
                    value="agreement"
                    v-model="modelData"
                    :class="$style.agree"
                >
                    <a href="#" target="_blank" @click.prevent="onAgreeClick">デモのご注意</a
                    >に同意する
                </LabeledCheckbox>
                <BaseSubmitButton @click="onRegist" value="登録" :class="$style.button" />
            </div>
        </form>
    </div>
</template>

<script>
/**
 * 登録フォームのコンポーネント
 */
import { SystemInput, SystemPassword } from "@/components/atoms/base-input/compose";
import LabeledCheckbox from "@/components/molecules/labeled-check-box/base";
import BaseSubmitButton from "@/components/atoms/base-submit-button/";
import base from "@/components/utils/base-mixin";
export default {
    mixins: [base],
    name: "registForm",
    data: () => {
        return {
            id: "",
            pass: "",
            agree: false
        };
    },
    props: {},
    computed: {
        modelData: {
            get() {
                return this.agree;
            },
            set(value) {
                this.agree = value;
            }
        }
    },
    methods: {
        onRegist(e) {
            this.$emit("regist-event", {
                id: this.id,
                pass: this.pass,
                agree: this.agree,
                e: e
            });
        },
        onAgreeClick() {
            this.$emit("agree-event");
        }
    },
    components: {
        SystemInput,
        SystemPassword,
        BaseSubmitButton,
        LabeledCheckbox
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
    display: inline-block;
    width: 86px;
}
.agree {
    @include agree;
}
.bottoms {
    display: flex;
    justify-content: flex-end;
}
</style>
