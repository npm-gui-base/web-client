<style scoped lang="sass" rel="stylesheet/scss">
  @import "../../variables.scss";

  $hover-darken: 7%;
  $padding: 10px;

  button {
    border: 0;
    border-radius: $npm-gui-radius;
    color: $npm-gui-color-light;
    font-size: 0.7em;
    font-family: inherit;
    font-weight: 500;
    padding: $padding;
    outline: none;
    transition: background-color 200ms;
    text-transform: uppercase;
    min-width: 34px;

    &.primary {
      background-color: $npm-gui-color-primary;
      &:hover {
        background-color: darken($npm-gui-color-primary, $hover-darken);
      }
      &:active {
        background-color: darken($npm-gui-color-primary, $hover-darken * 2);
      }
      &:disabled {
        background-color: lighten($npm-gui-color-primary, $hover-darken * 2);
      }
    }

    &.dark {
      background-color: $npm-gui-color-dark;
      &:hover {
        background-color: darken($npm-gui-color-dark, $hover-darken);
      }
      &:active {
        background-color: darken($npm-gui-color-dark, $hover-darken * 2);
      }
      &:disabled {
        background-color: lighten($npm-gui-color-dark, $hover-darken * 2);
      }
    }

    &.warning {
      background-color: $npm-gui-color-warning;
      &:hover {
        background-color: darken($npm-gui-color-warning, $hover-darken);
      }
      &:active {
        background-color: darken($npm-gui-color-warning, $hover-darken * 2);
      }
      &:disabled {
        background-color: lighten($npm-gui-color-warning, $hover-darken * 2);
      }
    }

    &.danger {
      background-color: $npm-gui-color-danger;
      &:hover {
        background-color: darken($npm-gui-color-danger, $hover-darken);
      }
      &:active {
        background-color: darken($npm-gui-color-danger, $hover-darken * 2);
      }
      &:disabled {
        background-color: lighten($npm-gui-color-danger, $hover-darken * 2);
      }
    }

    &.success {
      background-color: $npm-gui-color-success;
      &:hover {
        background-color: darken($npm-gui-color-success, $hover-darken);
      }
      &:active {
        background-color: darken($npm-gui-color-success, $hover-darken * 2);
      }
      &:disabled {
        background-color: lighten($npm-gui-color-success, $hover-darken * 2);
      }
    }

    &.info {
      background-color: $npm-gui-color-info;
      &:hover {
        background-color: darken($npm-gui-color-info, $hover-darken);
      }
      &:active {
        background-color: darken($npm-gui-color-info, $hover-darken * 2);
      }
      &:disabled {
        background-color: lighten($npm-gui-color-info, $hover-darken * 2);
      }
    }

    &.small {
      font-size: 0.6em;
      padding: $padding * 0.6;
    }

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    .oi {
      margin-right: 3px;
    }
  }
</style>

<template>
  <button>
    <span></span>
    <span v-if="icon" class="oi" :data-glyph="icon"></span>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: ['icon'],
  }
</script>
