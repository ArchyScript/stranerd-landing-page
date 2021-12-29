<template>
  <div class="mt-10">
    <div class="flex justify-between align-center mb-3">
      <h1 class="font-semibold text-lg font-sans">Test Prep</h1>

      <ViewAll route="/study" />
    </div>

    <div class="grid grid-cols-3 gap-6">
      <!-- <div
        class="flex flex-col border-4 border-black rounded-3xl bg-blue-50 outline-double px-10"
      >
        <div class="mt-6 mb-2 font-bold text-5xl font-sans">
          SAT
        </div>

        <span class="block mb-2 text-sm font-sans">
          This is a description of this current card This is a description of
          this a a a current card
        </span>

        <div class="mt-5 mb-6">
          <div class="mb-1">
            <span>Unlock testing unlock</span>
            <Ratings value="4" />
          </div>

          <button
            type="button"
            class="block w-full px-6 py-4 bg-gray-600 text-white font-medium mt-4 text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Testing Now
          </button>
        </div>
      </div> -->
      <div
        v-for="testPrep in testPreps"
        :key="testPrep"
        class="flex flex-col bborder border-gray-200 rounded-3xl bg-blue-50 p-3"
      >
        <div
          class="mt-2 mb-2 block uppercase font-bold text-center text-2xl font-sans"
        >
          {{ testPrep.test_type }}
        </div>

        <span class="block myy-1 text-center text-sm font-sans">
          {{ testPrep.description }}
        </span>

        <div class="mt-2 mb-4">
          <button
            type="button"
            class="block w-full px-6 py-2 my-1 border border-solid border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            Still testing
          </button>

          <button
            type="button"
            class="block w-full px-6 py-2 my-1 border border-solid border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            Still testing
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Ratings from '@/components/Reusable/Ratings.vue'
import ViewAll from '@/components/Reusable/ViewAll.vue'
// import CardSlider from '@/components/Reusable/CardSlider.vue'
// import User from '@/components/Reusable/User.vue'

export default {
  name: 'MyStudy',
  components: {
    // Ratings,
    ViewAll,
    // CardSlider,
    // User,
  },
  data: () => ({
    testPreps: [
      {
        test_type: 'Jamb',
        description: 'Introduction to Work., Energy and Power',
        name: 'Daniel',
        rating: 4,
      },
      {
        test_type: 'SAT',
        description:
          'This is a brieft description of electrolysis in chemistry',
        name: 'Timmy',
        rating: 3,
      },
      {
        test_type: 'UTME',
        description: 'Nuclear Physic for first year College student',
        name: 'Derin',
        rating: 3,
      },
    ],
  }),
}
</script>

<style scope>
.rated {
  color: orange;
}
</style>
