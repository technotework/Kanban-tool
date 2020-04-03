<template>
    <div :class="$style.wrapper">
        <textarea
            v-model.lazy="myValue"
            :class="$style.text"
            class="ignore"
            v-show="isedit"
            ref="textarea"
            @keydown.13.meta="onEnter"
            @keydown.13.ctrl="onEnter"
        ></textarea>
        <div :class="$style.content" v-show="!isedit" @dblclick="onDClick">
            {{ myValue }}
        </div>
    </div>
</template>

<script>
/**
 * textareaのAtoms
 */
import base from "@/components/utils/base-mixin";
export default {
    mixins: [base],
    name: "BaseEditableTextArea",
    props: {
        isedit: Boolean,
        value: String
    },
    data: () => {
        return {
            temp: "" //一時保持データ
        };
    },
    computed: {
        myValue: {
            get() {
                return this.value;
            },
            set(value) {
                this.temp = value;
                this.$emit("input", value);
            }
        }
    },
    methods: {
        /**
         *現在のコンテンツを返す
         */
        getContent() {
            return this.$refs.textarea.value;
        },
        /**
         * handers
         */
        onDClick() {
            this.$emit("dblclick");
        },
        onEnter() {
            this.$refs.textarea.blur();
            this.$emit("input", this.temp);
            this.$emit("meta-enter");
        }
    }
};
</script>
<style lang="scss" module>
.wrapper {
    display: flex;
}
.content {
    width: 100%;
    @include taskText;
    background-color: $transparent;
    white-space: pre-line;
}
.text {
    width: 100%;
    @include taskText;
    resize: none;
}
</style>
