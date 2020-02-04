import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import BaseImage from "./index.vue";

let description = 'import BaseImage from "@/components/atoms/base-image/"';
export default createDefStory("atoms/BaseImage", BaseImage, description);


//---------------------
//Basic
let setting = {
    name: "BaseImage",
    compos: { BaseImage: BaseImage },
    props: {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg",
        width: "200px",
        height: "auto",
        alt: "cat"
    },
    action: {},
    template: tagTemp`<BaseImage ${'props'} ${'action'} />`
};

export const Basic = () => (createStory(setting));


