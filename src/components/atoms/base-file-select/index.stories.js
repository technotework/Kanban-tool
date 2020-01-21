
import { storiesOf } from '@storybook/vue'
import BaseFileSelect from './index.vue'

storiesOf('BaseFileSelect', module)
    .add('default', () => ({
        components: { BaseFileSelect },
        template: `<BaseFileSelect  />`
    }));