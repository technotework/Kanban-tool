
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const InputConfirmationDialogue = styled.div``;
    
    const InputConfirmationDialogueComponent = Vue.component("input-confirmation-dialogue-component",{
    components: {Theme, InputConfirmationDialogue},
    template: `<Theme><InputConfirmationDialogue><slot/></InputConfirmationDialogue></Theme>`
    });

    export default InputConfirmationDialogueComponent;