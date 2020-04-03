<template>
    <BaseModalCover :class="$style.bg">
        <BaseLoader />
        <BaseIcon type="logo" :class="$style.logo" />
    </BaseModalCover>
</template>

<script>
/**
 * 全画面カバーをかぶせたローダー
 */
import BaseIcon from "@/components/atoms/base-icon/";
import BaseLoader from "@/components/atoms/base-loader/";
import BaseModalCover from "@/components/atoms/base-modal-cover";
export default {
    name: "OverlayLoader",
    props: {},
    components: {
        BaseModalCover,
        BaseLoader,
        BaseIcon
    },
    methods: {}
};
</script>
<style lang="scss" module>
.bg {
    background-color: $theme;
}
.logo {
    fill: $white;
    position: absolute;
    width: 52px;
    height: 52px;
    top: calc(50% - 26px);
    left: calc(50% - 26px);
    opacity: 1;
    z-index: 810100;
}
</style>
