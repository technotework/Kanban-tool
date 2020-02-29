<template>
  <div :class="$style.wrapper">
    <TwoColumnRepeatGrid>
      <div :class="$style.icon">
        <IconM :img="src" />
      </div>
      <div :class="$style.name">{{(nickname == "")?temp:nickname }}</div>
      <span :class="$style.label">ニックネーム</span>
      <SystemInput placeholder="ニックネームを入力" v-model="nickname" required :class="$style.item" />
      <span :class="$style.label">アイコン</span>
      <div :class="$style.files">
        <BaseFileSelect @change="onFileSelect" />
      </div>
    </TwoColumnRepeatGrid>

    <MiniButton :class="$style.button" @click="onSubmit">登録</MiniButton>
  </div>
</template>

<script>
import { SystemInput } from "@/components/atoms/base-input/compose";
import BaseFileSelect from "@/components/atoms/base-file-select/";
import { IconM } from "@/components/atoms/base-image-icon/compose";
import { MiniButton } from "@/components/atoms/base-no-link-button/compose";
import TwoColumnRepeatGrid from "@/components/templates/two-column-repat-grid/";
import base from "@/components/utils/base-mixin";
export default {
  mixins: [base],
  name: "UserInfoForm",
  data: () => {
    return {
      nickname: "",
      temp: "nickname",
      size: null,
      img: null,
      src: null
    };
  },
  props: {},
  methods: {
    onFileSelect(value) {
      let { data, name, size } = value;
      this.img = value;
      this.size = size;

      const reader = new FileReader();
      reader.onload = e => {
        this.src = e.target.result;
      };
      reader.readAsDataURL(data);
    },
    onSubmit() {
      this.$emit("submit-profile-event", {
        data: this.img,
        size: this.size,
        nickname: this.nickname
      });
    }
  },
  components: {
    TwoColumnRepeatGrid,
    SystemInput,
    BaseFileSelect,
    IconM,
    MiniButton
  }
};
</script>

<style lang="scss" module>
.icon {
  margin-bottom: $s4;
  text-align: right;
}
.name {
  display: inline-block;
  text-align: left;
  font-size: $f18;
  padding-top: $s20;
  padding-left: $s8;
}
.wrapper {
  max-width: 500px;
  text-align: right;
}
.item {
  @include m(0 0 $s8 0);
}
.label {
  text-align: right;
  font-weight: bold;
  @include m($s4 $s8 $s8 0);
}
.button {
  display: inline-block;
  width: 200px;
}
.files {
  text-align: left;
}
</style>