import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator";
import { action } from "@/components/utils/story-export"
import AppHeader from "./index.vue";

let description = 'import AppHeader from "@/components/organisms/app-header/"';
export default createDefStory("organisms/AppHeader", AppHeader, description);



//---------------------
//Basic

let setting = {
  name: "AppHeader",
  compos: { AppHeader: AppHeader },
  props: {
    img: "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
    username: "technotework",
    navname: "logout",
    title: "project"
  },
  action: { event: "input" },
  template: tagTemp`<AppHeader ${"props"} ${"action"} >NewButton</AppHeader>`
};

export const Basic = () => createStory(setting);