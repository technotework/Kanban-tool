<template>
    <div :class="$style.grid">
        <slot name="nav" />
        <div :class="$style.contents">
            <slot name="article" />
        </div>
    </div>
</template>

<script>
/**
 * コンテンツ領域レイアウトのテンプレ
 */
export default {
    name: "ContentAreaLayout",
    props: {},
    components: {}
};
</script>
<style lang="scss" module>
.grid {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 45px 1fr;
}
.contents {
    padding-top: 50px;
    height: calc(100vh - 72px);
}
</style>
