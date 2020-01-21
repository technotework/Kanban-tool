
import { storiesOf } from '@storybook/vue'
import BaseModelessContainer from './index.vue'

storiesOf('BaseModelessContainer', module)
    .add('default', () => ({
        components: { BaseModelessContainer },
        template: `<BaseModelessContainer  />`
    }))