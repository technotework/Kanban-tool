
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions'
import Theme from "@/components/themes/theme"
import styled from "vue-styled-components"
import LayoutSpacer from "./index.vue"

export default {
    title: "templates/LayoutSpacer",
    component: { LayoutSpacer }
};

const Box = styled.div`
    width:200px;
    height:200px;
    background-color:#ccc;
`;

export const Basic = () => ({
    components: { Box, LayoutSpacer, Theme },
    template: `
    <Theme>
        <LayoutSpacer padding="20px 10px" margin="0 0 20px 0">
            <Box>
                Box外側に<br>padding 20px 10px margin 0 0 20px 0
            </Box>
        </LayoutSpacer>
        <LayoutSpacer padding="20px 10px" margin="20px 0 0 0">
            <Box>
                Box外側に<br>padding 20px 10px margin 20px 0 0 0
            </Box>
        </LayoutSpacer> 
    </Theme>`
});