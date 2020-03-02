<template>
  <BaseModelessContainer :id="id" :items="menuItems" :class="$style.menu">
    <ul>
      <li v-for="item in menuItems" :key="item.name" :class="$style.menuItem">
        <BaseModelessItem
          :value="item.value"
          :name="item.name"
          @click="onClick(id, item.name, $event)"
        />
      </li>
    </ul>
  </BaseModelessContainer>
</template>

<script>
import BaseModelessContainer from "@/components/atoms/base-modeless-container/";
import BaseModelessItem from "@/components/molecules/context-menu-list-item/";
import listener from "@/components/utils/listener-mixin";
export default {
  name: "ContextMenuList",
  mixins: [listener],
  created: function() {
    this.listen(
      window,
      "click",
      function(e) {
        if (!this.$el.contains(e.target)) {
          this.$emit("close");
        }
      }.bind(this)
    );
  },
  props: {
    id: String,
    menuItems: { type: Array }
  },
  components: {
    BaseModelessContainer,
    BaseModelessItem
  },
  methods: {
    onClick(id, name, e) {
      this.$emit("context-menu-click", { id: id, name: name, e: e });
    }
  }
};
</script>
<style lang="scss" module>
.menu {
  @include shadow;
  @include bdc($gray);
  @include bgc($white);
  @include r($round);
  padding: $s4;
}
</style>
