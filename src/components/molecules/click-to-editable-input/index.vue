  <template>
  <div :class="[isDisable ? $style.wrapper : $style.wrapper2col,$role[role]]">
    <div @click="onClickEdit" :class="[$style.editableInputContainer, $compose[status]]">
      <EditInput
        :class="$style.editableInput"
        :readonly="isDisable"
        v-model.lazy="myValue"
        @keyup-enter="onClickCompleteEdit"
      />
      <template v-if="isDisable">
        <BaseIcon type="edit" :class="$style.icon" />
      </template>
    </div>
    <template v-if="!isDisable">
      <MiniButton @click="onClickCompleteEdit">OK</MiniButton>
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
import { EditInput } from "@/components/atoms/base-input/compose";
export default {
  mixins: [base],
  name: "ClickToEditableInput",
  data: function() {
    return {
      isDisable: true,
      status: "uneditable"
    };
  },
  props: {
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
  components: { EditInput, MiniButton, BaseIcon }
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
.editableInput {
  background-color: $transparent;
  padding: $s8 38px $s8 $s8;
  height: 100%;
  cursor: text;
  border: none;
}

.icon {
  fill: $white;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 10px;
  right: 4px;
}
</style>

<style lang="scss" module="$compose">
.editable {
  .editableInput {
    background-color: $white;
    padding: $s8;
  }
}
.uneditable {
  .editableInput {
    background-color: $transparent;
  }
}
</style>

<style lang="scss" module="$role">
.h1Header {
  grid-template-rows: 39px;
  .editableInput {
    font-size: $f36;
    font-weight: bold;
  }
  .icon {
    position: absolute;
    top: 13px;
    right: 4px;
  }
}
.h2Header {
  grid-template-rows: 39px;
  .editableInput {
    font-size: $f32;
    font-weight: bold;
  }
  .icon {
    position: absolute;
    top: 13px;
    right: 4px;
  }
}

.label {
  grid-template-rows: 39px;
  .editableInput {
    font-size: $f20;
    font-weight: bold;
    padding: 0;
  }
}

.text {
  grid-template-rows: 39px;
  .editableInput {
    font-size: $f16;
  }
}
</style>
