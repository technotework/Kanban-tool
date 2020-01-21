
import { storiesOf } from '@storybook/vue'
import ConfirmationDialogue from './index.vue'

storiesOf('ConfirmationDialogue', module)
    .add('default', () => ({
        components: { ConfirmationDialogue },
        template: `<ConfirmationDialogue  />`
    }))