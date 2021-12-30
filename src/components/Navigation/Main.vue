<template>
  <div class="w-56 text-black py-6">
    <div class="mt-4 mb-6 flex justify-center items-center">
      <img src="@/assets/stranerd_logo.svg" alt="stranerd logo" class="h-5" />
    </div>

    <div
      v-for="eachSidebarListAndRoute in allSidebarListAndRoutes"
      :key="eachSidebarListAndRoute.title"
    >
      <div
        @click="changeRoutes(eachSidebarListAndRoute)"
        :class="`nav_item flex items-center cursor-pointer select-none ${
          eachSidebarListAndRoute.active ? 'active' : ''
        } p-3 hover:bg-white font-medium text-sm mb-1 ml-10 rounded-l-3xl`"
      >
        <i :class="`${eachSidebarListAndRoute.icon} ml-2 mr-4`"></i>
        <span class="">{{ eachSidebarListAndRoute.title }}</span>
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
