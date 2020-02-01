import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import BaseHeading from "./index";
import { H1 as H1Compo, H2 as H2Compo, H3 as H3Compo, H4 as H4Compo } from "./compose"

export default {
    title: "atoms/BaseHeading",
    component: { BaseHeading },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {}
    }
};

export const H1 = () => ({
    components: { H1Compo },
    template: `
    <div>
        <H1Compo>H1</H1Compo>
    </div>`
});

export const H2 = () => ({
    components: { H2Compo },
    template: `
    <div>
        <H2Compo>H2</H2Compo>
    </div>`
});

export const H3 = () => ({
    components: { H3Compo },
    template: `
    <div>
        <H3Compo>H3</H3Compo>
    </div>`
});

export const H4 = () => ({
    components: { H4Compo },
    template: `
    <div>
        <H4Compo>H4</H4Compo>
    </div>`
});