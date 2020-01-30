
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"

//コンポーネントスタイル

const ConfirmationDialogue = styled.div``;

const ConfirmationDialogueComponent = Vue.component("confirmation-dialogue-component", {
    components: { Theme, ConfirmationDialogue },
    template: `<Theme><ConfirmationDialogue><slot/></ConfirmationDialogue></Theme>`
});

export default ConfirmationDialogueComponent;