<template>
  <div
    class="
      flex
      bg-gray-200
      items-center
      justify-between
      p-4
      rounded-md
      border-2
    "
  >
    <div class=""><slot></slot></div>
    <a class="">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAnElEQVRIie2VSw6DMAwFB+7QCC5Y7guoSPQw6caRgFapP7DjbcmbIUg2cMeRJ5AcvSTdagYgA5NRkoBZukPt4AMY5eAC9Er4tOl0/woWiRlukbjhGkkYXpOcBv8lWQV6GnwreQk4A28tvA1Im0B3l+MnKjfRzokaXoCeYVTDNc/C8LDEUjRLPG9l6pR1PWNf12W6q+saLv7h3PnKB/1VUtVNViCxAAAAAElFTkSuQmCC"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "Notification",
};
</script>
