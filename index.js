import 'normalize.css';
import Vue from 'vue/dist/vue.js';
import NpmGuiNav from './components/npm-gui-nav';
import NpmGuiConsole from './components/npm-gui-console';

Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>',
});

new Vue({ // eslint-disable-line
  el: '#npm-gui-vue',
  components: {NpmGuiNav, NpmGuiConsole},
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
