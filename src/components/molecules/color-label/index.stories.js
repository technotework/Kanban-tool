
import { storiesOf } from '@storybook/vue'
import ColorLabel from './index.vue'

storiesOf('ColorLabel', module)
    .add('default', () => ({
        components: { ColorLabel },
        template: `<ColorLabel  />`
    }))