import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
import { action } from "@/components/utils/story-export"
import ContentHeader from "./index.vue";

let description = 'import ContentHeader from "@/components/organisms/content-header/"';
export default createDefStory("organisms/ContentHeader", ContentHeader, description);


//---------------------
//Basic
export const Basic = () => ({
  components: {
    ContentHeader
  },
  data: () => ({
    text: "MyProjectName"
  }),
  template: `<ContentHeader v-model.lazy="text" @input="textChange" @click="onClick"> 
 
  <template #first>
     
  </template>
  <template #second>
    新規作成
  </template>
</ContentHeader>`,
  methods: { textChange: action('input'), onClick: action('click') }
});

