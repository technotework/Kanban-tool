<template>
    <BaseTimeText :date="date">{{ date | formatUnixToDate }}</BaseTimeText>
</template>

<script>
/**
 * UnixDateをYYYY/MM/DD HH:mmに変換するAtoms
 */
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
        /**
         *UnixDateをYYYY/MM/DD HH:mmに変換する
         */
        formatUnixToDate: function(date) {
            const utime = new Date(date * 1000);
            const yymmdd = utime.toLocaleDateString("ja-JP");
            const hhmmss = utime.toLocaleTimeString("ja-JP");
            return `${yymmdd} ${hhmmss}`;
        }
    }
};
</script>
<style lang="scss" module></style>
