<template>
  <div id="app">
    <router-view />
    <button @click="onClick" />
    <button @click="onClick2" />
    {{name}}
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ProjectBoardList from "@/components/organisms/boards/project-board-list/";
export default {
  name: "App",
  computed: {
    name: function() {
      return this.$store.getters.getName;
    }
  },
  data: () => {
    return {
      boardList: [
        {
          id: "b1",
          title: "backlog",
          taskList: [
            {
              id: "t1",
              data: "todo:あいうえおあいうえお"
            },
            {
              id: "t2",
              data: "todo:かきくけこ"
            },
            {
              id: "t3",
              data: "todo:さしすせそ"
            }
          ]
        },
        {
          id: "b2",
          title: "todo",
          taskList: [
            {
              id: "t4",
              data: "- [ ] ほげ"
            },
            {
              id: "t5",
              data: "- [ ] ぴよ"
            },
            {
              id: "t6",
              data: "もげもげ"
            }
          ]
        },
        {
          id: "b3",
          title: "debug",
          taskList: [
            {
              id: "t7",
              data: "なにぬねの"
            },
            {
              id: "t8",
              data: "はひふへほ"
            },
            {
              id: "t9",
              data: "たちつてと"
            }
          ]
        }
      ]
    };
  },
  methods: {
    ...mapActions(["rename", "nameGet"]),
    onClick() {
      this.nameGet();
    },
    onClick2() {
      this.rename("にゃああああ");
    }
  },
  components: {}
};
</script>
