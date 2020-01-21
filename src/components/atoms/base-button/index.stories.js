
import { storiesOf } from '@storybook/vue'
import BaseButton from './index.vue'

storiesOf('BaseButton', module)
    .add('default', () => ({
        components: { BaseButton },
        template: `<BaseButton  />`
    }))