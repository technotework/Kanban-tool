<template>
  <div>
    <template v-if="editStatus == 'NO_ONE'">
      <ContextMenuContainer ref="container" @click.stop="onMenuTriggerClick">
        <template #button>
          <MembersIconList :members="members" v-model="myData" />
        </template>
        <template #menu>
          <MembersCheckList
            v-model="myData"
            :members="members"
            @close="onClose"
            :parent-id="parentId"
          />
        </template>
      </ContextMenuContainer>
    </template>
    <template v-if="editStatus == 'OTHER'">a</template>
  </div>
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
    myEditorId: String,
    editor: String,
    id: String,
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
    },
    editStatus() {
      let status;
      if (this.editor == "") {
        status = "NO_ONE";
      } else if (this.editor == this.myEditorId) {
        status = "ME";
      } else if (this.editor != this.myEditorId) {
        status = "OTHER";
      }
      return status;
    }
  },
  methods: {
    onMenuTriggerClick(e) {
      if (!e.status) {
        this.update();
      }
    },
    onClose() {
      this.$refs.container.onClose();
      this.update();
    },
    update() {
      this.$emit("update-member", {
        data: this.myData,
        id: this.id,
        parentId: this.parentId
      });
    }
  },
  components: { ContextMenuContainer, MembersIconList, MembersCheckList }
};
</script>