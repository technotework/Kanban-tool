<template>
  <MembersUnit
    :members="members"
    :id="id"
    :parent-id="parentId"
    :is-editing="isEditing"
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
    editing: String,
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
    },
    isEditing() {
      let myAltId = this.$store.getters["auth/user"].altId;
      console.log(this.editing == myAltId);
      return this.editing == myAltId;
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
