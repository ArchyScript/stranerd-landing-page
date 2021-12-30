<template>
  <div class="flex justify-center items-center">
    <span
      v-if="flashcard == 'flashcard'"
      class="fa fa-star text-xs pr-2"
    ></span>
    <span v-if="document == 'document'" class="fa fa-file text-xs pr-2"></span>
    <span v-if="video == 'video'" class="fa fa-folder text-xs pr-2"></span>
  </div>
</template>

<script>
export default {
  name: 'MultipleCards',
  props: {
    flashcard: String,
    document: String,
    video: String,
  },
}
</script>

<style scope>
.rated {
  color: orange;
}
</style>
