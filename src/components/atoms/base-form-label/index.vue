<template>
    <label :for="target">
        <slot />
    </label>
</template>

<script>
/**
 * form labelのAtoms
 */
export default {
    name: "BaseFormLabel",
    props: {
        target: String
    }
};
</script>
