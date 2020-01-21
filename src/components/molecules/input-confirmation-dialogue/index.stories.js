
import { storiesOf } from '@storybook/vue'
import InputConfirmationDialogue from './index.vue'

storiesOf('InputConfirmationDialogue', module)
    .add('default', () => ({
        components: { InputConfirmationDialogue },
        template: `<InputConfirmationDialogue  />`
    }))