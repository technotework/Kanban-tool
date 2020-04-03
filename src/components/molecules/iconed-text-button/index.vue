<template>
    <BigButton @click="onClick">
        <slot />
        <BaseIcon :type="type" :class="$style.icon" />
    </BigButton>
</template>

<script>
/**
 * アイコン付きテキストボタン
 */
import BaseIcon from "@/components/atoms/base-icon/";
import { BigButton } from "@/components/atoms/base-no-link-button/compose";
import base from "@/components/utils/base-mixin";
export default {
    name: "IconedTextButton",
    mixins: [base],
    props: {
        type: { type: String },
        compose: String
    },
    components: {
        BigButton,
        BaseIcon
    }
};
</script>
<style lang="scss" module>
.icon {
    width: 18px;
    height: 18px;
    fill: $white;
    position: absolute;
    top: 8px;
    left: 13px;
}
</style>
