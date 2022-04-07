<template>
    <div
    class="
      flex
      bg-gray-200
      items-center
      justify-between
      p-4
      rounded-md
      border-gray-700
      border-[1px]
    "
  >
    <div class=""><slot></slot></div>
  </div>
</template>

<script>
export default {
    name: "Sticker",
}
</script>