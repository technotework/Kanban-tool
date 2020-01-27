
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import styled from "vue-styled-components";
import BothSideLeft from "./index.vue";

export default {
    title: "templates/BothSideLeft",
    component: { BothSideLeft }
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