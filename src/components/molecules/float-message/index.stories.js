import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator";
import FloatMessage from "./index.vue";

let description = 'import FloatMessage from "@/components/molecules/float-message/"';

export default createDefStory(
    "molecules/FloatMessage",
    FloatMessage,
    description
);

//---------------------
//Basic
let setting = {
    name: "FloatMessage",
    compos: {
        FloatMessage: FloatMessage
    },
    props: {
        type: "ErrorText",
        message: "メッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージ"
    },
    action: {
        event: "click"
    },
    template: tagTemp`<FloatMessage ${'props'} ${'action'}>MessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessage</FloatMessage>`
};

export const Basic = () => (createStory(setting));