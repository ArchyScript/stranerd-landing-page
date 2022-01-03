<template>
  <div class="mt-7">
    <div class="flex justify-between items-center mb-2">
      <h1 class="font-semibold text-lg text-gray-700 font-sans">
        Study Sets
      </h1>

      <CardSlider class="hidden md:flex" />

      <ViewAll route="/study" class="hidden md:flex" />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <div
        v-for="(studySet, index) in studySets"
        :key="`${studySet}_${index}`"
        :class="`border border-gray-200 rounded-3xl ${
          studySet.active == 'active' ? 'bg-red-50' : 'bg-blue-50'
        } p-3`"
      >
        <div class="flex justify-center items-center m-2">
          <span
            :class="`fa fa-archive hidden xl:flex fa-3x text-gray-600`"
          ></span>
          <span
            :class="`fa fa-archive flex xl:hidden fa-2x text-gray-600`"
          ></span>

          <div class="flex-1 ml-2 align-center">
            <span class="font-medium text-xs text-gray-700 font-sans">
              {{ studySet.title }} -
            </span>

            <span class="font-medium text-xs text-gray-600 font-sans">
              {{ studySet.sub_topic }}
            </span>

            <span
              class="font-medium text-xs md:text-sm uppercase text-gray-700 font-sans"
            >
              - {{ studySet.school }}
            </span>
          </div>
        </div>

        <div class="flex justify-between items-center m-2 mt-4">
          <MultipleCards
            :video="studySet.multiple_cards.video"
            :flashcard="studySet.multiple_cards.flashcard"
            :note="studySet.multiple_cards.note"
          />

          <Coins
            v-if="studySet.coin.is_available"
            :value="studySet.coin.value"
            :coin_type="studySet.coin.coin_type"
            coin_position="right"
            text_color="text-blue-50"
            bg_color="bg-gray-700"
          />
        </div>

        <div class="flex justify-between m-2 mt-4">
          <Ratings :value="studySet.rating" />

          <User :name="studySet.user.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Ratings from '@/components/Reusable/Ratings.vue'
import ViewAll from '@/components/Reusable/ViewAll.vue'
import Coins from '@/components/Reusable/Coins.vue'
import CardSlider from '@/components/Reusable/CardSlider.vue'
import User from '@/components/Reusable/User.vue'
import MultipleCards from '@/components/Reusable/MultipleCards.vue'

export default {
  name: 'StudySets',
  components: {
    Ratings,
    ViewAll,
    MultipleCards,
    Coins,
    CardSlider,
    User,
  },
  data: () => ({
    studySets: [
      {
        title: 'PQ',
        sub_topic: 'Compiled Resources fro 100l CEG',
        user: { name: 'Derin' },
        school: 'Unilag',
        multiple_cards: {
          flashcard: 'flashcard',
          note: 'note',
          video: 'video',
        },
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
        title: 'WAEC Physics',
        sub_topic: 'All you need for A1',
        user: { name: 'Derin' },
        school: 'OAU',
        multiple_cards: {
          flashcard: 'flashcard',
          note: 'note',
          video: '',
        },
        coin: {
          is_available: true,
          value: 46,
          coin_type: 'bronze',
          position: 'right',
        },
        active: '',
        rating: 3,
      },
      {
        title: 'Organized MEG notes',
        sub_topic: '100l to 500l',
        user: { name: 'Derin' },
        school: 'Unilag',
        multiple_cards: {
          flashcard: '',
          note: 'note',
          video: '',
        },
        coin: {
          is_available: false,
          value: 46,
          coin_type: 'gold',
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
