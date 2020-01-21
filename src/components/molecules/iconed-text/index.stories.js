
import { storiesOf } from '@storybook/vue'
import IconedText from './index.vue'

storiesOf('IconedText', module)
    .add('default', () => ({
        components: { IconedText },
        template: `<IconedText  />`
    }))