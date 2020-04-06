<template>
    <UserInfoForm @submit-profile-event="onUpload" />
</template>

<script>
/**
 * プロフィール Vuex modules userと通信するコンテナ
 */
import { mapActions } from "vuex";
import { validateMultiple } from "@/containers/resorces/validator";
import { TYPE, APP } from "@/containers/resorces/message";
import { getConfirmMessage } from "@/containers/resorces/message";
import UserInfoForm from "@/components/organisms/user/user-info-form";
export default {
    name: "User",
    created: function () {
        //初期化・リロード処理
        this.unlisten = this.$store.getters.firebase
            .auth()
            .onAuthStateChanged((user) => {
                if (user) {
                    let uid = user.uid;
                    let path = "/profile";
                    this.$store.dispatch("auth/setUserInfo", {
                        uid: uid,
                        path: path,
                    });
                }
            });
    },
    destroyed: function () {
        this.unlisten();
    },
    data: () => {
        return {
            unlisten: null,
            isCreated: false,
        };
    },
    methods: {
        ...mapActions("user", ["uploadFile"]),
        onUpload(value) {
            const { data, size, nickname } = value;

            const objNickname = {
                data: nickname,
                name: "ニックネーム",
                require: true,
                less: 15,
            };

            const objFile = {
                data: data,
                name: "アイコン画像",
                require: true,
            };

            const objSize = {
                data: size,
                name: "アイコン画像のサイズ",
                lessMB: 4,
            };
            validateMultiple([objNickname, objFile, objSize], () => {
                this.uploadFile(value);
            });
        },
    },
    components: { UserInfoForm },
};
</script>
