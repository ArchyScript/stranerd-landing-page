<template>
  <div class="flex flex-col">
    <!-- <div
      class="bg-black py-6 w-full text-white flex justify-between items-center"
    >
      <div class="mt-4 mb-6 flex justify-center items-center">
        <img src="@/assets/stranerd_logo.svg" alt="stranerd logo" class="h-5" />
      </div>

      <span class="fa fa-home fa-2x text-white"></span>
    </div> -->

    <div class="flex min-h-screen">
      <div class="w-16 bg-blue-200 rounded-r-3xl lg:w-52">
        <Navigation />
      </div>

      <div class="bg-white flex-1">
        <ion-vue-router class="ml-16 lg:ml-52" />
      </div>
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
