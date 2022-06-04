<template>
  <button @click="$emit('click')" :class="classes">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    bordered: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    gray: {
        type: Boolean,
        default: false
    },
    small: {
        type: Boolean,
        default: false
    }
  },
  computed: {
    classes() {
      return [
        {
          "bg-transparent text-white py-2 px-8 rounded-lg": true,
          "px-4 text-sm": this.small,
          "bg-green-500 text-white hover:bg-green-600": this.primary,
          "border-[1px] bg-transparent border-white hover:bg-transparent": this.bordered,
          "bg-transparent border text-white": this.secondary,
          "bg-gray-200 text-gray-900 hover:bg-gray-300 font-bold": this.gray,
        },
      ];
    },
  },
};
</script>
