<template>
  <div class="w-12 md:w-16 lg:w-52 text-black transform py-3 lg:py-6 relative">
    <div class="mt-4 mb-6 justify-center items-center hidden lg:flex">
      <img src="@/assets/stranerd_logo.svg" alt="stranerd logo" class="h-5" />
    </div>

    <!-- Menu Bar -->
    <!-- <span
      @click="toggleSidebarBoolean == !toggleSidebarBoolean"
      class="fa fa-bars text-gray-800 flex mx-auto text-sm cursor-pointer bg-gray-200 hover:bg-white hover:text-black fixed right-0 rounded-tr-3xl top-0 py-4 px-5 lg:hidden w-full"
    ></span> -->

    <!-- vertical spacinng on smaller screen-->
    <div class="mt-6 lg:my-0"></div>

    <div
      v-for="eachSidebarListAndRoute in allSidebarListAndRoutes"
      :key="eachSidebarListAndRoute.title"
    >
      <div
        @click="changeRoutes(eachSidebarListAndRoute)"
        :class="`nav_item flex items-center  cursor-pointer select-none ${
          eachSidebarListAndRoute.active ? 'active' : ''
        } p-3  hover:bg-white font-normal text-xs ml-1 md:ml-3 mb-1 lg:ml-10 rounded-l-3xl`"
        :title="eachSidebarListAndRoute.title"
      >
        <span
          :class="`${eachSidebarListAndRoute.icon} ml-1 lg:ml-2 lg:mr-4`"
        ></span>
        <span class="hidden lg:flex">{{ eachSidebarListAndRoute.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data: () => ({
    allSidebarListAndRoutes: [
      {
        title: 'Home',
        icon: 'fa fa-home',
        route: '/',
        active: true,
      },
      {
        title: 'Questions',
        icon: 'fa fa-question',
        route: '/questions',
        active: false,
      },
      {
        title: 'Study',
        icon: 'fa fa-bar-chart',
        route: '/study',
        active: false,
      },
      {
        title: 'Tutors',
        icon: 'fa fa-users',
        route: '/tutors',
        active: false,
      },
      {
        title: 'Schedules',
        icon: 'fa fa-calendar',
        route: '/schedules',
        active: false,
      },
      {
        title: 'Wallet',
        icon: 'fa fa-credit-card',
        route: '/wallet',
        active: false,
      },
    ],
    //
  }),
  methods: {
    changeRoutes(clickedNavLink) {
      this.allSidebarListAndRoutes.forEach((navItem) => {
        return (navItem.active = false)
      })

      clickedNavLink.active = true
      this.$router.push(clickedNavLink.route)
    },
  },
}
</script>

<style scoped>
.active {
  background-color: rgba(255, 255, 255);
  color: #333333;
}
</style>
