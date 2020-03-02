
import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator"
import MembersCheckList from "@/components/organisms/members/members-check-list/"

let description = 'import MembersCheckList from "@/components/organisms/members/members-check-list/"'
export default createDefStory("organisms/members/MembersCheckList", MembersCheckList, description);

//---------------------
//Basic
let setting = {
    name: "MembersCheckList",
    compos: {
        MembersCheckList: MembersCheckList
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
                "nickname": "tarou"
            },
            "e": {
                "img": "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                "nickname": "hanako"
            },
            "f": {
                "img": "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                "nickname": "jiro"
            },
            "g": {
                "img": "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                "nickname": "tarou"
            },
            "h": {
                "img": "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                "nickname": "hanako"
            },
            "i": {
                "img": "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg",
                "nickname": "jiro"
            }
        }
    },
    action: {

    },
    template: tagTemp`<MembersCheckList ${'props'} ${'action'} />`
};

export const Basic = () => (createStory(setting));
