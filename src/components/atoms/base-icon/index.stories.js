
import { storiesOf } from '@storybook/vue'
import BaseIcon from './index.vue'

storiesOf('BaseIcon', module)
    .add('default', () => ({
        components: { BaseIcon },
        template: `<BaseIcon  />`
    }))