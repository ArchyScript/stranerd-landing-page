<template>
  <div class="mt-7">
    <div class="flex justify-between items-center mb-2">
      <h1 class="font-semibold text-lg text-gray-700 font-sans">
        Notes
      </h1>

      <CardSlider />

      <ViewAll route="/study" />
    </div>

    <div class="grid grid-cols-3 gap-6">
      <div
        v-for="note in notes"
        :key="note"
        class="flex flex-col border border-gray-200 rounded-3xl bg-blue-50"
      >
        <div
          class="w-full h-32 rounded-3xl bg-indigo-400 flex justify-center items-center"
        >
          <span class="font-medium text-gray-700 font-sans text-2xl">
            PREVIEW
          </span>
        </div>

        <div class="p-3">
          <div class="flex justify-between items-center mb-2">
            <div>
              <span class="font-bold text-sm font-sans">
                {{ note.subject }} -
              </span>

              <span class="font-medium text-xs font-sans">
                {{ note.title }}
              </span>
            </div>

            <Coins
              v-if="note.coin.is_available"
              :value="note.coin.value"
              :coin_type="note.coin.coin_type"
              coin_position="right"
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
        subject: 'Physics',
        title: 'Introduction to Work., Energy and Power',
        user: { name: 'Daniel' },
        card: {
          value: '',
          teshhh: '',
        },
        coin: {
          is_available: false,
          value: 46,
          coin_type: 'gold',
          position: 'right',
        },
        rating: 4,
      },
      {
        subject: 'Chemistry',
        title: 'This is a brieft description of chemistry',
        user: { name: 'Timmy' },
        card: {
          value: '',
          teshhh: '',
        },
        coin: {
          is_available: true,
          value: 55,
          coin_type: 'gold',
          position: 'right',
        },
        rating: 3,
      },
      {
        subject: 'Geography',
        title: 'Nuclear Physic for first year College student',
        user: { name: 'Derin' },
        card: {
          value: '',
          teshhh: '',
        },
        coin: {
          is_available: true,
          value: 87,
          coin_type: 'gold',
          position: 'right',
        },
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
