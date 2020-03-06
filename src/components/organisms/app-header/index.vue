<template>
  <HeaderGrid>
    <template #unit1>
      <IconedTextButton type="plus" compose="left" @click="onAddClick">NewBoard</IconedTextButton>
    </template>

    <template #unit2>
      <ClickToEditableInput role="h1Header" :value="title" @input="onEditedTitle" />
    </template>

    <template #unit3>
      <ImageIconedText :img="img" compose="left" size="M">{{username}}</ImageIconedText>
    </template>

    <template #unit4>
      <NavButton @click="onNavClick">{{navname}}</NavButton>>
    </template>
  </HeaderGrid>
</template>

<script>
import base from "@/components/utils/base-mixin";
import NavButton from "@/components/molecules/nav-button/";
import ImageIconedText from "@/components/molecules/image-iconed-text/";
import IconedTextButton from "@/components/molecules/iconed-text-button/";
import HeaderGrid from "@/components/templates/header-grid/";
import ClickToEditableInput from "@/components/molecules/click-to-editable-input/";
export default {
  mixins: [base],
  name: "AppHeader",
  props: {
    img: String,
    title: String,
    username: String,
    navname: String,
    value: String
  },
  metnods: {
    onAddClick() {
      this.$emit("add-event");
    },
    onNavClick() {
      this.$emit("nav-event");
    },
    onEditedTitle(value) {
      this.$emit("update:title", value);
    }
  },
  components: {
    HeaderGrid,
    NavButton,
    ClickToEditableInput,
    IconedTextButton,
    ImageIconedText
  }
};
</script>
