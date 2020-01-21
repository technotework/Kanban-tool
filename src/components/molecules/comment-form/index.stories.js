
import { storiesOf } from '@storybook/vue'
import CommentForm from './index.vue'

storiesOf('CommentForm', module)
    .add('default', () => ({
        components: { CommentForm },
        template: `<CommentForm  />`
    }));