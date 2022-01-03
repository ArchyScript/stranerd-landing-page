<template>
  <div class="mt-2 mb-8 flex justify-center items-center">
    <div
      class="input_field_container flex justify-center items-center border mr-4 bg-gray-100 rounded-lg"
    >
      <input
        type="search"
        class="px-2 py-1 text-xs bg-gray-100 focus:outline-none"
        placeholder="Search for anything..."
      />
      <span
        class="fas fa-search text-xs flex items-center cursor-pointer justify-center py-2 px-4 font-xs hover:text-white hover:bg-indigo-600 text-gray-600 bg-gray-100 rounded-lg"
      ></span>
    </div>

    <span
      @click="changeRoutes('/')"
      style="font-size: 0.9rem;"
      class="fa fa-plus hidden sm:flex lg:hidden items-center cursor-pointer text-gray-600 bg-gray-100 justify-center py-2 px-4 font-xs hover:text-white hover:bg-indigo-500 mx-2 rounded-lg"
    ></span>

    <div
      v-for="(topbarBtn, index) in topbarBtns"
      :key="`${topbarBtn}_${index}`"
      class="hidden lg:flex items-center justify-between"
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
.text-xs {
  font-size: 0.9rem;
}
@media (max-width: 364px) {
  .text-xs {
    font-size: 0.8rem;
  }
  .input_field_container {
    max-width: calc(100% - 50px);
    background: transparent;
  }
  .input_field_container > input {
    max-width: 100%;
    margin-left: 10px;
  }
}
@media (max-width: 314px) and (min-width: 270px) {
  .text-xs {
    font-size: 0.75rem;
  }
  .input_field_container {
    max-width: calc(100% - 50px);
  }
  .input_field_container > input {
    max-width: 100%;
    margin-left: 10px;
  }
}
@media (max-width: 269px) and (min-width: 220px) {
  .text-xs {
    font-size: 0.6rem;
  }
  .input_field_container {
    max-width: calc(100% - 40px);
  }
  .input_field_container > input {
    max-width: 100%;
    margin-left: 10px;
  }
}
@media (max-width: 219px) {
  .input_field_container {
    display: none;
  }
}
</style>
