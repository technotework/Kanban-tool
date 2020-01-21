
import { storiesOf } from '@storybook/vue'
import CompleteRegistTempPage from './index.vue'

storiesOf('CompleteRegistTempPage', module)
    .add('default', () => ({
        components: { CompleteRegistTempPage },
        template: `<CompleteRegistTempPage  />`
    }))