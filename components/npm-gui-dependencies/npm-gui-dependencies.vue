<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../variables.scss";

  .dependencies {
    @include flexbox();
    @include flex-direction(column);
    @include flex();
  }

  pre {
    border: 1px solid $npm-gui-color-gray;
    border-radius: $npm-gui-radius;
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
    color: $npm-gui-color-gray-deep;
    padding: $npm-gui-gutter / 4;
    overflow: auto;
    margin-top: $npm-gui-gutter / 2;
    margin-bottom: $npm-gui-gutter / 2;
    @include flex();
  }

  iframe {
    height: 50px;
    border: 0;
  }

  .right {
    float: right;
  }
</style>

<template>
  <div class="dependencies">
    <header>
      <npm-gui-btn class="primary small" icon="reload">Refresh</npm-gui-btn>
      <div class="right">
        <npm-gui-btn
          class="info small"
          icon="fork"
          title="Searches the local package tree and attempts to simplify the overall structure by moving dependencies further up the tree, where they can be more effectively shared by multiple dependent packages."
        >Dedupe
        </npm-gui-btn>
        <npm-gui-btn
          class="info small"
          icon="list"
          title="This command removes 'extraneous' packages."
        >Prune
        </npm-gui-btn>
        <npm-gui-btn
          class="info small"
          icon="lock-locked"
          disabled
        >Lock All
        </npm-gui-btn>
        <npm-gui-btn
          class="info small"
          icon="lock-unlocked"
          disabled
        >Unlock All
        </npm-gui-btn>
        <npm-gui-btn
          class="danger small"
        >All To Target
        </npm-gui-btn>
        <npm-gui-btn
          class="danger small"
        >All To Latest
        </npm-gui-btn>
        <npm-gui-btn
          class="danger small"
          icon="loop-circular"
        >Re/Install All
        </npm-gui-btn>
      </div>
    </header>
    <pre>asd</pre>
    <iframe src="http://www.forkcode.com/npm-gui/0.3.2.html"></iframe>
  </div>
</template>

<script>
  import NpmGuiBtn from '../npm-gui-btn';

  export default {
    components: {
      NpmGuiBtn,
    },
  };
</script>
