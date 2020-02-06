import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
import ContentHeader from "./index.vue";
import IconedTextButton from "@/components/molecules/iconed-text-button/"

let description = 'import ContentHeader from "@/components/organisms/content-header/"';
export default createDefStory("organisms/ContentHeader", ContentHeader, description);

let setting = {
  name: "ContentHeader",
  compos: {
    ContentHeader: ContentHeader,
    IconedTextButton: IconedTextButton
  },
  props: {},
  template: tagTemp `<ContentHeader ${"props"} ${"ac¡tion"}> 
    <template #first>
       
    </template>
    <template #second>
      <IconedTextButton compose="right" type="new">新規作成</IconedTextButton>
    </template>
  </ContentHeader>`
};

export const Basic = () => createStory(setting);