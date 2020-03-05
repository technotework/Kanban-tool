<template>
  <div>
    <BaseModalCover>
      <Dialogue>
        {{text}}
        <FlexLayout :class="$style.buttonContainer">
          <template v-if="sCallback!=null">
            <SecondaryButton :class="$style.button" @click="onClickSecondary">キャンセル</SecondaryButton>
          </template>
          <PrimaryButton :class="$style.button" @click="onClickPrimary">OK</PrimaryButton>
        </FlexLayout>
      </Dialogue>
    </BaseModalCover>
  </div>
</template>

<script>
import BaseModalCover from "@/components/atoms/base-modal-cover";
import { Dialogue } from "@/components/atoms/base-modal-container/compose";
import {
  PrimaryButton,
  SecondaryButton
} from "@/components/atoms/base-no-link-button/compose";
import FlexLayout from "@/components/templates/flex-layout/";

export default {
  name: "ConfirmationDialogue",
  props: {
    text: String,
    pCallback: Function,
    sCallback: Function
  },
  components: {
    FlexLayout,
    BaseModalCover,
    Dialogue,
    PrimaryButton,
    SecondaryButton
  },
  methods: {
    onClickPrimary: function(e) {
      this.pCallback();
    },
    onClickSecondary: function(e) {
      this.sCallback();
    }
  }
};
</script>
<style lang="scss" module>
.buttonContainer {
  position: absolute;
  bottom: 18px;
  right: 18px;
}
.button {
  margin-right: $s8;
}
</style>
