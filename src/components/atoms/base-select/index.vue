<template>
  <select :name="name" v-model="selected" @change="onChange">
    <option value selected>選択して下さい</option>
    <option v-for="item in items" :value="item.value" :key="item.value">{{item.content}}</option>
  </select>
</template>

<script>
import styles from "@/components/utils/styles-mixin";

export default {
  mixins: [styles],
  name: "BaseSelect",
  props: {
    name: { type: String },
    items: { type: Array },
    value: { type: String }
  },
  data: function() {
    return {
      selected: ""
    };
  }
};
</script>
<style lang="scss" module>
</style>


