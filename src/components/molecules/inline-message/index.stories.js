
import { storiesOf } from '@storybook/vue'
import InlineMessage from './index.vue'

storiesOf('InlineMessage', module)
    .add('default', () => ({
        components: { InlineMessage },
        template: `<InlineMessage  />`
    }))