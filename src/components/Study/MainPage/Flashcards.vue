<template>
  <div class="mt-7">
    <div class="flex justify-between items-center mb-2">
      <h1 class="font-semibold text-lg text-gray-700 font-sans">
        Flashcards
      </h1>

      <CardSlider />

      <ViewAll route="/study" />
    </div>

    <div class="grid grid-cols-3 gap-6">
      <div
        v-for="flashcard in flashcards"
        :key="flashcard"
        class="flex flex-col border border-gray-200 rounded-3xl bg-blue-50 p-2"
      >
        <div class="m-2">
          <span class="font-medium text-xs text-gray-700 font-sans">
            {{ flashcard.subject }} -
          </span>

          <span class="font-normal text-gray-600 text-xs font-sans">
            {{ flashcard.title }}
          </span>
        </div>

        <div class="flex justify-between items-center m-2">
          <Ratings :value="flashcard.rating" />

          <Coins
            v-if="flashcard.coin.is_available"
            :value="flashcard.coin.value"
            :coin_type="flashcard.coin.coin_type"
            coin_position="right"
          />
        </div>

        <div class="flex justify-between m-2">
          <Cards value="3" />

          <User :name="flashcard.user.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Ratings from '@/components/Reusable/Ratings.vue'
import Coins from '@/components/Reusable/Coins.vue'
import Cards from '@/components/Reusable/Cards.vue'
import User from '@/components/Reusable/User.vue'
import ViewAll from '@/components/Reusable/ViewAll.vue'
import CardSlider from '@/components/Reusable/CardSlider.vue'

export default {
  name: 'MyStudy',
  components: {
    Ratings,
    Coins,
    Cards,
    User,
    ViewAll,
    CardSlider,
  },
  data: () => ({
    flashcards: [
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

<style scoped>
.rated {
  color: orange;
}
</style>
