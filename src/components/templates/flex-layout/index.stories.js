
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import Vue from "vue"
import FlexLayout from "./index.vue";

export default {
    title: "templates/FlexLayout",
    component: { FlexLayout },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

const StyledBox = styled.div`
    width:200px;
    height:200px;
    background-color:#ccc;
    margin-right:10px;
`;

const Box = Vue.component("Box", {
    components: { StyledBox },
    template: `<StyledBox><slot /></StyledBox>`
});

export const Basic = () => ({
    components: { Box, FlexLayout },
    props: {
        wrap: { default: text("wrap", "wrap") },
        width: { default: text("width", "auto") },
        height: { default: text("height", "auto") },
        justify: { default: text("justify", "flex-start") },
    },
    template: `<FlexLayout :width="width" :height="height" :wrap="wrap" :justify="justify">
    <Box>a</Box> <Box>b</Box> <Box>c</Box>
    </FlexLayout>`
});