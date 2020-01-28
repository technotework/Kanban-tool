import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export";
import BothSideRight from "./index.vue";

export default {
    title: "templates/BothSideRight",
    component: { BothSideRight },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

const Container = styled.div`
    position:relative;
    width:300px;
`;

export const Basic = () => ({
    components: { Container, BothSideRight, Theme },
    template: `
    <Theme><Container>
    <BothSideRight width="100px">right</BothSideRight>
    </Container></Theme>`
});