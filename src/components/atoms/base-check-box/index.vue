<template>
  <input type="checkbox" :class="$style.cb" v-bind="{id,name,value}" @change="onInput" />
</template>

<script>
import styles from "@/components/utils/styles-mixin";

export default {
  mixins: [styles],
  name: "BaseCheckBox",
  props: {
    id: { type: String },
    name: { type: String },
    value: { type: String }
  }
};
</script>
<style lang="scss" module>
.cb {
  @include m($r: $s4, $b: $s8);
}
</style>