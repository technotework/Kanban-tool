<template>
  <label :for="id">
    <input type="checkbox" :id="id" :value="content" v-model="myModel" />

    <slot />
  </label>
</template>

<script>
export default {
  name: "SB",
  props: {
    content: String,
    id: String,
    value: Array
  },
  data: () => {
    return {};
  },
  computed: {
    myModel: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  methods: {},
  components: {}
};
</script>
