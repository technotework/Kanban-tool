
import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
import NotfoundPage from "./index.vue";

export default {
    title: "pages/NotfoundPage",
    component: { NotfoundPage },
    decorators: [withKnobs, withInfo],
    
};

export const Basic = () => ({
    components: { NotfoundPage },
    template: `<NotfoundPage />`,
    parameters: {
        
        info: {
            text: `description`
        },
    }
});