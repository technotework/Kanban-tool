import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator";
import MemberIcon from "@/components/organisms/members/member-icon/";

const description =
    'import MemberIcon from "@/components/organisms/members/member-icon/"';
export default createDefStory(
    "organisms/members/MemberIcon",
    MemberIcon,
    description
);

//---------------------
//Basic
const setting = {
    name: "MemberIcon",
    compos: {
        MemberIcon: MemberIcon
    },
    props: {
        size: "S",
        img:
            "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg"
    },
    action: {},
    template: tagTemp`<MemberIcon ${"props"} ${"action"} />`
};

export const Basic = () => createStory(setting);
