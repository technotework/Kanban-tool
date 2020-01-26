<template>
  <StyledBaseTimeText :date="date"></StyledBaseTimeText>
</template>

<script>
import StyledBaseTimeText from "./style";

export default {
  name: "BaseTimeText",
  props: {
    date: { type: String }
  },
  components: { StyledBaseTimeText }
};
</script>

