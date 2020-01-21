
import { storiesOf } from '@storybook/vue'
import BaseLinkButton from './index.vue'

storiesOf('BaseLinkButton', module)
    .add('default', () => ({
        components: { BaseLinkButton },
        template: `<BaseLinkButton  />`
    }));