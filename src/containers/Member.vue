<template>
  <MemberIcon :img="memberIconUrl" :size="S" />
</template>

<script>
import MemberIcon from "@/components/organisms/members/member-icon/";
import { mapGetters } from "vuex";
export default {
  name: "Members",
  props: {
    memberId: String
  },
  data: () => {
    return {};
  },
  created: function() {},
  computed: {
    ...mapGetters("members", ["members"]),
    memberIconUrl() {
      return this.members[this.memberId];
    }
  },
  methods: {},
  components: { MemberIcon }
};
</script>
