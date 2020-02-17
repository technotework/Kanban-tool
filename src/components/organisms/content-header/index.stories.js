import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
import ContentHeader from "./index.vue";

let description = 'import ContentHeader from "@/components/organisms/content-header/"';
export default createDefStory("organisms/ContentHeader", ContentHeader, description);

let setting = {
  name: "ContentHeader",
  compos: {
    ContentHeader: ContentHeader,
  },
  props: {},
  action: {
    event: "click"
  },
  template: tagTemp`<ContentHeader ${"props"} ${"action"} > 
    <template #first>
       ProjectPage
    </template>
    <template #option>
       
    </template>
    <template #second>
      新規作成
    </template>
  </ContentHeader>`
};

export const Basic = () => createStory(setting);