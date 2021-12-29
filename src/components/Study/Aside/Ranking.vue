<template>
  <div class="my-12">
    <div class="flex flex-row justify-between items-center mb-2">
      <h2 class="text-gray-500 text-sm font-bold">Rankings</h2>

      <div
        class="flex flex-row items-center text-sm py-0 pr-5 rounded-lg bg-gray-200"
      >
        <ion-select
          value="notifications"
          class="w-full text-xs placeholder-black font-medium"
          placeholder="Search Subjeect"
        >
          <ion-select-option value="phy" class="text-xs">
            Physics
          </ion-select-option>
          <ion-select-option value="chm" class="text-xs">
            Chemistry
          </ion-select-option>
          <ion-select-option value="bio" class="text-xs">
            Biology
          </ion-select-option>
          <ion-select-option value="geo" class="text-xs">
            Geography
          </ion-select-option>
          <ion-select-option value="mth" class="text-xs">
            Mathematics
          </ion-select-option>
          <ion-select-option value="fin" class="text-xs">
            Finance
          </ion-select-option>
        </ion-select>
      </div>
    </div>

    <div class="flex flex-col items-center mt-2 text-sm text-dark_gray gap-2">
      <div
        v-for="ranking in rankings"
        :key="ranking.name"
        class="p-2 mb-1 rounded-lg flex w-full bg-blue-50 flex-row items-center"
      >
        <span class="font-semibold mr-2">{{ ranking.point }}</span>
        <span>{{ ranking.name }}</span>
        <div class="flex flex-row-reverse items-center flex-grow">
          <span class="text-primary font-semibold">{{ ranking.ranking }}</span>
        </div>
      </div>

      <div
        class="p-3 rounded-xl cursor-pointer flex w-full bg-blue-500 text-white justify-center flex-row items-center"
      >
        <span class="font-semibold">Leaderboard</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ranking',
  data: () => ({
    rankings: [
      {
        name: 'Jerry Maguire',
        point: 120,
        ranking: 12,
      },
      {
        name: 'Larry Page',
        point: 132,
        ranking: 17,
      },
      {
        name: 'ArchyScript',
        point: 142,
        ranking: 14,
      },
      {
        name: 'John Doe',
        point: 117,
        ranking: 21,
      },
      {
        name: 'Elon Musk',
        point: 214,
        ranking: 88,
      },
    ],
  }),
}
</script>

<style scoped></style>
