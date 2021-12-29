<template>
  <div class="my-4">
    <div class="flex flex-row justify-between items-center mb-2">
      <h1 class="text-gray-500 text-sm font-bold">Challenges</h1>

      <view-all route="/test" />
    </div>

    <div class="flex flex-col mt-1 text-xs text-dark_gray gap-2">
      <div
        v-for="eachChallenge in allChallenges"
        :key="eachChallenge.title"
        class="p-2 mb-1 rounded-lg w-full bg-gray-100 items-center"
      >
        <div class="mb-1 block text-xs items-start">
          <span>{{ eachChallenge.title }}</span>
          <strong class="ml-2">{{ eachChallenge.subject }}</strong>
        </div>

        <div class="w-full bg-gray-400 rounded-lg h-1">
          <div
            class="bg-blue-600 rounded-lg h-1"
            :style="`width: ${eachChallenge.ranking}%;`"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ViewAll from '@/components/Reusable/ViewAll.vue'

export default {
  name: 'Challennges',
  components: { ViewAll },
  data: () => ({
    allChallenges: [
      {
        title: 'Reach the rank of',
        subject: 'Google',
        ranking: 80,
      },
      {
        title: 'Answer 30 questions',
        subject: '',
        ranking: 60,
      },
      {
        title: 'Get 30 best answers',
        subject: '',
        ranking: 40,
      },
      {
        title: '5 days login streak',
        subject: '',
        ranking: 30,
      },
    ],
  }),
}
</script>

<style scoped></style>
