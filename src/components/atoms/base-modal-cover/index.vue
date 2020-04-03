<template>
    <div :class="$style.cover" @click="onClick">
        <slot />
    </div>
</template>

<script>
/**
 * モーダル時全画面をカバーする板のAtoms
 */
import base from "@/components/utils/base-mixin";
export default {
    mixins: [base],
    name: "BaseModalCover",
    methods: {
        /**
         * handers
         */
        onClick: function(e) {
            this.$emit("base-modal-cover-click-event");
        }
    }
};
</script>
<style lang="scss" module>
.cover {
    @include cover;
}
</style>
