<template>
  <div :class="$style.dialogue">
    <BaseModalCover>
      <Dialogue>
        <BaseText>{{text}}</BaseText>
        <FlexLayout :class="$style.buttonContainer">
          <SecondaryButton :class="$style.button" name="cancel" @click="onClickSecondary" />
          <PrimaryButton :class="$style.button" name="ok" @click="onClickPrimary" />
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
} from "@/components/atoms/base-button/compose";
import BaseText from "@/components/atoms/base-text";
import FlexLayout from "@/components/templates/flex-layout/";

export default {
  name: "ConfirmationDialogue",
  props: {
    text: String,
    pCallback: Function,
    sCallBack: Function
  },
  components: {
    FlexLayout,
    BaseModalCover,
    Dialogue,
    PrimaryButton,
    SecondaryButton,
    BaseText
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
  @include abs($b: $s18, $r: $s18);
}

.button {
  @include m(0 0 0 $s8);
}
</style>
