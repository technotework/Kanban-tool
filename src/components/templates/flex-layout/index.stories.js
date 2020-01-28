
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import FlexLayout from "./index.vue";

export default {
    title: "templates/FlexLayout",
    component: { FlexLayout },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

const Box = styled.div`
    width:200px;
    height:200px;
    background-color:#ccc;
    margin-right:10px;
`;

export const Basic = () => ({
    components: { Box, FlexLayout, Theme },
    template: `<Theme><FlexLayout width="200px">
    <Box>a</Box> <Box>b</Box> <Box>c</Box>
    </FlexLayout></Theme>`
});