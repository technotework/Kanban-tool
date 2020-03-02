<template>
  <ul>
    <li v-for="(item,key) in members" :key="key" :class="$style.list">
      <LabeledCheckbox :id="key" :value="item.nickname" name="members">
        <ImageIconedText
          :img="item.img"
          size="M"
          compose="left"
          :class="$style.icon"
        >{{item.nickname}}</ImageIconedText>
      </LabeledCheckbox>
    </li>
  </ul>
</template>

<script>
import ImageIconedText from "@/components/molecules/image-iconed-text/";
import LabeledCheckbox from "@/components/molecules/labeled-check-box/";
export default {
  name: "MembersCheckList",
  props: {
    members: Object
  },
  methods: {},
  components: { ImageIconedText, LabeledCheckbox }
};
</script>
<style lang="scss" module>
.list {
  padding-bottom: $s16;
}
.list input[type="checkbox"] {
  margin-top: 7px;
}
.icon {
  padding-left: $s4;
}
</style>