<template>
    <div :class="$style.grid">
        <slot />
    </div>
</template>

<script>
/**
 *2列複数業のテンプレ
 */
import base from "@/components/utils/base-mixin";

export default {
    mixins: [base],
    name: "TwoColumnRepeatGrid",
    props: {}
};
</script>
<style lang="scss" module>
.grid {
    display: grid;
    grid-template-columns: 125px 1fr;
    grid-template-rows: auto;
}
</style>
