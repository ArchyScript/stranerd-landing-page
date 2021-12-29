<template>
  <div class="mt-10">
    <div class="flex justify-between align-center mb-3">
      <h1 class="font-bold text-2xl font-sans">Test Prep</h1>

      <div class="flex justify-center align-center">
        <span class="fa fa-chevron-left mx-1 outline"></span>
        ...
        <span class="fa fa-chevron-right mx-1 outline"></span>
      </div>

      <div class="flex justify-center align-center">
        <span class="to-blue-600 self-center mr-2">view all</span>
        <span class="fa fa-chevron-right mx-1 outline"></span>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-6">
      <div
        class="flex flex-col border-4 border-black rounded-3xl bg-blue-50 outline-double px-10"
      >
        <div class="mt-6 mb-2 font-bold text-5xl font-sans">
          JAMB
        </div>

        <span class="block mb-2 text-sm font-sans">
          This is a description of this current card This is a description of
          this a a a current card
        </span>

        <div class="mt-5 mb-6">
          <button
            type="button"
            class="block w-full px-6 py-2.5 mb-1 bg-gray-600 text-white font-medium mt-4 text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Testing Now
          </button>

          <button
            type="button"
            class="block w-full px-6 py-4 bg-gray-600 text-white font-medium mt-4 text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Testing Now
          </button>
        </div>
      </div>
      <div
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
      </div>
      <div
        class="flex flex-col border-4 border-black rounded-3xl bg-blue-50 outline-double px-10"
      >
        <div class="mt-6 mb-2 font-bold text-5xl font-sans">
          UTME
        </div>

        <span class="block mb-2 text-sm font-sans">
          This is a description of this current card This is a description of
          this a a a current card
        </span>

        <div class="mt-5 mb-6">
          <button
            type="button"
            class="block w-full px-6 py-2.5 mb-1 bg-gray-600 text-white font-medium mt-4 text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Testing Now
          </button>

          <button
            type="button"
            class="block w-full px-6 py-4 bg-gray-600 text-white font-medium mt-4 text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Testing Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Ratings from '@/components/Reusable/Ratings.vue'

export default {
  name: 'MyStudy',
  components: {
    Ratings,
  },
  data: () => ({
    message: "Test Message testing meddious'jd'hc'dv;avha ifbfieeorerrerherhe",
  }),
}
</script>

<style scope>
.rated {
  color: orange;
}
</style>
