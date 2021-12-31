<template>
  <div class="mt-7">
    <div class="flex justify-between items-center mb-2">
      <h1 class="font-semibold text-lg text-gray-700 font-sans">
        Study Tools
      </h1>

      <CardSlider class="hidden md:flex" />

      <ViewAll route="/study" class="hidden md:flex" />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <div
        v-for="studyTool in studyTools"
        :key="studyTool"
        class="flex justify-center items-center flex-col border border-gray-200 rounded-3xl bg-blue-50 px-3"
      >
        <div class="flex justify-center items-center">
          <span
            :class="`hidden xl:flex text-center mt-2 mb-1 p-1 ${studyTool.icon} fa-3x text-gray-600`"
          ></span>
          <span
            :class="`block xl:hidden text-center mt-2 mb-1 p-1 ${studyTool.icon} fa-2x text-gray-600`"
          ></span>
        </div>

        <span
          class="block text-center mb-1 font-medium text-gray-700 text-xs lg:text-sm font-sans"
        >
          {{ studyTool.title }}
        </span>

        <span
          class="block text-center my-1 font-normal text-gray-600 text-xs font-sans"
        >
          {{ studyTool.sub_title }}
        </span>

        <button
          type="button"
          class="block w-full px-6 py-2 m-3 border border-solid border-gray-800 text-gray-800 font-medium text-xs leading-tight rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          {{ studyTool.btn_text }}
        </button>
      </div>
      <!-- <div
        v-for="studyTool in studyTools"
        :key="studyTool"
        class="flex justify-center items-center flex-col border border-gray-200 rounded-3xl bg-blue-50 px-3"
      >
        <span
          :class="`block text-center mt-2 mb-1 p-1 ${studyTool.icon} fa-2x text-gray-600`"
        ></span>

        <span
          class="block text-center mb-1 font-medium text-gray-700 text-sm font-sans"
        >
          {{ studyTool.title }}
        </span>

        <span
          class="block text-center my-1 font-normal text-gray-600 text-xs font-sans"
        >
          {{ studyTool.sub_title }}
        </span>

        <button
          type="button"
          class="block w-full px-6 py-2 m-3 border border-solid border-gray-800 text-gray-800 font-medium text-xs leading-tight rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          {{ studyTool.btn_text }}
        </button>
      </div> -->
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
        icon: 'fa fa-paste',
        title: 'Study With Flashcards',
        sub_title:
          'Scientifically proven to improve memory and make studying easier',
        btn_text: 'Create a Flashcard',
      },
      {
        icon: 'fa fa-archive',
        title: 'Organize your Study',
        sub_title:
          'Put flashcards, notes and videos with the same aim together in a folder',
        btn_text: 'Create a Study Set',
      },
      {
        icon: 'fa fa-crosshairs',
        title: 'Find more Resources',
        sub_title:
          'Browse through a library of flashcards, notes, videos and sets to study with',
        btn_text: 'Explore',
      },
    ],
  }),
}
</script>

<style scoped></style>
