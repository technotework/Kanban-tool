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
        <IconM type="edit" :class="$style.icon" />
      </template>
    </div>
    <template v-if="!isDisable">
      <MiniButton @click="onClickCompleteEdit" :class="$style.button">OK</MiniButton>
    </template>
  </div>
</template>

<script>
import Vue from "vue";
import { IconM } from "@/components/atoms/base-icon/compose";
import base from "@/components/utils/base-mixin";
import { MiniButton } from "@/components/atoms/base-no-link-button/compose";
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
  components: { EditInput, MiniButton, IconM }
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
  @include bdc($transparent);
  @include p($s8 38px $s8 $s8);
  @include s($h: 100%);
  cursor: text;
}
.button {
  @include m(0 0 0 $s8);
}
.icon {
  fill: $darkGray;
  @include s($w: 18px, $h: 18px);
  @include abs($t: 10px, $r: 4px);
}
</style>

<style lang="scss" module="$compose">
.editable {
  .editableInput {
    @include bgc($white);
    @include p($s8);
  }
}
.uneditable {
  .editableInput {
    @include bgc($transparent);
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
    @include abs($t: 13px, $r: 4px);
  }
}
.h2Header {
  grid-template-rows: 39px;
  .editableInput {
    font-size: $f32;
    font-weight: bold;
  }
  .icon {
    @include abs($t: 13px, $r: 4px);
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
