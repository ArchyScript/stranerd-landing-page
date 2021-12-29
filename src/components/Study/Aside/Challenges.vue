<template>
  <div class="my-12">
    <div class="flex flex-row justify-between items-center mb-5">
      <h1 class="text-gray-800 text-base font-bold">Challenges</h1>

      <view-all route="/test" />
    </div>

    <div class="flex flex-col mt-3 text-sm text-dark_gray gap-2">
      <div
        v-for="eachChallenge in allChallenges"
        :key="eachChallenge.title"
        class="p-3 mb-1 rounded-lg w-full bg-gray-100 items-center"
      >
        <div class="mb-2 block text-lg items-start">
          <span>{{ eachChallenge.title }}</span>
          <strong>{{ eachChallenge.subject }}</strong>
        </div>

        <div class="w-full bg-gray-400 h-2 rounded-xl">
          <div
            class="bg-blue-600 h-2"
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
  name: 'challennges',
  components: { ViewAll },
  data: () => ({
    message: 'Test Ratings',
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
