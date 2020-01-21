
import { storiesOf } from '@storybook/vue'
import FloatMessage from './index.vue'

storiesOf('FloatMessage', module)
    .add('default', () => ({
        components: { FloatMessage },
        template: `<FloatMessage  />`
    }));