<template>
  <div :class="$style.grid">
    <div :class="$style.unit1">
      <slot name="unit1" />
    </div>
    <div :class="$style.unit2">
      <slot name="unit2" />
    </div>
    <div :class="$style.unit3">
      <slot name="unit3" />
    </div>
    <div :class="$style.unit4">
      <slot name="unit4" />
    </div>
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";

export default {
  mixins: [base],
  name: "HeaderGrid"
};
</script>
<style lang="scss" module>
.grid {
  display: grid;
  grid-template-columns: 310px 1fr 180px 130px;
  grid-template-rows: auto;
}
.unit1 {
  justify-content: left;
}
.unit2 {
  align-self: center;
  padding: 0 25px;
}
.unit3 {
  justify-self: right;
}
.unit4 {
  justify-self: right;
  align-self: center;
}

@include responsive(970px) {
  .grid {
    display: grid;
    grid-template-columns: 200px 1fr 180px 108px;
    grid-template-rows: auto;
  }
}

@include responsive(800px) {
  .grid {
    display: grid;
    grid-template-columns: 200px 1fr 108px;
    grid-template-rows: auto;
  }
  .unit3 {
    display: none;
  }
}

@include responsive(650px) {
  .grid {
    display: grid;
    grid-template-columns: 175px 1fr 82px;
    grid-template-rows: auto;
  }
  .unit3 {
    display: none;
  }
}
</style>


