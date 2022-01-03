<template>
  <div class="mt-7">
    <div class="flex justify-between items-center mb-2">
      <h1 class="font-semibold text-lg text-gray-700 font-sans">
        Flashcards
      </h1>

      <CardSlider class="hidden md:flex" />

      <ViewAll route="/study" class="hidden md:flex" />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <div
        v-for="(flashcard, index) in flashcards"
        :key="`${flashcard}_${index}`"
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
            text_color="text-blue-50"
            bg_color="bg-gray-700"
          />
        </div>

        <div class="flex justify-between m-2">
          <Cards :value="flashcard.card.value" />

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
  name: 'Flashcards',
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
        title: 'Waves and Sound (100l 1st semester exam)',
        user: { name: 'Daniel' },
        card: {
          value: 50,
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
        subject: 'Physics',
        title: 'Waves and Sound (100l 1st semester exam)',
        user: { name: 'Timmy' },
        card: {
          value: 50,
        },
        coin: {
          is_available: true,
          value: 55,
          coin_type: 'bronze',
          position: 'right',
        },
        rating: 3,
      },
      {
        subject: 'Physics',
        title: 'Waves and Sound (100l 1st semester exam)',
        user: { name: 'Derin' },
        card: {
          value: 50,
        },
        coin: {
          is_available: false,
          value: 60,
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
