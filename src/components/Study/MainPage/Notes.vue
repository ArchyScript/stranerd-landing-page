<template>
  <div class="mt-7">
    <div class="flex justify-between items-center mb-2">
      <h1 class="font-semibold text-lg text-gray-700 font-sans">
        Notes
      </h1>

      <CardSlider class="hidden md:flex" />

      <ViewAll route="/study" class="hidden md:flex" />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <div
        v-for="(note, index) in notes"
        :key="`${note}_${index}`"
        :class="`flex flex-col border border-gray-200 rounded-3xl ${
          note.active == 'active' ? 'bg-red-50' : 'bg-blue-50'
        }`"
      >
        <div
          class="w-full h-32 rounded-3xl bg-indigo-300 flex justify-center items-center"
        >
          <span class="font-medium text-blue-50 font-sans text-2xl">
            PREVIEW
          </span>
        </div>

        <div class="p-3">
          <div class="flex justify-between items-center mb-2">
            <div>
              <span class="font-medium text-xs text-gray-700 font-sans">
                {{ note.topic }} -
              </span>

              <span class="font-normal text-xs text-gray-600 font-sans">
                {{ note.sub_topic }}
              </span>
            </div>

            <Coins
              v-if="note.coin.is_available"
              :value="note.coin.value"
              :coin_type="note.coin.coin_type"
              coin_position="right"
              text_color="text-blue-50"
              bg_color="bg-gray-700"
            />
          </div>

          <div class="flex justify-between items-center mt-1">
            <Ratings :value="note.rating" />

            <User :name="note.user.name" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Ratings from '@/components/Reusable/Ratings.vue'
import Coins from '@/components/Reusable/Coins.vue'
import User from '@/components/Reusable/User.vue'
import ViewAll from '@/components/Reusable/ViewAll.vue'
import CardSlider from '@/components/Reusable/CardSlider.vue'

export default {
  name: 'Notes',
  components: {
    Ratings,
    Coins,
    User,
    ViewAll,
    CardSlider,
  },
  data: () => ({
    notes: [
      {
        topic: 'Work and Energy',
        sub_topic: 'Introduction to Unniversity Physics',
        user: { name: 'Daniel' },
        coin: {
          is_available: false,
          value: 46,
          coin_type: 'gold',
          position: 'right',
        },
        active: 'active',
        rating: 4,
      },
      {
        topic: 'Calculus',
        sub_topic: 'Integration and Multivariate Calculus for Year 1',
        user: { name: 'Timmy' },
        coin: {
          is_available: true,
          value: 55,
          coin_type: 'bronze',
          position: 'right',
        },
        active: '',
        rating: 3,
      },
      {
        topic: 'Work and Energy',
        sub_topic: 'Introduction to Unniversity Physics',
        user: { name: 'Derin' },
        coin: {
          is_available: false,
          value: 87,
          coin_type: 'bronze',
          position: 'right',
        },
        active: '',
        rating: 3,
      },
    ],
  }),
}
</script>

<style scoped></style>
