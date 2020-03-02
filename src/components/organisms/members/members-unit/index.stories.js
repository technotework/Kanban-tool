import {
    createDefStory,
} from "@/components/utils/story-creator";
import {
    action, text, object, array
} from "@/components/utils/story-export"
import MembersUnit from "./index.vue";

let description = 'import MembersUnit from "@/components/organisms/members/members-unit/"';
export default createDefStory("organisms/members/members-unit/MembersUnit", MembersUnit, description);


//---------------------
//Basic
export const Basic = () => ({
    components: {
        MembersUnit
    },
    props: {
        members: {
            default: object("members", {
                "a": {
                    "img": "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                    "nickname": "tarou"
                },
                "b": {
                    "img": "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                    "nickname": "hanako"
                },
                "c": {
                    "img": "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                    "nickname": "jiro"
                },
                "d": {
                    "img": "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                    "nickname": "karin"
                },
                "e": {
                    "img": "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                    "nickname": "momoco"
                },
                "f": {
                    "img": "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                    "nickname": "mike"
                },
                "g": {
                    "img": "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                    "nickname": "boy"
                },
                "h": {
                    "img": "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                    "nickname": "moke"
                },
                "i": {
                    "img": "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                    "nickname": "hoge"
                }
            })
        },
        assigned: {
            default: array("assigned", ["a", "c", "d"])
        }
    },
    template: `<MembersUnit  v-model="assigned" :members="members" />`,

});
