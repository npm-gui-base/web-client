<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../variables.scss";

  .console {
    @include flexbox();
    @include flex-direction(column);
    @include flex();
  }

  pre {
    border: 1px solid $npm-gui-color-gray;
    border-radius: $npm-gui-radius;
    color: $npm-gui-color-gray-deep;
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
    font-size: .8em;
    margin-bottom: 0;
    margin-top: $npm-gui-gutter / 2;
    overflow: auto;
    padding: $npm-gui-gutter / 4;
    word-break: break-all;
    word-wrap: break-word;

    @include flex();
  }

  .right {
    float: right;
  }
</style>

<template>
  <div class="console">
    <header>
      <div class="right">
        <npm-gui-btn class="danger small" icon="delete">Clear</npm-gui-btn>
      </div>
    </header>
    <pre><p>sef asefas keygf aksjeg fkasjgefkas e</p></pre>
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
        msg: 'Hello world!',
      };
    },
  };
</script>
