<template>
  <div class="mt-10">
    <div class="flex justify-between align-center mb-3">
      <h1 class="font-semibold text-lg font-sans">Study Tools</h1>

      <!-- <CardSlider /> -->

      <ViewAll route="/study" />
    </div>

    <div class="grid grid-cols-3 gap-6">
      <div
        v-for="studyTool in studyTools"
        :key="studyTool"
        class="flex justify-center items-center flex-col border border-gray-200 rounded-3xl bg-blue-50 px-3"
      >
        <div class="flex justify-center items-center mt-2 mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
            />
            <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
          </svg>
        </div>

        <span class="block mb-1 font-bold text-sm font-sans">Study Tools</span>

        <span class="flex justify-center items-center mb-1 text-xs font-sans">
          This is a description of this current card This is a rent card
        </span>

        <button
          type="button"
          class="block px-6 py-2 m-4 border border-solid border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Still testing
        </button>

        <!-- <button
          type="button"
          class="px-6 py-1 bg-transparent outline-2xl o border border-solid border-gray-800 text-gray-500 font-semibold mt-4 text-xs leading-tight uppercase rounded-lg mb-4 hover:bg-gray-500 hover:text-white ftransition duration-150 ease-in-out"
        >
          Testing Now
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
import ViewAll from '@/components/Reusable/ViewAll.vue'
// import CardSlider from '@/components/Reusable/CardSlider.vue'

export default {
  name: 'MyStudy',
  components: {
    ViewAll,
    // CardSlider,
  },
  data: () => ({
    studyTools: [
      {
        topic: 'Work and Energy',
        sub_topic: 'Introduction to Work., Energy and Power',
        name: 'Daniel',
        subject: 'Physics',
        rating: 4,
      },
      {
        topic: 'Electrolysis',
        sub_topic: 'This is a brieft description of electrolysis in chemistry',
        name: 'Timmy',
        subject: 'Chemistry',
        rating: 3,
      },
      {
        topic: 'Nuclear Physics',
        sub_topic: 'Nuclear Physic for first year College student',
        name: 'Derin',
        subject: 'Physics',
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
