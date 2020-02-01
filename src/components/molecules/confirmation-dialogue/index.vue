<template>
  <div :pval="pval" :sval="sval">
    <BaseModalCover>
      <Dialogue>
        <BaseText>
          <slot />
        </BaseText>
        <LayoutPositioner
          :bottom="service.dialogue.buttonPosBottom"
          :right="service.dialogue.buttonPosRight"
        >
          <FlexLayout width="100%" justify="flex-end">
            <SecondaryButton :value="sval" @click="onClickSecondary" />
            <PrimaryButton :value="pval" @click="onClickPrimary" />
          </FlexLayout>
        </LayoutPositioner>
      </Dialogue>
    </BaseModalCover>
  </div>
</template>

<script>

import prefs from "@/components/themes/prefs-mixin";
import service from "@/components/themes/service-props-mixin";

import BaseModalCover from "@/components/atoms/base-modal-cover";
import { Dialogue } from "@/components/atoms/base-modal-container/compose";
import {
  PrimaryButton,
  SecondaryButton
} from "@/components/atoms/base-button/compose";
import BaseText from "@/components/atoms/base-text";
import LayoutPositioner from "@/components/templates/layout-positioner/";
import FlexLayout from "@/components/templates/flex-layout/";

console.log();

export default {
  name: "ConfirmationDialogue",
  mixins: [prefs, service],
  props: {
    pval: { type: String, default: "OK" },
    sval: { type: String, default: "キャンセル" }
  },
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
.class{

  
}
</style>


