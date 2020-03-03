<template>
  <ContextMenuContainer ref="container" @click.stop="onMenuTriggerClick" :class="$style.container">
    <template #button>
      aaa
      <MembersIconList :members="members" :assigned="value" />
    </template>
    <template #menu>
      <MembersCheckList v-model="myData" :members="members" @close="onClose" :parent-id="parentId" />
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
    parentId: String,
    value: Array
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