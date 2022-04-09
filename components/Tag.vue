<template>
  <button>
    <nuxt-link
      to="/"
      class="flex bg-gray-50 hover:text-gray-600 hover:border-gray-600 text-gray-500 border-[1px] border-gray-400 px-3 text-[11px] justify-center items-center py-[1px] rounded-full"
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