import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
import { action } from "@/components/utils/story-export"
import EditableContentHeader from "./index.vue";

let description = 'import EditableContentHeader from "@/components/organisms/editable-content-header/"';
export default createDefStory("organisms/EditableContentHeader", EditableContentHeader, description);


//---------------------
//Basic
export const Basic = () => ({
  components: {
    EditableContentHeader
  },
  data: () => ({
    text: "MyProjectName"
  }),
  template: `<EditableContentHeader v-model.lazy="text" @input="textChange" @click="onClick"> 
 
  <template #first>
     
  </template>
  <template #second>
    新規作成
  </template>
</EditableContentHeader>`,
  methods: { textChange: action('input'), onClick: action('click') }
});

