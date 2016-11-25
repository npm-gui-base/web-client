<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../variables.scss";

  .dependencies {
    @include flexbox();
    @include flex-direction(column);
    @include flex();
  }

  .table-container {
    border: 1px solid $npm-gui-color-gray;
    border-radius: $npm-gui-radius;
    margin-bottom: $npm-gui-gutter / 2;
    margin-top: $npm-gui-gutter / 2;
    overflow: auto;

    @include flex();
  }

  table {
    border-collapse: collapse;
    color: $npm-gui-color-dark-deep;
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
    font-size: .8em;
    width: 100%;

    tr:hover {
      background: $npm-gui-color-gray-light;
    }

    td,
    th {
      border-bottom: 1px solid $npm-gui-color-gray;
      padding: .5em;
      text-align: left;

      &:last-child {
        border-right: 0;
      }
    }
  }

  iframe {
    border: 0;
    height: 50px;
  }

  .right {
    float: right;
  }

  .label {
    border-radius: $npm-gui-radius;
    color: $npm-gui-color-light;
    float: right;
    font-size: .8em;
    font-weight: bold;
    padding: .2em .4em;

    &--danger {
      background: $npm-gui-color-danger;
    }

    &--warning {
      background: $npm-gui-color-warning;
    }
  }

  .column {
    &-action {
      width: 10em;
    }

    &-nsp {
      width: 8em;
    }

    &-version {
      width: 15%;
    }
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
    <div class="table-container">
      <table>
        <tr>
          <th>Name</th>
          <th>Version</th>
          <th>NSP</th>
          <th>Installed</th>
          <th>Wanted</th>
          <th>Latest</th>
          <th>Action</th>
        </tr>
        <tr v-for="dependency in dependencies">
          <td>
            {{ dependency.key }}
            <span class="label label--warning" v-if="dependency.repo === 'bower'">Bower</span>
            <span class="label label--danger" v-if="dependency.repo === 'npm'">npm</span>
          </td>
          <td class="column-version">{{ dependency.version }}</td>
          <td class="column-nsp">-</td>
          <td class="column-version">{{ dependency.installed }}</td>
          <td class="column-version">{{ dependency.wanted }}</td>
          <td class="column-version">{{ dependency.latest }}</td>
          <td class="column-action">
            <npm-gui-btn icon="trash" class="danger"></npm-gui-btn>
            <npm-gui-btn icon="lock-locked" class="primary"></npm-gui-btn>
            <npm-gui-btn icon="external-link" class="warning"></npm-gui-btn>
          </td>
        </tr>
      </table>
    </div>
    <iframe src="http://www.forkcode.com/npm-gui/0.3.2.html"></iframe>
  </div>
</template>

<script>
  import axios from 'axios';

  import NpmGuiBtn from '../npm-gui-btn';

  export default {
    components: {
      NpmGuiBtn,
    },
    data() {
      return {
        loading: false,
        error: null,
        dependencies: {},
      };
    },
    created() {
      this.loadDependencies();
    },
    methods: {
      loadDependencies() {
        this.loading = true;
        axios
          .get(`/api/${this.$route.meta.api}`)
          .then((response) => {
            this.loading = false;
            this.error = null;
            this.dependencies = response.data;
          })
          .catch((error) => {
            this.loading = false;
            this.error = error;
          });
      },
    },
  };
</script>
