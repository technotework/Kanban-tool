import {
  createDefStory
} from "@/components/utils/story-creator";
import { action } from "@/components/utils/story-export"
import AppHeader from "./index.vue";
import {
  TextButton
} from "@/components/atoms/base-no-link-button/compose"

let description = 'import AppHeader from "@/components/organisms/app-header/"';
export default createDefStory("organisms/AppHeader", AppHeader, description);



//---------------------
//Basic
export const Basic = () => ({
  components: {
    AppHeader, TextButton
  },
  data: () => ({
    text: "MyTeamName"
  }),
  props: {
  },
  template: `<AppHeader v-model.lazy="text" @input="action"> 
    <template #first>
      
    </template>
    <template #second>
      <TextButton>button1</TextButton>
      <TextButton>button2</TextButton>
      <TextButton>button3</TextButton>
    </template>
  </AppHeader>`,
  methods: { action: action('input') }
});
