
import { storiesOf } from '@storybook/vue'
import InputCheckbox from './index.vue'

storiesOf('InputCheckbox', module)
    .add('default', () => ({
        components: { InputCheckbox },
        template: `<InputCheckbox  />`
    }))