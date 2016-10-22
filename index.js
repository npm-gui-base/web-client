import 'normalize.css';
import Vue from 'vue/dist/vue.js';

import './base.scss';
import NpmGuiNav from './components/npm-gui-nav';
import NpmGuiConsole from './components/npm-gui-console';
import NpmGuiDependencies from './components/npm-gui-dependencies';

Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
});

new Vue({ // eslint-disable-line
  el: '#npm-gui-vue',
  components: {NpmGuiNav, NpmGuiConsole, NpmGuiDependencies},
  data: {
    todos: [
      {
        text: 'Learn JavaScript',
      },
      {
        text: 'Learn Vue',
      },
      {
        text: 'Build something awesome',
      },
    ],
  },
});
