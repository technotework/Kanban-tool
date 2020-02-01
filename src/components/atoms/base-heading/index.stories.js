import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import BaseHeading from "./index.vue";

export default {
    title: "atoms/BaseHeading",
    component: { BaseHeading },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: `
        h1: heading="lv1"  
        h2: heading="lv2"  
        h3: heading="lv3"  
        h4: heading="lv4"        
        `,
    }
};

export const H1 = () => ({
    components: { BaseHeading },
    template: `
    <div>
    
        <BaseHeading heading="lv1">H1</BaseHeading>
    
    </div>`
});

export const H2 = () => ({
    components: { BaseHeading },
    template: `
    <div>
    
        <BaseHeading heading="lv2">H2</BaseHeading>
    
    </div>`
});

export const H3 = () => ({
    components: { BaseHeading },
    template: `
    <div>
    
        <BaseHeading heading="lv3">H3</BaseHeading>
    
    </div>`
});

export const H4 = () => ({
    components: { BaseHeading },
    template: `
    <div>
    
        <BaseHeading heading="lv4">H4</BaseHeading>
    
    </div>`
});