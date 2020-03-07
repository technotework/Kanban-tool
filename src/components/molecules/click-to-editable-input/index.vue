  <template>
  <div :class="[isDisable ? $style.wrapper : $style.wrapper2col,$role[role]]">
    <div @click="onClickEdit" :class="$style.editableInputContainer">
      <component
        :is="isTitle ? title : noTitle"
        :readonly="isDisable"
        v-model.lazy="myValue"
        @keyup-enter="onClickCompleteEdit"
      />
      <template v-if="isDisable">
        <BaseIcon type="edit" :class="$style.icon" />
      </template>
    </div>
    <template v-if="!isDisable">
      <MiniButton
        @click="onClickCompleteEdit"
        :class="[isTitle ? $style.titleMiniButton : $style.miniButton]"
      >OK</MiniButton>
    </template>
  </div>
</template>

<script>
import Vue from "vue";
import BaseIcon from "@/components/atoms/base-icon/";
import base from "@/components/utils/base-mixin";
import {
  PrimaryButton,
  MiniButton
} from "@/components/atoms/base-no-link-button/compose";
import {
  EditInput,
  EditInputTitle
} from "@/components/atoms/base-input/compose";
export default {
  mixins: [base],
  name: "ClickToEditableInput",
  data: function() {
    return {
      isDisable: true,
      status: "uneditable",
      title: EditInputTitle,
      noTitle: EditInput
    };
  },
  props: {
    isTitle: { type: Boolean, default: false },
    value: String,
    role: String
  },
  methods: {
    onClickEdit: function(e) {
      this.isDisable = false;
      this.status = "editable";
    },
    onClickCompleteEdit: function(e) {
      this.isDisable = true;
      this.status = "uneditable";
      this.$emit("keyup-enter");
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
  components: { EditInputTitle, EditInput, MiniButton, BaseIcon }
};
</script>
<style lang="scss" module>
.wrapper2col {
  display: grid;
  grid-template-columns: 1fr 63px;
  overflow: hidden;
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}
.editableInputContainer {
  position: relative;
  overflow: hidden;
}

.icon {
  fill: $white;
  width: 13px;
  height: 13px;
  position: absolute;
  top: 14px;
  right: 4px;
  opacity: 0.4;
}

.titleMiniButton {
  padding: 16px 0 12px 0;
}

.miniButton {
  padding: 14px 0;
}
</style>

<style lang="scss" module="$role">
.header {
  grid-template-rows: 42px;
  .icon {
    display: none;
  }
}

.label {
  grid-template-rows: 37px;
}
</style>