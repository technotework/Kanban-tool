<template>
  <input
    :type="type"
    :class="[$style.basicInput,$compose[compose]]"
    v-bind="{placeholder,required,maxlength,name,disabled,content}"
    v-model="hoge"
    @input="onInput"
  />
</template>

<script>
import base from "@/components/utils/base-mixin";
export default {
  mixins: [base],
  name: "BaseInput",
  data:function(){
      return {
          hoge:this.content
      }
  },
  props: {
    placeholder: String,
    required: Boolean,
    maxlength: String,
    name: String,
    type: String,
    disabled: Boolean,
    content:String
  }
};
</script>

<style lang="scss" module>
.basicInput {
  width: 100%;
  @include bdc($gray);
}
</style>

<style lang="scss" module="$compose">
.system {
  @include p($s8);
  @include r($round);
}
.editable {
  border: solid 1px $gray;
  @include bgc($white);
  @include p($s8);
  @include r(2px);
}
.editable:disable{
  @include bgc($transparent);
  border: solid 1px $white;
  border-bottom: solid 1px $gray;
}
</style>
