<template>
  <div class="flex rela tive min-h-screen">
    <div class="w-56 md:relative bg-blue-200 rounded-r-3xl">
      <Navigation />
    </div>

    <div class="bg-white">
      <ion-vue-router class="ml-56 md:ml-0 overflow-y-scroll" />
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation/Main.vue'

export default {
  name: 'Layout',
  data: () => ({}),
  components: {
    Navigation,
  },
}
</script>

<style scoped></style>
