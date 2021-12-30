<template>
  <div class="md:f lex flex rela tive min-h-screen">
    <div class="w-56 bg-blue-200 rounded-r-3xl">
      <Navigation />
    </div>

    <div class="bg-white flex-1">
      <ion-vue-router class="ml-56" />
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
  methods: {
    toggleSidebar: () => {
      console.log('test')
    },
  },
}
</script>

<style scoped></style>
