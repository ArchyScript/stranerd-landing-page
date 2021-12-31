<template>
  <div class="flex justify-center items-center text-gray-600">
    <span
      style="font-size: 1.1rem;"
      v-if="flashcard == 'flashcard'"
      class="fa fa-paste pr-2"
    ></span>
    <span
      style="font-size: 1.1rem;"
      v-if="note == 'note'"
      class="fa fa-file-text pr-2"
    ></span>
    <span
      style="font-size: 1.1rem;"
      v-if="video == 'video'"
      class="fab fa-youtube pr-2"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'MultipleCards',
  props: {
    flashcard: String,
    note: String,
    video: String,
  },
}
</script>

<style scoped></style>
