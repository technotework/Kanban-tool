
import { storiesOf } from '@storybook/vue'
import ColorPalettePicker from './index.vue'

storiesOf('ColorPalettePicker', module)
    .add('default', () => ({
        components: { ColorPalettePicker },
        template: `<ColorPalettePicker  />`
    }))