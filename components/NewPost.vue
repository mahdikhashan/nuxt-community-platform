<template>
  <button
    class="flex gap-4 bg-green-500 hover:bg-green-600 px-6 text-white justify-center items-center py-3 rounded-full shadow-xl"
  >
    <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true">
      <title>New Post</title>
      <path
        d="M8,0A1,1,0,0,1,9,1V7h6a1,1,0,0,1,.993.883L16,8a1,1,0,0,1-1,1H9v6a1,1,0,0,1-.883.993L8,16a1,1,0,0,1-1-1V9H1a1,1,0,0,1-.993-.883L0,8A1,1,0,0,1,1,7H7V1A1,1,0,0,1,7.883.006Z"
        fill="currentColor"
      />
    </svg>
    <pre class="font-semibold">New Post</pre>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
  }
}
</script>