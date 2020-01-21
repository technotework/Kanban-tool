
import { storiesOf } from '@storybook/vue'
import LayoutSpacer from './index.vue'

storiesOf('LayoutSpacer', module)
    .add('default', () => ({
        components: { LayoutSpacer },
        template: `<LayoutSpacer  />`
    }));