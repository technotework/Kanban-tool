import { createDefStory } from "@/components/utils/story-creator";
import { object, array, text } from "@/components/utils/story-export";
import MembersUnit from "./index.vue";

const description =
    'import MembersUnit from "@/components/organisms/members/members-unit/"';
export default createDefStory(
    "organisms/members/MembersUnit",
    MembersUnit,
    description
);

//---------------------
//Basic
export const Basic = () => ({
    components: {
        MembersUnit
    },
    props: {
        members: {
            default: object("members", {
                a: {
                    altId: "a",
                    img:
                        "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                    nickname: "tarou"
                },
                b: {
                    altId: "b",
                    img:
                        "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                    nickname: "hanako"
                },
                c: {
                    altId: "c",
                    img:
                        "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                    nickname: "jiro"
                },
                d: {
                    altId: "d",
                    img:
                        "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                    nickname: "karin"
                },
                e: {
                    altId: "e",
                    img:
                        "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                    nickname: "momoco"
                },
                f: {
                    altId: "f",
                    img:
                        "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                    nickname: "mike"
                },
                g: {
                    altId: "g",
                    img:
                        "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                    nickname: "boy"
                },
                h: {
                    altId: "h",
                    img:
                        "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                    nickname: "moke"
                },
                i: {
                    altId: "i",
                    img:
                        "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                    nickname: "hoge"
                }
            })
        },
        assigned: {
            default: array("assigned", ["a", "c", "d"])
        },
        status: {
            default: text("status", "NO_ONE")
        }
    },
    template: `<div style="margin:200px 50px; height:300px; width:300px; position:relative;">
    <MembersUnit v-model="assigned" :status="status" :members="members" /></div>`
});
