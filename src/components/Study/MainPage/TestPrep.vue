<template>
  <div class="mt-7">
    <div class="flex justify-between items-center mb-2">
      <h1 class="font-semibold text-lg text-gray-700 font-sans">
        Test Prep
      </h1>

      <CardSlider />

      <ViewAll route="/study" />
    </div>

    <div class="grid grid-cols-3 gap-6">
      <div
        v-for="testPrep in testPreps"
        :key="testPrep"
        class="flex flex-col bborder border-gray-200 rounded-3xl bg-blue-50 p-3"
      >
        <div
          class="mt-2 mb-2 block text-gray-700 uppercase font-semibold text-center text-2xl font-sans"
        >
          {{ testPrep.test_type }}
        </div>

        <span
          class="block myy-1 text-gray-700 font-normal text-center text-sm font-sans"
        >
          {{ testPrep.description }}
        </span>

        <div v-if="!testPrep.isFree" class="my-4">
          <div class="flex justify-center items-center mb-3">
            <span class="mr-1 text-sm font-normal text-center">
              Unlock for a month
            </span>
            <Coins
              :value="testPrep.unlock.value"
              :coin_type="testPrep.unlock.coin_type"
              coin_position="right"
            />
          </div>

          <button
            type="button"
            class="block w-full px-6 py-2 mt-1 bg-gray-800 text-blue-50 font-medium text-xs leading-tight uppercase rounded-xl hover:bg-black hover:text-white transition duration-150 ease-in-out"
          >
            Unlock Now
          </button>
        </div>

        <div v-if="testPrep.isFree" class="my-4">
          <button
            type="button"
            class="block w-full px-6 py-2 mb-2 bg-gray-800 text-blue-50 font-medium text-xs leading-tight uppercase rounded-xl hover:bg-black hover:text-white transition duration-150 ease-in-out"
          >
            Test Yourself
          </button>

          <button
            type="button"
            class="block w-full px-6 py-2 mt-1 border border-solid border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded-xl hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            Study Solutions
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Coins from '@/components/Reusable/Coins.vue'
import ViewAll from '@/components/Reusable/ViewAll.vue'
import CardSlider from '@/components/Reusable/CardSlider.vue'

export default {
  name: 'MyStudy',
  components: {
    Coins,
    ViewAll,
    CardSlider,
  },
  data: () => ({
    testPreps: [
      {
        test_type: 'Jamb',
        description:
          'Introduction to Work., Energy and Power dl;ds testig text lkp; ',
        name: 'Daniel',
        unlock: {
          coin_type: 'bronze',
          value: 30,
        },
        isFree: true,
      },
      {
        test_type: 'SAT',
        description:
          'This is a brieft description of electrolysis in chemistry',
        name: 'Timmy',
        unlock: {
          coin_type: 'gold',
          value: 15,
        },
        isFree: false,
      },
      {
        test_type: 'UTME',
        description: 'Nuclear Physic for first year College student',
        name: 'Derin',
        unlock: {
          coin_type: 'gold',
          value: 5,
        },
        isFree: true,
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
