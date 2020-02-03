<template>
  <div>
    <BaseTimeText :date="date" />
    {{date|formatUnixToDate}}
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";
import BaseTimeText from "./index";
import * as moment from "moment";

export default {
  mixins: [base],
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


