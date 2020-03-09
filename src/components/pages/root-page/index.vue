<template>
  <div class="root-page">
    <transition mode="out-in">
      <router-view />
    </transition>
    <a href="https://github.com/technotework/Kanban-tool" target="_blank" :class="$style.link">
      <div :class="$style.footer">
        <span :class="$style.copy">BY TECHNOTEWORK</span>
        <BaseIcon type="git" :class="$style.git" />
      </div>
    </a>
  </div>
</template>

<script>
import BaseIcon from "@/components/atoms/base-icon/";
export default {
  name: "RootPage",
  props: {},
  components: { BaseIcon }
};
</script>
<style lang="scss" module>
.link {
  opacity: 1;
}
.link:hover {
  opacity: 0.7;
}

.footer {
  position: absolute;
  bottom: 22px;
  left: calc(50% - 235px / 2);
  display: flex;
  align-items: center;
  z-index: 810001;
}

.copy {
  margin: 0 auto;
  padding: 5px 10px 0 0;
  @include footerText;
}

.git {
  fill: $white;
  width: 38px;
  height: 38px;
}
</style>

