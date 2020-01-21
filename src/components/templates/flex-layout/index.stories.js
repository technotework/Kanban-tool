
import { storiesOf } from '@storybook/vue'
import FlexLayout from './index.vue'

storiesOf('FlexLayout', module)
    .add('default', () => ({
        components: { FlexLayout },
        template: `<FlexLayout  />`
    }))