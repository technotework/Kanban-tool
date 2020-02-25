import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import Vue plugins
import Vuex from 'vuex';

// Install Vue plugins.
Vue.use(Vuex);
import store from "@/store/index"

// Register global components.
configure(require.context('../src', true, /\.stories\.js$/), module);