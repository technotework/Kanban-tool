
<template>
  <div>
    <template>
      <ul :class="$style.float">
        <li v-for="(item,index) in errorMessages" :key="'error' + index">
          <FloatMessage
            type="ErrorText"
            :index="index"
            :message="item.text"
            @delete-message="onDeleteMessage"
          />
        </li>
      </ul>
      <template v-if="dialogue">
        <ConfirmationDialogue />
      </template>
    </template>
    <slot />
  </div>
</template>

<script>
import ConfirmationDialogue from "@/components/molecules/confirmation-dialogue/";
import FloatMessage from "@/components/molecules/float-message/";

import { getMessage } from "@/containers/resorces/message";

import Vue from "vue";
export default {
  name: "",
  props: {
    value: Boolean
  },
  created() {
    Vue.config.errorHandler = (err, vm, info) => {
      console.log(`Captured in Vue.config.errorHandler: ${info}`, err);
      console.log("aa", err);
      this.createErrorMessage(err);
    };
    window.addEventListener("error", event => {
      //console.log("Captured in error EventListener", event.error);
      this.createErrorMessage(event.error);
    });
    window.addEventListener("unhandledrejection", event => {
      //console.log("Captured in unhandledrejection EventListener", event.reason);
      this.createErrorMessage(event.reason);
    });
  },
  data: () => {
    return {
      showType: "",
      dialogue: null,
      errorMessages: []
    };
  },
  computed: {
    disable: {
      get() {
        return this.value;
      },
      set(value) {
        if (this.value == false) {
          this.dialogue = null;
          this.errorMessages = [];
        }
        this.$emit("input");
      }
    }
  },
  methods: {
    createErrorMessage(err) {
      if (err != undefined && err.error != undefined) {
        let messageObj = getMessage(err);
        this.errorMessages.push(messageObj);
      }
    },
    onDeleteMessage(obj) {
      this.errorMessages.splice(obj.index, 1);
    }
  },
  components: { FloatMessage, ConfirmationDialogue }
};
</script>
<style lang="scss" module>
.float {
  position: fixed;
  width: 95vw;
  height: auto;
  bottom: 30px;
  left: calc(50% - 95vw / 2);
  z-index: $index_xm;
}
</style>