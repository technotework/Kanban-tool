<template>
  <ContextMenuContainer ref="container" @click.stop="onMenuTriggerClick">
    <template #button>
      <MembersIconList :members="members" :assigned="value" />
    </template>
    <template #menu>
      <MembersCheckList v-model="myData" :members="members" @close="onClose" />
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
    onMenuTriggerClick(e) {},
    onClose() {
      this.$refs.container.onClose();
    }
  },
  components: { ContextMenuContainer, MembersIconList, MembersCheckList }
};
</script>
<style lang="scss" module>
</style>