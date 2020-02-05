import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import IconedText from "./index.vue";


let description = `import IconedText from "@/components/molecules/iconed-text/"';
`;
export default createDefStory("molecules/IconedText", IconedText, description);


//---------------------
//Basic
let setting = {
    name: "IconedText",
    compos: { IconedText: IconedText },
    props: {
        type: "new",
        compose: "left"
    },
    action: {},
    template: tagTemp`<IconedText ${'props'} ${'action'}>新規作成</IconedText>`
};

export const Basic = () => (createStory(setting));

