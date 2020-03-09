<template>
  <div :class="$style.container">
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
    <template v-if="editStatus == 'OTHER'">
      <div :class="$style.other">
        <MemberIcon size="L" :img="editorImgSrc" :class="$style.icon" />
        <div :class="$style.line">EDITING...</div>
      </div>
    </template>
  </div>
</template>

<script>
import MemberIcon from "@/components/organisms/members/member-icon/";
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
    },
    editorImgSrc() {
      return this.members[this.editor].img;
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
  components: {
    MemberIcon,
    ContextMenuContainer,
    MembersIconList,
    MembersCheckList
  }
};
</script>
<style lang="scss" module>
.other {
  position: relative;
}
.icon {
  position: absolute;
  margin: -44px 0px 0px 178px;
  z-index: 1000;
}
.line {
  @include editing;
  position: absolute;
  margin: -25px 0 0 0;
}
</style>