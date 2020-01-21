
import { storiesOf } from '@storybook/vue'
import LabeledInput from './index.vue'

storiesOf('LabeledInput', module)
    .add('default', () => ({
        components: { LabeledInput },
        template: `<LabeledInput  />`
    }));