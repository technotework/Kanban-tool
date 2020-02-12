<template>
  <div id="app">
    <router-view />
    <button @click="onClick" value="取得" />
    <button @click="onClickUpdate" value="更新" />
    <button @click="onClickDelete" value="配列削除" />
    <button @click="onClickUpdateArray" value="配列更新" />
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
    ...mapActions(["rename", "nameGet", "deleteArray", "updateArray"]),
    onClick() {
      this.nameGet();
    },
    onClickUpdate() {
      this.rename("にゃああああ");
    },
    onClickDelete() {
      this.deleteArray();
    },
    onClickUpdateArray() {
      this.updateArray("さばねこ");
    }
  },
  components: {}
};
</script>
