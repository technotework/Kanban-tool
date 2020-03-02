import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import ImageIconedText from "./index.vue";


let description = 'import ImageIconedText from "@/components/molecules/iconed-text/"';

export default createDefStory("molecules/ImageIconedText", ImageIconedText, description);


//---------------------
//Basic
let setting = {
    name: "ImageIconedText",
    compos: { ImageIconedText: ImageIconedText },
    props: {
        img: "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
        size: "S",
        compose: "left"
    },
    action: {},
    template: tagTemp`<ImageIconedText ${'props'} ${'action'}>新規作成</ImageIconedText>`
};

export const Basic = () => (createStory(setting));

