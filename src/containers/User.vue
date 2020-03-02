<template>
  <UserInfoForm @submit-profile-event="onUpload" />
</template>

<script>
import { mapActions } from "vuex";
import { validateMultiple } from "@/containers/resorces/validator";
import { TYPE, APP } from "@/containers/resorces/message";
import { getConfirmMessage } from "@/containers/resorces/message";
import UserInfoForm from "@/components/organisms/user/user-info-form";
export default {
  name: "User",
  props: {},
  data: () => {
    return {};
  },
  created: function() {
    this.$store.getters.firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let uid = user.uid;
        let path = "/profile";
        this.$store
          .dispatch("auth/setUserInfo", { uid: uid, path: path })
          .then(() => {
            //this.init();
          });
      }
    });
  },
  computed: {},
  methods: {
    ...mapActions("user", ["uploadFile"]),
    onUpload(value) {
      let { data, size, nickname } = value;

      let objNickname = {
        data: nickname,
        name: "ニックネーム",
        require: true,
        less: 15
      };

      let objFile = {
        data: data,
        name: "アイコン画像",
        require: true
      };

      let objSize = {
        data: size,
        name: "アイコン画像のサイズ",
        lessMB: 4
      };
      validateMultiple([objNickname, objFile, objSize], () => {
        this.uploadFile(value);
      });
    }
  },
  components: { UserInfoForm }
};
</script>
