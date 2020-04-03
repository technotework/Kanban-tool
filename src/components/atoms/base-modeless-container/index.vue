<template>
    <div :class="$style.modeless">
        <slot />
    </div>
</template>

<script>
/**
 * コンテキストメニューのモードレスコンテナのAtoms
 */
import base from "@/components/utils/base-mixin";

export default {
    name: "BaseModelessContainer",
    mixins: [base]
};
</script>
<style lang="scss" module>
.modeless {
    @include context;
}
</style>
