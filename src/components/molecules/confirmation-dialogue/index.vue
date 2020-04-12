<template>
    <div>
        <BaseModalCover>
            <Dialogue>
                <div :class="$style.text">{{ text }}</div>
                <div :class="$style.buttonContainer">
                    <template v-if="sCallback != null">
                        <SecondaryButton
                            :class="$style.button"
                            @click="onClickSecondary"
                            >キャンセル</SecondaryButton
                        >
                    </template>
                    <PrimaryButton
                        :class="$style.button"
                        @click="onClickPrimary"
                        >OK</PrimaryButton
                    >
                </div>
            </Dialogue>
        </BaseModalCover>
    </div>
</template>

<script>
/**
 * ダイアログのコンポーネント
 * プライマリとセカンダリボタンのcallbackをうけとり実行する
 * セカンダリコールバック画ない場合は、セカンダリ自体を表示しない
 */
import BaseModalCover from "@/components/atoms/base-modal-cover";
import { Dialogue } from "@/components/atoms/base-modal-container/compose";
import {
    PrimaryButton,
    SecondaryButton
} from "@/components/atoms/base-no-link-button/compose";

export default {
    name: "ConfirmationDialogue",
    props: {
        text: String,
        pCallback: Function,
        sCallback: Function
    },
    components: {
        BaseModalCover,
        Dialogue,
        PrimaryButton,
        SecondaryButton
    },
    methods: {
        /**
         * handlers
         */
        onClickPrimary: function(e) {
            this.pCallback();
        },
        onClickSecondary: function(e) {
            this.sCallback();
        }
    }
};
</script>
<style lang="scss" module>
.text {
    letter-spacing: 0.15rem;
    line-height: $f24;
    white-space: pre-line;
}
.buttonContainer {
    display: flex;
    position: absolute;
    bottom: 18px;
    right: 18px;
}
.button {
    margin-right: $s8;
}
</style>
