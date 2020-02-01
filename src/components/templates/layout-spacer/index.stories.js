import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import Vue from "vue"
import LayoutSpacer from "./index.vue"

export default {
    title: "templates/LayoutSpacer",
    component: { LayoutSpacer },
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
    components: { Box, LayoutSpacer },
    props: {
        width: { default: text("width", "auto") },
        margin: { default: text("margin", "0 0 20px 0") },
        padding: { default: text("padding", "20px") },
    },
    template: `
    
        <LayoutSpacer :padding="padding" :margin="margin" :width="width">
            <Box>
                Box
            </Box>
        </LayoutSpacer>
        <LayoutSpacer :padding="padding" :margin="margin" :width="width">
            <Box>
                Box
            </Box>
        </LayoutSpacer> 
    `
});