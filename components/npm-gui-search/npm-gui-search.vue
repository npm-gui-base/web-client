<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../variables";

  .npm-gui-search {
    border: 1px solid $npm-gui-color-light;
    border-radius: $npm-gui-radius;
    background: $npm-gui-color-light;
    overflow: hidden;
    position: absolute;
    max-width: 120px;
    margin-top: -7.5px;
    margin-left: -7.5px;
    padding: 7.5px;
    max-height: 32px;
    transition: max-width 300ms, max-height 300ms;

    &--open {
      border-color: $npm-gui-color-gray;
      max-height: 100%;
      max-width: 100%;
    }

    form {
      margin-top: 6px;
      margin-bottom: 6px;
    }

    input {
      width: 7em;
      display: inline-block;
    }
    select {
      width: 7em;
      display: inline-block;
    }
  }
</style>

<template>
  <div
    class="npm-gui-search"
    v-bind:class="{'npm-gui-search--open': isOpen}"
  >
    <npm-gui-btn
      class="primary small"
      icon="plus"
      @click="toggle"
    >Search / Add
    </npm-gui-btn>
    <form action="">
      <select name="" id="">
        <option value="">npm</option>
        <option value="">bower</option>
      </select>
      <input type="text">
    </form>
    <table>
      <tr>
        <th>name</th>
        <th>github</th>
        <th>action</th>
      </tr>
      <tr>
        <td>angular</td>
        <td><a href="https://github.com/angular/angular.js" target="_blank">show repo</a></td>
        <td>
          <npm-gui-btn class="info small">install</npm-gui-btn>
        </td>
      </tr>
      <tr>
        <td>angular</td>
        <td><a href="https://github.com/angular/angular.js" target="_blank">show repo</a></td>
        <td>
          <npm-gui-btn class="info small">install</npm-gui-btn>
        </td>
      </tr>
      <tr>
        <td>angular</td>
        <td><a href="https://github.com/angular/angular.js" target="_blank">show repo</a></td>
        <td>
          <npm-gui-btn class="info small">install</npm-gui-btn>
        </td>
      </tr>
      <tr>
        <td>angular</td>
        <td><a href="https://github.com/angular/angular.js" target="_blank">show repo</a></td>
        <td>
          <npm-gui-btn class="info small">install</npm-gui-btn>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import NpmGuiBtn from '../npm-gui-btn';

  export default {
    components: {
      NpmGuiBtn,
    },
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen;
      },
    },
  };
</script>
