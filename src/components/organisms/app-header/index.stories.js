import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
import AppHeader from "./index.vue";
import {
  TextButton
} from "@/components/atoms/base-no-link-button/compose"

let description = 'import AppHeader from "@/components/organisms/app-header/"';
export default createDefStory("organisms/AppHeader", AppHeader, description);

//---------------------
//Basic
let setting = {
  name: "AppHeader",
  compos: {
    AppHeader: AppHeader,
    TextButton: TextButton
  },
  props: {},
  template: tagTemp `<AppHeader ${"props"} ${"action"}> 
    <template #first>
       
    </template>
    <template #second>
      <TextButton>button1</TextButton>
      <TextButton>button2</TextButton>
      <TextButton>button3</TextButton>
    </template>
  </AppHeader>`
};

export const Basic = () => createStory(setting);