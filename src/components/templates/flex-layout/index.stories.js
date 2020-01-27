
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import styled from "vue-styled-components";
import FlexLayout from "./index.vue";

export default {
    title: "templates/FlexLayout",
    component: { FlexLayout }
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