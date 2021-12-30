<template>
  <div>
    <div
      class="flex items-center justify-center cursor-pointer py-2 px-3 text-blue-500 text-xs"
      @click="changeRoutes(route)"
    >
      <span class="pr-1 font-medium">view all</span>
      <span
        style="font-size: 0.8rem;"
        class="fas fa-chevron-right font-bold cursor-pointer px-1"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewAll',
  props: {
    route: {
      type: String,
      default: '/',
    },
  },
  methods: {
    changeRoutes(route) {
      this.$router.push(route)
    },
  },
}
</script>

<style scoped>
.fas {
  font-size: 0.6rem;
}
</style>
