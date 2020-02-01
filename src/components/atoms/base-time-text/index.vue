<template>
  <StyledBaseTimeText :date="date"></StyledBaseTimeText>
</template>

<script>
export default {
  name: "BaseTimeText",
  props: {
    date: { type: String }
  }
};
</script>
<style lang="scss" module>
.class {
}
</style>


