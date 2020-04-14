<template>
    <component :is="icon" :img="img" />
</template>

<script>
/**
 * メンバーアイコン
 *
 * いちばん親：members-unit
 * メンバーアイコン一覧:members-icon-list -> member-icon
 * メンバーチェックリスト:members-check-list
 */
import { IconS, IconM, IconL } from "@/components/atoms/base-image-icon/compose";
export default {
    name: "MemberIcon",
    props: {
        img: String,
        size: String
    },
    computed: {
        icon() {
            return "Icon" + this.size;
        }
    },
    components: { IconS, IconM, IconL }
};
</script>
<style lang="scss" module></style>
