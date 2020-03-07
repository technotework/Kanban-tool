<template>
  <div ref="wrapper" :class="$style.wrapper">
    <BaseModelessContainer :class="$style.menu">
      <ul>
        <li v-for="(item,key) in members" :key="key" :class="$style.list">
          <LabeledCheckboxVmodel :id="key" :value="key" :name="key" v-model="myData">
            <ImageIconedText
              :img="item.img"
              size="M"
              compose="left"
              :class="$style.icon"
            >{{item.nickname}}</ImageIconedText>
          </LabeledCheckboxVmodel>
        </li>
      </ul>
    </BaseModelessContainer>
  </div>
</template>

<script>
import BaseModelessContainer from "@/components/atoms/base-modeless-container/";
import ImageIconedText from "@/components/molecules/image-iconed-text/";
import LabeledCheckboxVmodel from "@/components/molecules/labeled-check-box/model";
import listener from "@/components/utils/listener-mixin";
export default {
  name: "MembersCheckList",
  mixins: [listener],
  created: function() {
    this.listen(
      window,
      "click",
      function(e) {
        if (!this.$el.contains(e.target)) {
          this.$emit("close");
        }
      }.bind(this)
    );
  },
  props: {
    members: Object,
    value: Array,
    parentId: String
  },
  computed: {
    myData: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  methods: {},
  components: { ImageIconedText, LabeledCheckboxVmodel, BaseModelessContainer }
};
</script>
<style lang="scss" module>
.wrapper {
  margin: -170px 0 0 100px;
  position: absolute;
  left: 15px;
}

.menu {
  width: 250px;
  height: 300px;
  overflow-y: auto;
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