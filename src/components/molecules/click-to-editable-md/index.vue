<template>
  <div :class="$style.wrapper" :isinitial="isinitial">
    <BaseEditableMD
      v-model.lazy="myValue"
      :class="$style.md"
      :isedit="status"
      ref="md"
    />
    <div :class="$style.buttons">
      <template v-if="isinitial">
        <TextButton :class="$style.button" @click="onCancelSubmitMD">
          キャンセル
        </TextButton>
        <TextButton :class="$style.button" @click="onSubmitMD">
          送信
        </TextButton>
      </template>
      <template v-else>
        <template v-if="!status">
          <TextButton :class="$style.button" @click="onEditMD">
            編集
          </TextButton>
        </template>
        <template v-else>
          <TextButton :class="$style.button" @click="onCancelMD">
            キャンセル
          </TextButton>
          <TextButton :class="$style.button" @click="onSaveMD">
            保存
          </TextButton>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";
import BaseEditableMD from "@/components/atoms/base-editable-md/";
import { TextButton } from "@/components/atoms/base-no-link-button/compose";

export default {
  mixins: [base],
  name: "ClickToEditableMD",
  props: {
    value: String,
    isinitial: Boolean
  },
  mounted: function() {
    if (this.isinitial) {
      this.status = true;
    }
  },
  data: function() {
    return {
      temp: "",
      status: false
    };
  },
  methods: {
    onEditMD: function() {
      this.temp = this.$refs.md.getContent();
      this.status = true;
    },
    onSaveMD: function() {
      this.status = false;
    },
    onCancelMD: function() {
      this.myValue = this.temp;
      this.status = false;
    },
    onSubmitMD: function(e) {
      this.$emit("submit-md", { value: this.myValue, e: e });
    },
    onCancelSubmitMD: function(e) {
      this.$emit("cancel-submit-md", e);
    }
  },
  computed: {
    myValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  components: { BaseEditableMD, TextButton }
};
</script>
<style lang="scss" module>
.wrapper {
  position: relative;
  @include p(0 0 3.2rem 0);
}
.md {
  @include s($mh: 100px);
}
.buttons {
  @include flex;
  @include abs($b: 0, $r: $s8);
}
.button {
  display: block;
  @include text($f12);
  text-decoration: underline;
  @include c($primary);
  :focus {
    @include c($phover);
  }
}
</style>
