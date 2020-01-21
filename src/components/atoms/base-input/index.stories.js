
import { storiesOf } from '@storybook/vue'
import BaseInput from './index.vue'

storiesOf('BaseInput', module)
    .add('default', () => ({
        components: { BaseInput },
        template: `<BaseInput  />`
    }))