<template>
  <MembersUnit :members="members" v-model="assigned" :parent-id="parentId" />
</template>

<script>
import MembersUnit from "@/components/organisms/members/members-unit/";
import { mapActions } from "vuex";
export default {
  name: "Members",
  created: function() {},
  props: {
    value: Array,
    parentId: String
  },
  data: () => {
    return {};
  },
  computed: {
    members() {
      return this.$store.getters["members/members"];
    },
    assigned: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  methods: {},
  components: { MembersUnit }
};
</script>
