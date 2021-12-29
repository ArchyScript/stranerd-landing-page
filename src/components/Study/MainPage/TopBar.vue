<template>
  <div class="flex justify-center items-center">
    <div class="mb-3 xl:w-100 flex justify-between items-center">
      <div class="flex border rounded-lg">
        <button class="flex items-center justify-center px-4">
          <i class="fas fa-search"></i>
        </button>
        <input type="search" class="px-2 py-1" placeholder="Search..." />
      </div>

      <div class="flex justify-center items-center px-2">
        <div class="flex items-center justify-between">
          <button
            class="px-4 py-1 border border-solid border-gray-400 rounded-lg"
          >
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data: () => ({}),
}
</script>

<style scoped></style>
