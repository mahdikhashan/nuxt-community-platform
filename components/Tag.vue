<template>
  <button>
    <nuxt-link
      to="/"
      class="flex gap-4 bg-gray-200 hover:text-gray-600 hover:border-gray-600 text-gray-500 border-[1px] border-gray-400 px-3 text-xs justify-center items-center py-1 rounded-full shadow-xl"
    >
      <div>
        <slot></slot>
      </div>
    </nuxt-link>
  </button>
</template>

<script>
export default {
  name: 'Tag',
}
</script>