
import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator"
import MembersIconList from "@/components/organisms/members/members-icon-list/"

let description = 'import MembersIconList from "@/components/organisms/members/members-icon-list/"'
export default createDefStory("organisms/members/MembersIconList", MembersIconList, description);

//---------------------
//Basic
let setting = {
    name: "MembersIconList",
    compos: {
        MembersIconList: MembersIconList
    },
    props: {
        members: {
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
        },
        assigned: ["a", "c", "d"]
    },
    action: {

    },
    template: tagTemp`<div style="margin:100px"><MembersIconList ${'props'} ${'action'} /></div>`
};

export const Basic = () => (createStory(setting));
