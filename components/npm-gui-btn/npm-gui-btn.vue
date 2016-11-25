<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../variables.scss";

  $hover-darken: 7%;
  $padding: 10px;

  @mixin button($name, $color) {
    &.#{$name} {
      background-color: $color;

      &:hover {
        background-color: darken($color, $hover-darken);
      }

      &:active {
        background-color: darken($color, $hover-darken * 2);
      }

      &:disabled {
        background-color: lighten($color, $hover-darken * 2);
      }
    }
  }

  button {
    border: 0;
    border-radius: $npm-gui-radius;
    color: $npm-gui-color-light;
    font-family: inherit;
    font-size: .7em;
    font-weight: 500;
    outline: none;
    padding: $padding;
    text-transform: uppercase;
    transition: background-color 200ms;

    @include button('primary', $npm-gui-color-primary);
    @include button('dark', $npm-gui-color-dark);
    @include button('warning', $npm-gui-color-warning);
    @include button('danger', $npm-gui-color-danger);
    @include button('success', $npm-gui-color-success);
    @include button('info', $npm-gui-color-info);

    &.small {
      font-size: .6em;
      padding: $padding * .6;
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
  <button v-on:click="onClick">
    <span></span>
    <span v-if="icon" class="oi" :data-glyph="icon"></span>
    <slot></slot>
  </button>
</template>

<script lang="babel" type="text/babel">
  export default {
    props: ['icon', 'route'],
    methods: {
      onClick() {
        if (this.route) {
          this.$router.replace(this.route);
        }
      },
    },
  };
</script>
