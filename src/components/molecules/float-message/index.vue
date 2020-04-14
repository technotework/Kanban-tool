<template v-bind="(message, type, index)">
    <TransparentButton :class="$style.button" @click="onDeleteMessage">
        <component
            :is="type"
            :class="[$style.float, { [$style.open]: isShow }, { [$style.close]: !isShow }]"
        >
            {{ messageText }}
            <BaseIcon type="close" :class="$style.icon" />
        </component>
    </TransparentButton>
</template>

<script>
/**
 * 表示されて一定期間後消えるメッセージ
 */
import Vue from "vue";
import base from "@/components/utils/base-mixin";
import { ErrorText } from "@/components/atoms/base-text/compose";
import BaseIcon from "@/components/atoms/base-icon/";
import { TransparentButton } from "@/components/atoms/base-no-link-button/compose";

export default {
    mixins: [base],
    name: "FloatMessage",
    props: {
        type: String,
        message: String,
        id: String
    },
    mounted() {
        //生成後一定期間後消える
        this.isShow = false;
        let showTimer = window.setTimeout(() => {
            this.isShow = true;
            window.clearTimeout(showTimer);
        }, 10);

        if (this.autoHide) {
            let autoTimer = window.setTimeout(() => {
                if (this.isShow) {
                    this.onDeleteMessage();
                }
                window.clearTimeout(autoTimer);
            }, 5000);
        }
    },
    data: () => {
        return {
            isShow: false,
            autoHide: true
        };
    },
    computed: {
        messageText() {
            return this.message;
        }
    },
    methods: {
        /**
         * closeが押された
         */
        onDeleteMessage() {
            this.isShow = false;
            let afterAnimeTimer = window.setTimeout(() => {
                this.$emit("delete-message", this.id);
                window.clearTimeout(afterAnimeTimer);
            }, 2000);
        }
    },
    components: { ErrorText, BaseIcon, TransparentButton }
};
</script>
<style lang="scss" module>
.button {
    position: relative;
    width: 100%;
}
.icon {
    width: 11px;
    height: 11px;
    position: absolute;
    top: 14px;
    left: 14px;
    fill: $white;
}
.float {
    @include transiton($ms300);
}
.open {
    opacity: 1;
}
.close {
    opacity: 0;
}
</style>
