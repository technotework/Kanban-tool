
import { storiesOf } from '@storybook/vue'
import BothSideRight from './index.vue'

storiesOf('BothSideRight', module)
    .add('default', () => ({
        components: { BothSideRight },
        template: `<BothSideRight  />`
    }))