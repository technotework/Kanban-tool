
import { storiesOf } from '@storybook/vue'
import BaseCheckBox from './index.vue'

storiesOf('BaseCheckBox', module)
    .add('default', () => ({
        components: { BaseCheckBox },
        template: `<BaseCheckBox  />`
    }))