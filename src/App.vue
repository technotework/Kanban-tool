<template>
  <div id="app">
    <router-view />

    <input type="text" v-model="hoge" :readonly="showI" />
    <ul>
      <li v-for="item in items" :key="item.a">
        <EditInput v-model.lazy="item.a" :readonly="showI" />
        <ClickToEditableInput v-model.lazy="item.a" />
      </li>
    </ul>

    <button @click="onClick" />
  </div>
</template>

<script>
import { EditInput } from "@/components/atoms/base-input/compose";
import ClickToEditableInput from "@/components/molecules/click-to-editable-input/";
export default {
  name: "App",
  props: {},
  data: function() {
    return {
      showI: true,
      hoge: "a",
      items: [{ a: "a" }, { a: "b" }, { a: "c" }]
    };
  },
  methods: {
    onClick() {
      this.showI = !this.showI;
    }
  },
  components: { EditInput, ClickToEditableInput }
};
</script>
