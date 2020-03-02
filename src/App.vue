<template>
  <div id="app">
    <router-view />
    <MemberIcon
      img="https://firebasestorage.googleapis.com/v0/b/kanban-c1adc.appspot.com/o/a3647fb0-8950-4c70-8faf-47ae1b0058b3%2Ficon?alt=media&token=33662419-ad82-46dc-8691-149792996d57"
      size="S"
    />
  </div>
</template>

<script>
import MemberIcon from "@/components/organisms/members/member-icon/";
export default {
  name: "App",
  computed: {},
  data: () => {
    return {};
  },
  methods: {},
  components: { MemberIcon }
};
</script>
