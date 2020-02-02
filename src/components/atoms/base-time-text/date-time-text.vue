<template>
  <div>
    <BaseTimeText :date="date" />
    {{date|formatUnixToDate}}
  </div>
</template>

<script>
import styles from "@/components/utils/styles-mixin";
import BaseTimeText from "./index";
import * as moment from "moment";

export default {
  mixins: [styles],
  name: "DateTimeText",
  props: {
    ...BaseTimeText.props
  },
  components: {
    BaseTimeText
  },
  filters: {
    formatUnixToDate: function(date) {
      let utime = Number(date);
      let formated = moment.unix(utime).format("YYYY/MM/DD HH:mm");

      return formated;
    }
  }
};
</script>
<style lang="scss" module>
</style>


