<template>
  <ContextMenuContainer ref="container" @click.stop="onMenuTriggerClick" :class="$style.container">
    <template #button>
      <MembersIconList :members="members" :assigned="value" />
    </template>
    <template #menu>
      <MembersCheckList
        v-model="myData"
        :members="members"
        @close="onClose"
        :class="$compose[compose]"
      />
    </template>
  </ContextMenuContainer>
</template>

<script>
import MembersIconList from "@/components/organisms/members/members-icon-list/";
import MembersCheckList from "@/components/organisms/members/members-check-list/";
import ContextMenuContainer from "@/components/molecules/context-menu-container/";
export default {
  name: "MembersUnit",
  props: {
    members: Object,
    value: Array,
    compose: { type: String, default: "top" }
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
  methods: {
    onMenuTriggerClick(e) {
      //bubbling stop
    },
    onClose() {
      this.$refs.container.onClose();
    }
  },
  components: { ContextMenuContainer, MembersIconList, MembersCheckList }
};
</script>
<style lang="scss" module>
.container {
  position: relative;
}
</style>
<style lang="scss" module="$compose">
.top {
  @include abs($t: -135px, $l: 172px);
}
.bottom {
  @include abs($t: 55px, $l: 0);
}
</style>