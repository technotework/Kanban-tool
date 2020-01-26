<template>
  <div>
    <BaseTimeText :date="date" />
    {{date|formatUnixToDate}}
  </div>
</template>

<script>
import BaseTimeText from "./index";
import * as moment from "moment";

export default {
  name: "DateText",
  props: {
    ...BaseTimeText.props
  },
  components: {
    BaseTimeText
  },
  filters: {
    formatUnixToDate: function(date) {
      let utime = Number(date);
      let formated = moment.unix(utime).format("YYYY/MM/DD");

      return formated;
    }
  }
};
</script>

