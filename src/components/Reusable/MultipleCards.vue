<template>
  <div class="flex justify-center items-center text-gray-600">
    <span
      style="font-size: 0.8rem;"
      v-if="flashcard == 'flashcard'"
      class="fa fa-paste text-xs pr-2"
    ></span>
    <span
      style="font-size: 0.8rem;"
      v-if="note == 'note'"
      class="fa fa-file-text text-xs pr-2"
    ></span>
    <span
      style="font-size: 0.8rem;"
      v-if="video == 'video'"
      class="fab fa-youtube text-xs pr-2"
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
