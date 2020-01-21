
import { storiesOf } from '@storybook/vue'
import BaseMarkdownContainer from './index.vue'

storiesOf('BaseMarkdownContainer', module)
    .add('default', () => ({
        components: { BaseMarkdownContainer },
        template: `<BaseMarkdownContainer  />`
    }));