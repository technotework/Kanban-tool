<template>
  <div id="app">
    <router-view />
    <Theme>
      <Icon
        width="100px"
        height="100px"
        round="100px"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg"
      />
    </Theme>
  </div>
</template>

<script>
import Theme from "@/components/themes/theme";
import Icon from "@/components/atoms/base-icon";
import props from "@/components/themes/service-props-mixin";

export default {
  name: "App",
  mixins: [props],
  props: {},
  data: function() {
    return {};
  },
  components: { Icon, Theme }
};
</script>
