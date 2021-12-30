<template>
  <div>
    <div class="flex items-center justify-center px-3 text-gray-500">
      <span
        style="font-size: 0.9rem;"
        class="fas fa-chevron-left font-semibold cursor-pointer mx-1"
      ></span>
      <!-- <span
        v-for="(card, index) in cards"
        :key="index"
        class="fas fa-circle cursor-pointer text-xs"
      ></span> -->
      <span
        class="fas fa-circle cursor-pointer mx-1 text-blue-600"
        style="font-size: 0.5rem;"
      ></span>
      <span
        class="fas fa-circle cursor-pointer mx-1"
        style="font-size: 0.5rem;"
      ></span>
      <span
        class="fas fa-circle cursor-pointer mx-1"
        style="font-size: 0.5rem;"
      ></span>
      <span
        style="font-size: 0.8rem;"
        class="fas fa-chevron-right font-bold cursor-pointer mx-1"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSlider',
  methods: {},
  props: {
    cards: Number,
  },
}
</script>

<style scoped></style>
