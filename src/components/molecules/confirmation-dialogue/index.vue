<template>
  <div :class="$style.dialogue">
    <BaseModalCover>
      <Dialogue>
        <BaseText>
          <slot />
        </BaseText>

        <LayoutPositioner compose="absolute" bottom="0" right="0">
          <FlexLayout>
            <SecondaryButton />
            <PrimaryButton />
          </FlexLayout>
        </LayoutPositioner>
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
import LayoutPositioner from "@/components/templates/layout-positioner/";
import FlexLayout from "@/components/templates/flex-layout/";

export default {
  name: "ConfirmationDialogue",
  props: {},
  components: {
    FlexLayout,
    BaseModalCover,
    Dialogue,
    PrimaryButton,
    SecondaryButton,
    BaseText,
    LayoutPositioner
  },
  methods: {
    onClickPrimary: function() {
      this.$emit("clickPrimary");
    },
    onClickSecondary: function() {
      this.$emit("clickSecondary");
    }
  }
};
</script>
<style lang="scss" module>
.dialogue {
}
</style>


