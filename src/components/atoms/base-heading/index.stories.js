import { createDefStory, createStory } from "@/components/utils/story-creator"
import BaseHeading from "./index";
import { H1, H2, H3, H4 } from "./compose"

export default createDefStory("atoms/BaseHeading", BaseHeading);


export const HeadingH1 = () => ({
    components: { H1 },
    template: `
    <div>
        <H1>H1</H1>
    </div>`
});

export const HeadingH2 = () => ({
    components: { H2 },
    template: `
    <div>
        <H2>H2</H2>
    </div>`
});

export const HeadingH3 = () => ({
    components: { H3 },
    template: `
    <div>
        <H3>H3</H3>
    </div>`
});

export const HeadingH4 = () => ({
    components: { H4 },
    template: `
    <div>
        <H4>H4</H4>
    </div>`
});