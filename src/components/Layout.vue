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
      <div :class="`sidebar w-12 md:w-16 bg-blue-200 rounded-r-3xl lg:w-52`">
        <Navigation />
      </div>

      <!-- <span
      @click="toggleSidebar"
      class="fa fa-bars text-gray-800 flex mx-auto text-sm cursor-pointer bg-gray-200 hover:bg-white hover:text-black fixed z-30 left-0 rounded-tl-3xl top-0 py-4 px-5 lg:hidden w-16 "
    ></span>  -->

      <!-- ${isSidebarOpen == true ? 'w-16' : 'w-0'}  -->
      <!-- ${isSidebarOpen == true ? 'ml-16' : 'ml-0'} -->

      <div class="bg-white flex-1">
        <ion-vue-router :class="`main_content ml-12 md:ml-16 lg:ml-52`" />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation/Main.vue'

export default {
  name: 'Layout',
  data: () => ({
    isSidebarOpen: true,
  }),
  components: {
    Navigation,
  },
  methods: {
    toggleSidebar() {
      console.log('tesert')
      if (this.isSidebarOpen == true) return (this.isSidebarOpen = false)
      if (this.isSidebarOpen == false) return (this.isSidebarOpen = true)
    },
  },
}
</script>

<style scoped>
/*
@media (max-width: 369px) and (min-width: 50px) {
  .ml-16 {
    margin-left: 40px;
  }
  .w-16 {
    max-width: 30px;
  }
}
@media (max-width: 369px) and (min-width: 50px) {
  .sidebar {
    max-width: 20px;
  }
  .main_content {
    margin-left: 20px;
  }
} */
</style>
