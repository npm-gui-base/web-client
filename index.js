import 'normalize.css';
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import './base.scss';
import NpmGuiNav from './components/npm-gui-nav';
import NpmGuiConsole from './components/npm-gui-console';

import routes from './components/routes';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  // mode: 'history',
  routes,
});

new Vue({ // eslint-disable-line
  el: '#npm-gui-vue',
  components: {
    NpmGuiNav,
    NpmGuiConsole,
  },
  router,
});
