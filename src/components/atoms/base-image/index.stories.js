
import { storiesOf } from '@storybook/vue'
import BaseImage from './index.vue'

storiesOf('BaseImage', module)
    .add('default', () => ({
        components: { BaseImage },
        template: `<BaseImage  />`
    }));