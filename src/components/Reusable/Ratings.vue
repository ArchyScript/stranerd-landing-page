<template>
  <div v-if="value <= 5" class="flex justify-center items-center text-gray-600">
    <span :class="`fa fa-star text-xs ${value > 0 ? 'rated' : ''}`"></span>
    <span :class="`fa fa-star text-xs ${value > 1 ? 'rated' : ''}`"></span>
    <span :class="`fa fa-star text-xs ${value > 2 ? 'rated' : ''}`"></span>
    <span :class="`fa fa-star text-xs ${value > 3 ? 'rated' : ''}`"></span>
    <span :class="`fa fa-star text-xs ${value > 4 ? 'rated' : ''}`"></span>
  </div>
</template>

<script>
export default {
  name: 'Ratings',
  props: {
    value: Number,
  },
}
</script>

<style scoped>
.rated {
  color: orange;
}
</style>
