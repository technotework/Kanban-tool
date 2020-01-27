
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import styled from "vue-styled-components";
import BothSideRight from "./index.vue";

export default {
    title: "templates/BothSideRight",
    component: { BothSideRight }
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