<template>
  <div :class="$style.board">
    <ClickToEditableInput v-model.lazy="titleData" :class="$style.input" />
    <ContextMenu
      :class="$style.contextMenu"
      @context-menu-click="onMenuClick"
      v-bind="{ menuItems, id }"
      compose="bottom"
    />
    <IconedButton @click="onAddClick" type="add" :class="$style.add" />

    <div
      :class="[
        $style.postForm,
        { [$style.open]: showPost },
        { [$style.close]: !showPost }
      ]"
    >
      <PostForm v-model="postContent" @form-cancel="onFormCancelClick" @form-add="onFormAddClick" />
    </div>
    <Tasks :id="id" />
  </div>
</template>

<script>
import PostForm from "@/components/molecules/post-form/";
import ClickToEditableInput from "@/components/molecules/click-to-editable-input/";
import ContextMenu from "@/components/molecules/context-menu/";
import Tasks from "@/containers/Tasks";
import IconedButton from "@/components/molecules/iconed-button/";

export default {
  name: "BoardListItem",
  props: {
    value: String,
    id: String
  },
  data: function() {
    return {
      menuItems: [
        {
          value: "ボードを削除",
          name: "delete"
        }
      ],
      postContent: "",
      showPost: false
    };
  },
  computed: {
    titleData: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("edited-board-name", { name: value, id: this.id });
      }
    }
  },
  methods: {
    onMenuClick: function(value) {
      console.log(value);
    },
    onAddClick: function(e) {
      this.showPost = !this.showPost;
    },
    onFormCancelClick: function(value) {
      console.log(value);
      this.showPost = false;
    },
    onFormAddClick: function(value) {
      console.log(value);
    }
  },
  components: {
    ClickToEditableInput,
    ContextMenu,
    Tasks,
    PostForm,
    IconedButton
  }
};
</script>
<style lang="scss" module>
.board {
  position: relative;
  @include spr($w: 270px, $h: auto, $p: $s16 0, $r: $round);
  @include bgc($lightGray);
  display: flex;
  flex-direction: column;
}
.input {
  @include m(2.4rem 1.6rem 1.2rem 1.6rem);
}
.postForm {
  overflow: hidden;
  @include m(0 1.6rem 0.4rem 1.6rem);
  height: 0px;
  @include tran($ms300);
}

.open {
  height: 143px;
}

.close {
  height: 0px;
}

.contextMenu {
  @include abs($t: $s12, $r: 2.2rem);
  flex: 1;
}
.add {
  width: 77px;
  @include abs($t: 12px, $l: 19px);
}
</style>
