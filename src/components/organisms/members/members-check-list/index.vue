<template>
  <BaseModelessContainer :class="$style.menu">
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
  </BaseModelessContainer>
</template>

<script>
import BaseModelessContainer from "@/components/atoms/base-modeless-container/";
import ImageIconedText from "@/components/molecules/image-iconed-text/";
import LabeledCheckbox from "@/components/molecules/labeled-check-box/";
export default {
  name: "MembersCheckList",
  props: {
    members: Object
  },
  methods: {},
  components: { ImageIconedText, LabeledCheckbox, BaseModelessContainer }
};
</script>
<style lang="scss" module>
.menu {
  @include shadow;
  width: 250px;
  height: 300px;
  overflow-y: auto;
  border-radius: $round;
  border: solid 1px $gray;
  background-color: $white;
  padding: $s16 $s16 $s8 $s16;
}

.menu:before {
  content: "";
  position: absolute;
  top: 300px;
  left: 130px;
  margin-left: -15px;
  border: 15px solid transparent;
  border-top: 15px solid $theme;
}

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