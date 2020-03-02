<template>
  <div id="app">
    <router-view />

    <MembersUnit v-model="assigned" :members="members" />
  </div>
</template>

<script>
import MembersUnit from "@/components/organisms/members/members-unit/";
export default {
  name: "App",
  computed: {},
  data: () => {
    return {
      members: {
        a: {
          img:
            "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
          nickname: "tarou"
        },
        b: {
          img:
            "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
          nickname: "hanako"
        },
        c: {
          img:
            "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
          nickname: "jiro"
        },
        d: {
          img:
            "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
          nickname: "karin"
        },
        e: {
          img:
            "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
          nickname: "momoco"
        },
        f: {
          img:
            "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
          nickname: "mike"
        },
        g: {
          img:
            "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
          nickname: "boy"
        },
        h: {
          img:
            "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
          nickname: "moke"
        },
        i: {
          img:
            "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
          nickname: "hoge"
        }
      },
      assigned: ["a", "c", "d"]
    };
  },
  methods: {},
  components: { MembersUnit }
};
</script>
