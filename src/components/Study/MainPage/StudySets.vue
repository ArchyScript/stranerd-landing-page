<template>
  <div class="mt-10">
    <div class="flex justify-between align-center mb-3">
      <h1 class="bold">My Study</h1>

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
      <div class="rounded bg-blue-50 outline-double p-4">
        <div class="flex justify-around m-2">
          <div class="h-20 w-20 rounded bg-red-200 mr-1"></div>
          <div class="mx-2 align-center">
            <div class="block self-start font-bold">Work and Energy</div>
            <div class="block self-start">
              Introduction to University Physics
            </div>
          </div>
        </div>

        <div class="flex justify-between m-2 mt-4">
          <Ratings value="3" />

          <div class="flex justify-center align-center">
            <span>Timmy</span>
            <span class="fa fa-user-circle mx-1 outline"></span>
          </div>
        </div>
      </div>
      <div class="rounded bg-blue-50 outline-double p-4">
        <div class="flex justify-around m-2">
          <div class="h-20 w-20 rounded bg-red-200 mr-1"></div>
          <div class="mx-2 align-center">
            <div class="block self-start font-bold">Work and Energy</div>
            <div class="block self-start">
              Introduction to University Physics
            </div>
          </div>
        </div>

        <div class="flex justify-between m-2 mt-4 border-2">
          <Ratings value="4" />

          <div class="flex justify-center align-center">
            <span>Timmy</span>
            <span class="fa fa-user mx-1 outline"></span>
          </div>
        </div>
      </div>
      <div class="rounded bg-blue-50 outline-double p-4">
        <div class="flex justify-around m-2">
          <div class="h-20 w-20 rounded bg-red-200 mr-1"></div>
          <div class="mx-2 align-center">
            <div class="block self-start font-bold">Work and Energy</div>
            <div class="block self-start">
              Introduction to University Physics
            </div>
          </div>
        </div>

        <div class="flex justify-between m-2 mt-4">
          <Ratings value="4" />

          <div class="flex justify-center align-center">
            <span>Timmy</span>
            <span class="fa fa-user mx-1 outline"></span>
          </div>
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
