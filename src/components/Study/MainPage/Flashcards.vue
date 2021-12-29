<template>
  <div class="mt-10">
    <div class="flex justify-between align-center mb-3">
      <h1 class="font-bold text-2xl font-sans">Flashcards</h1>

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
      <div class="bg-blue-50 border-4 border-black rounded-3xl p-4">
        <div class="m-2">
          <span class="font-bold text-xl font-sans">
            Physics - First year physics for ... student ... akdjkdla
            ljlaedjdhdladk
          </span>
        </div>

        <div class="flex justify-between m-2 mt-4">
          <Ratings value="3" />

          <Ratings value="3" />
        </div>

        <div class="flex justify-between m-2 mt-4">
          <Ratings value="3" />

          <Ratings value="3" />
        </div>
      </div>
      <div class="bg-blue-50 border-4 border-black rounded-3xl p-4">
        <div class="m-2">
          <span class="font-bold text-xl font-sans">Physics</span>
          -
          <span>
            First year physics for ... student ... akdjkdla ljlaedjdhdladk
          </span>
        </div>

        <div class="flex justify-between m-2 mt-4">
          <Ratings value="3" />

          <Ratings value="3" />
        </div>

        <div class="flex justify-between m-2 mt-4">
          <Ratings value="3" />

          <Ratings value="3" />
        </div>
      </div>
      <div class="bg-blue-50 border-4 border-black rounded-3xl p-4">
        <div class="m-2">
          <span class="font-bold text-xl font-sans">Physics</span>
          -
          <span>
            First year physics for ... student ... akdjkdla ljlaedjdhdladk
          </span>
        </div>

        <div class="flex justify-between m-2 mt-4">
          <Ratings value="3" />

          <Ratings value="3" />
        </div>

        <div class="flex justify-between m-2 mt-4">
          <Ratings value="3" />

          <Ratings value="3" />
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
