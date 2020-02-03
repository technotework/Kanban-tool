
import Vue from "vue"

import Dialogue from "./index"

/*=========================================================
OK/CANCEL
=========================================================*/

const ConfirmDialogue = Vue.component("confirmation-dialogue", {
    components: { Dialogue },
    template: `<Dialogue pval="OK" sval="キャンセル"><slot /></Dialogue>`,
    methods: {
        ...Dialogue.methods
    }
});

export { ConfirmDialogue }

/*=========================================================
OK/CANCEL
=========================================================*/

const SaveDialogue = Vue.component("confirmation-dialogue", {
    components: { Dialogue },
    template: `<Dialogue pval="保存" sval="キャンセル"><slot /></Dialogue>`,
    methods: {
        ...Dialogue.methods
    }
});

export { SaveDialogue }