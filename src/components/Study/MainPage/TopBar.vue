<template>
  <div class="mt-2 mb-8 w-full flex justify-center items-center">
    <div
      class="flex justify-center items-center border mr-4 bg-gray-100 rounded-lg"
    >
      <input
        type="search"
        class="px-4 py-1 text-sm bg-gray-100 focu:outline-none"
        placeholder="Search for  anything..."
      />
      <span
        style="font-size: 0.9rem;"
        class="fas fa-search flex items-center cursor-pointer justify-center py-2 px-4 font-xs hover:text-white hover:bg-indigo-600 text-gray-600 bg-gray-100 rounded-lg"
      ></span>
    </div>

    <div
      v-for="topbarBtn in topbarBtns"
      :key="topbarBtn"
      class="flex items-center justify-between"
    >
      <span
        @click="changeRoutes(topbarBtn.route)"
        style="font-size: 0.9rem;"
        :class="`${
          topbarBtn.icon
        } flex items-center cursor-pointer justify-center py-2 px-4 font-xs hover:text-white ${
          topbarBtn.is_active == true ? 'active' : 'text-gray-600 bg-gray-100'
        } hover:bg-indigo-500  mx-2 rounded-lg`"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data: () => ({
    topbarBtns: [
      {
        icon: 'fa fa-plus',
        is_active: true,
        route: '/',
      },
      {
        icon: 'fa fa-bell',
        is_active: false,
        route: '/',
      },
      {
        icon: 'fa fa-graduation-cap',
        is_active: false,
        route: '/',
      },
      {
        icon: 'fa fa-comment',
        is_active: false,
        route: '/',
      },
      {
        icon: 'fa fa-user-circle',
        is_active: false,
        route: '/',
      },
    ],
  }),
  methods: {
    changeRoutes(route) {
      this.$router.push(route)
    },
  },
}
</script>

<style scoped>
.active {
  background: rgba(99, 102, 241, 1);
  color: white;
}
</style>
