<template>
  <div class="flex items-center justify-center text-gray-600">
    <span class="pr-1 font-medium text-xs">
      {{ name }}
    </span>

    <span style="font-size: 1.1rem;" class="fa fa-user-circle"></span>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    name: {
      type: String,
      default: 'Timmy',
    },
  },
}
</script>

<style scoped></style>
