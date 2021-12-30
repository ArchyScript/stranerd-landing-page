<template>
  <div class="mt-10">
    <div class="flex justify-between align-center mb-3">
      <h1 class="font-semibold text-lg text-gray-700 font-sans">Study Tools</h1>

      <CardSlider />

      <ViewAll route="/study" />
    </div>

    <div class="grid grid-cols-3 gap-6">
      <div
        v-for="studyTool in studyTools"
        :key="studyTool"
        class="flex justify-center items-center flex-col border border-gray-200 rounded-3xl bg-blue-50 px-3"
      >
        <span class="block text-center mt-2 mb-1 p-2">
          <i class="fa fa-folder fa-3x text-gray-600"></i>
        </span>

        <span
          class="block text-center mb-1 font-medium text-gray-700 text-sm font-sans"
        >
          Study Tools
        </span>

        <span
          class="block text-center my-1 font-normal text-gray-600 text-xs font-sans"
        >
          This is a description of this current card This is a rent card hwjk
        </span>

        <button
          type="button"
          class="block w-full px-6 py-2 m-3 border border-solid border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Still testing
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ViewAll from '@/components/Reusable/ViewAll.vue'
import CardSlider from '@/components/Reusable/CardSlider.vue'

export default {
  name: 'MyStudy',
  components: {
    ViewAll,
    CardSlider,
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
