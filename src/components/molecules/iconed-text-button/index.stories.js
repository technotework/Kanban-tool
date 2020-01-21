
import { storiesOf } from '@storybook/vue'
import IconedTextButton from './index.vue'

storiesOf('IconedTextButton', module)
    .add('default', () => ({
        components: { IconedTextButton },
        template: `<IconedTextButton  />`
    }))