<template>
    <input
        type="submit"
        @click="onClick"
        :value="value"
        :class="$style.button"
    />
</template>

<script>
/**
 * SubmitButtonのAtoms
 */
import base from "@/components/utils/base-mixin";
export default {
    mixins: [base],
    name: "BaseSubmitButton",
    props: {
        value: String
    }
};
</script>

<style lang="scss" module>
.button {
    @include primaryInput;
}
</style>
