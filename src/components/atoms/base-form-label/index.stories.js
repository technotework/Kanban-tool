
import { storiesOf } from '@storybook/vue'
import BaseFormLabel from './index.vue'

storiesOf('BaseFormLabel', module)
    .add('default', () => ({
        components: { BaseFormLabel },
        template: `<BaseFormLabel  />`
    }))