<template>
  <div class="mt-7">
    <div class="flex justify-between items-center mb-2">
      <h1 class="font-semibold text-lg text-gray-700 font-sans">My Study</h1>

      <CardSlider />

      <ViewAll route="/study" />
    </div>

    <div class="grid grid-cols-3 gap-3">
      <div
        v-for="studyCard in myStudyCards"
        :key="studyCard"
        class="border border-gray-200 rounded-3xl bg-blue-50 p-3"
      >
        <div class="flex m-2">
          <span><i class="fa fa-folder fa-3x text-gray-600"></i></span>

          <div class="flex-1 ml-2 align-center">
            <div class="block text-gray-700 flex-start font-medium text-xs">
              {{ studyCard.topic }}
            </div>
            <div class="block text-gray-600 text-xs font-normal">
              {{ studyCard.sub_topic }}
            </div>
          </div>
        </div>

        <div class="flex justify-between m-2 mt-4">
          <Ratings :value="studyCard.rating" />

          <User :name="studyCard.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Ratings from '@/components/Reusable/Ratings.vue'
import ViewAll from '@/components/Reusable/ViewAll.vue'
import CardSlider from '@/components/Reusable/CardSlider.vue'
import User from '@/components/Reusable/User.vue'

export default {
  name: 'MyStudy',
  components: {
    Ratings,
    ViewAll,
    CardSlider,
    User,
  },
  data: () => ({
    myStudyCards: [
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
