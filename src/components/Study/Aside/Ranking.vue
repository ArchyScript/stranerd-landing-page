<template>
  <div class="my-12">
    <div class="flex flex-row justify-between items-center mb-5">
      <h2 class="text-dark_gray text-base font-bold">Rankings</h2>

      <div
        class="flex flex-row items-center text-sm py-0 pr-5 rounded-lg bg-gray-200"
      >
        <ion-select
          value="notifications"
          class="w-full text-xs md:text-sm placeholder-[#8B9EB1] font-semibold"
          placeholder="Filter by subject"
          interface="action-sheet"
        >
          <ion-select-option value="maths" class="text-sm">
            Mathematics
          </ion-select-option>
          <ion-select-option value="physics" class="text-sm">
            Physics
          </ion-select-option>
          <ion-select-option value="bio" class="text-sm">
            Biology
          </ion-select-option>
          <ion-select-option value="geo" class="text-sm">
            Geography
          </ion-select-option>
          <ion-select-option value="business" class="text-sm">
            Business
          </ion-select-option>
          <ion-select-option value="civil" class="text-sm">
            Test me
          </ion-select-option>
        </ion-select>
      </div>
    </div>

    <div class="flex flex-col items-center mt-3 text-sm text-dark_gray gap-2">
      <div
        class="p-4 mb-1 rounded-lg flex w-full bg-gray-100 flex-row items-center"
      >
        <span class="font-semibold mr-2">122</span>
        <span>Jerry Maguire</span>
        <div class="flex flex-row-reverse items-center flex-grow">
          <span class="text-primary font-semibold">14</span>
        </div>
      </div>
      <div
        class="p-4 mb-1 rounded-lg flex w-full bg-gray-100 flex-row items-center"
      >
        <span class="font-semibold mr-2">122</span>
        <span>Jerry Maguire</span>
        <div class="flex flex-row-reverse items-center flex-grow">
          <span class="text-primary font-semibold">14</span>
        </div>
      </div>
      <div
        class="p-4 mb-1 rounded-lg flex w-full bg-blue-50 flex-row items-center"
      >
        <span class="font-semibold mr-2">121</span>
        <span>Jerry Maguire</span>
        <div class="flex flex-row-reverse items-center flex-grow">
          <span class="text-primary font-semibold">14</span>
        </div>
      </div>
      <div
        class="p-4 mb-1 rounded-lg flex w-full bg-gray-100 flex-row items-center"
      >
        <span class="font-semibold mr-2">122</span>
        <span>Jerry Maguire</span>
        <div class="flex flex-row-reverse items-center flex-grow">
          <span class="text-primary font-semibold">14</span>
        </div>
      </div>

      <div
        class="p-4 rounded-lg flex w-full bg-blue-700 text-white justify-center flex-row items-center"
      >
        <span class="font-semibold">Leaderboard</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'challennges',
  data: () => ({
    message: 'Test Ratings',
  }),
}
</script>

<style scoped></style>
