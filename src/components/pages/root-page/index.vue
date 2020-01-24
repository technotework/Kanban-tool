<template>
  <div class="root-page">
    src/components/pages/root-page/index.vue
    <router-link to="/app/regist">regist-page</router-link>
    <router-view />
  </div>
</template>

<script>
import StyledCompo from './style';

import "./style"

export default {
  name: "RootPage",
  props: {}
};
</script>
