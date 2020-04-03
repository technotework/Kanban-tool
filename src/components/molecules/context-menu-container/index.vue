<template>
    <div>
        <TransparentButton @click="onMenuTriggerClick">
            <slot name="button" />
        </TransparentButton>
        <template v-if="showContext">
            <slot name="menu" />
        </template>
    </div>
</template>

<script>
/**
 * ボタンエリアがおされたらコンテンツエリアの内容を表示するだけのコンポーネント
 */
import Vue from "vue";
import { TransparentButton } from "@/components/atoms/base-no-link-button/compose";

export default {
    name: "ContextMenuContainer",
    props: {},
    data: function() {
        return {
            showContext: false
        };
    },
    components: {
        TransparentButton
    },
    methods: {
        /**
         * handlers
         */
        onMenuTriggerClick(e) {
            this.showContext = !this.showContext;
            e.status = this.showContext;
            this.$emit("click", e);
        },
        onClose() {
            this.showContext = !this.showContext;
        }
    }
};
</script>
