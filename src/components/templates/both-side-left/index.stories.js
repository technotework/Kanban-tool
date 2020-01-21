
import { storiesOf } from '@storybook/vue'
import BothSideLeft from './index.vue'

storiesOf('BothSideLeft', module)
    .add('default', () => ({
        components: { BothSideLeft },
        template: `<BothSideLeft  />`
    }));