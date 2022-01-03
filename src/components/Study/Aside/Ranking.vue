<template>
  <div class="my-6">
    <div class="flex flex-row justify-between items-center mb-2">
      <h2 class="text-gray-700 text-sm font-semibold">Rankings</h2>

      <div
        class="flex flex-row items-center text-xs py-0 pr-2 rounded-xl bg-gray-200"
      >
        <ion-select
          value="notifications"
          class="w-full text-xs placeholder-black font-normal"
          placeholder="Daily"
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

    <div class="flex flex-col items-center mt-2 text-xs gap-2">
      <div
        v-for="ranking in rankings"
        :key="ranking.name"
        class="p-2 mb-1 rounded-lg flex w-full cursor-pointer bg-gray-100 hover:text-blue-50 hover:bg-gray-500 flex-row items-center"
      >
        <span class="font-semibold mr-2">{{ ranking.point }}</span>
        <span class="text-medium">{{ ranking.name }}</span>
        <div class="flex flex-row-reverse items-center flex-grow">
          <span class="text-primary font-semibold">{{ ranking.ranking }}</span>
        </div>
      </div>

      <div
        class="p-2 rounded-xl cursor-pointer flex w-full hover:bg-blue-800 bg-blue-500 text-white justify-center flex-row items-center"
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
        name: 'Elo n Musk',
        point: 214,
        ranking: 88,
      },
    ],
  }),
}
</script>

<style scoped></style>
