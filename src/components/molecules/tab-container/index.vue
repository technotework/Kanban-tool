<template>
    <div>
        <div :class="$style.tabContainer">
            <BaseButtonRadio
                name="tab"
                target="tab1"
                value="t1"
                v-model="isActive"
                :class="$style.tab"
            >
                <slot name="tab1" />
            </BaseButtonRadio>
            <BaseButtonRadio
                name="tab"
                target="tab2"
                value="t2"
                v-model="isActive"
                :class="$style.tab"
            >
                <slot name="tab2" />
            </BaseButtonRadio>
        </div>
        <div :class="$style.tabContent">
            <div v-if="isActive == 't1'">
                <slot name="first" />
            </div>
            <div v-else-if="isActive == 't2'">
                <slot name="second" />
            </div>
        </div>
    </div>
</template>

<script>
/**
 * タブコンテナ
 */
import BaseButtonRadio from "@/components/atoms/base-button-radio/";
export default {
    name: "TabContainer",
    props: {},
    data: () => {
        return {
            isActive: "t1"
        };
    },
    methods: {
        tabReset() {
            this.isActive = "t1";
        }
    },
    components: { BaseButtonRadio }
};
</script>
<style lang="scss" module>
.tabContainer {
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.tabContent {
    padding-top: 33px;
}
</style>
