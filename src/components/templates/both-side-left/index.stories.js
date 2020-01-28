import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export";
import BothSideLeft from "./index.vue";

export default {
    title: "templates/BothSideLeft",
    component: { BothSideLeft },
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
    components: { Container, BothSideLeft, Theme },
    template: `<Theme><Container>
    <BothSideLeft>left</BothSideLeft>
    </Container></Theme>`
});