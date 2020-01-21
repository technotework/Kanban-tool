<template>
  <div class="root-page">
    src/components/pages/root-page/index.vue
    <router-link to="/app/regist">regist-page</router-link>
    <router-view />
  </div>
</template>

<script>

import "./style.js"

export default {
  name: "RootPage",
  props: {}
};
</script>
