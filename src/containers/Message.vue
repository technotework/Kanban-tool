<template>
    <MessageUnit
        @delete-message="onDeleteMessage"
        :dialogue="dialogue"
        :errors="errorMessages"
        :is-show-load="isShowLoad"
    >
        <slot />
    </MessageUnit>
</template>

<script>
import MessageUnit from "@/components/organisms/message-unit/";
import { getMessages } from "@/containers/resorces/message";
import { v4 as uuidv4 } from "uuid";
import Vue from "vue";
export default {
    name: "Message",
    props: {
        target: String,
        isShowLoad: Boolean
    },
    created() {
        //ThrowされてきたエラーをListenする
        Vue.config.errorHandler = (err, vm, info) => {
            this.createErrorMessage(err);
        };
        window.addEventListener("error", event => {
            this.createErrorMessage(event.error);
        });
        window.addEventListener("unhandledrejection", event => {
            this.createErrorMessage(event.reason);
        });
    },
    destroyed() {
        //廃棄
        window.removeEventListener("error");
        window.removeEventListener("unhandledrejection");
        this.dialogue = null;
        this.isShowLoad = false;
        this.errorMessages = [];
    },
    data: () => {
        return {
            errorMessages: []
        };
    },
    computed: {
        dialogue() {
            let name = this.target + "Dialogue";
            let getData = this.$store.getters["message/" + name];
            return getData;
        }
    },
    methods: {
        /**
         * ThrowされたエラーをListenしたものからメッセージ生成
         */
        createErrorMessage(err) {
            if (err != undefined && err.error != undefined) {
                //メッセージ文言の配列を取得
                const messageArray = getMessages(err);

                for (let i = 0; i < messageArray.length; i++) {
                    let messageObj = messageArray[i];
                    messageObj.id = uuidv4();
                    //固有IDをふってメッセージをdataにつめこむ
                    //--> Viewにわたる --> 表示
                    this.errorMessages.push(messageObj);
                }
            }
        },
        /**
         * エラーメッセージを消すeventをうけてerrorMessagesからデータ削除
         */
        onDeleteMessage(id) {
            let index;
            for (let i = 0; i < this.errorMessages.length; i++) {
                if (this.errorMessages[i].id == id) {
                    index = i;
                }
            }
            this.errorMessages.splice(index, 1);
        }
    },
    components: { MessageUnit }
};
</script>
