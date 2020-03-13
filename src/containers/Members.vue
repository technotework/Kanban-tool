<template>
  <MembersUnit
    :members="members"
    :id="id"
    :status="status"
    :parent-id="parentId"
    :editor="editor"
    v-model="assigned"
    @update-member="onUpdateMember"
  />
</template>

<script>
import MembersUnit from "@/components/organisms/members/members-unit/";
import { mapActions } from "vuex";
export default {
  name: "Members",
  created: function() {},
  props: {
    value: Array,
    id: String,
    editor: String,
    status: String,
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
  methods: {
    onUpdateMember(value) {
      let module = "task_" + value.parentId;
      this.$store.dispatch(module + "/updateMember", {
        id: value.id,
        data: value.data
      });
    }
  },
  components: { MembersUnit }
};
</script>
