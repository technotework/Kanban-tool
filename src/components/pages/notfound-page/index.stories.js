
import { storiesOf } from '@storybook/vue'
import NotfoundPage from './index.vue'

storiesOf('NotfoundPage', module)
    .add('default', () => ({
        components: { NotfoundPage },
        template: `<NotfoundPage  />`
    }));