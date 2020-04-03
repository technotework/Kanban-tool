<template>
    <span :date="date" :class="$style.date">
        <slot />
    </span>
</template>

<script>
/**
 * unix時間変換用にデータをうけとるAtoms
 */
import base from "@/components/utils/base-mixin";

export default {
    mixins: [base],
    name: "BaseTimeText",
    props: {
        date: Number
    }
};
</script>
<style lang="scss" module>
.date {
    display: block;
    @include dateText;
}
</style>
