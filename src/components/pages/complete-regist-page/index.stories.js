
import { storiesOf } from '@storybook/vue'
import CompleteRegistPage from './index.vue'

storiesOf('CompleteRegistPage', module)
    .add('default', () => ({
        components: { CompleteRegistPage },
        template: `<CompleteRegistPage  />`
    }))