<template>
    <svg :type="type" :class="$style.icon">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="icon" />
    </svg>
</template>

<script>
/**
 * SVG SpriteのAtoms
 */
import base from "@/components/utils/base-mixin";
import IconSprite from "@/assets/svg/sprite.svg";

export default {
    name: "BaseIcon",
    mixins: [base],
    props: {
        type: String
    },
    computed: {
        icon: function() {
            return `${IconSprite}#${this.type}`;
        }
    }
};
</script>
<style lang="scss" module>
.icon {
    fill: #ddd;
}
</style>
