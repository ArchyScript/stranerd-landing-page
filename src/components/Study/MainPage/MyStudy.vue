<template>
  <div class="mt-7">
    <div class="flex justify-between items-center mb-2">
      <h1 class="font-semibold text-lg text-gray-700 font-sans">My Study</h1>

      <CardSlider class="hidden md:flex" />

      <ViewAll route="/study" class="hidden md:flex" />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <div
        v-for="(studyCard, index) in myStudyCards"
        :key="`${studyCard}_${index}`"
        :class="`border border-gray-200 rounded-3xl ${
          studyCard.active == 'active' ? 'bg-yellow-100' : 'bg-blue-50'
        } p-2 lg:p-3`"
      >
        <div class="flex justify-center items-center m-2">
          <span
            :class="`${studyCard.icon} hidden xl:flex fa-3x text-gray-600`"
          ></span>
          <span
            :class="`${studyCard.icon} flex xl:hidden fa-2x text-gray-600`"
          ></span>

          <div class="flex-1 ml-2 align-center">
            <div class="block text-gray-700 flex-start font-medium text-xs">
              {{ studyCard.topic }}
            </div>
            <div class="block text-gray-600 text-xs font-normal">
              {{ studyCard.sub_topic }}
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between m-2 mt-3">
          <Ratings :value="studyCard.rating" />

          <User :name="studyCard.name" />
        </div>
      </div>

      <div
        v-for="flashcard in flashcards"
        :key="flashcard"
        class="hidden lg:flex lg:flex-col border border-gray-200 rounded-3xl bg-blue-50 p-2"
      >
        <div class="m-2">
          <span class="font-medium text-xs text-gray-700 font-sans">
            {{ flashcard.subject }} -
          </span>

          <span class="font-normal text-gray-600 text-xs font-sans">
            {{ flashcard.title }}
          </span>
        </div>

        <div class="flex items-center justify-between m-1">
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

        <div class="flex items-center justify-between m-1">
          <Cards :value="flashcard.card.value" />

          <User :name="flashcard.user.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Ratings from '@/components/Reusable/Ratings.vue'
import ViewAll from '@/components/Reusable/ViewAll.vue'
import Coins from '@/components/Reusable/Coins.vue'
import Cards from '@/components/Reusable/Cards.vue'
import CardSlider from '@/components/Reusable/CardSlider.vue'
import User from '@/components/Reusable/User.vue'

export default {
  name: 'MyStudy',
  components: {
    Ratings,
    Cards,
    Coins,
    ViewAll,
    CardSlider,
    User,
  },
  data: () => ({
    myStudyCards: [
      {
        icon: 'fa fa-home',
        topic: 'Work and Energy',
        sub_topic: 'Introduction to University Physics',
        name: 'Daniel',
        subject: 'Physics',
        active: 'active',
        rating: 4,
      },
      {
        icon: 'fa fa-folder',
        topic: 'Electrolysis',
        sub_topic: 'Integration and Multivariate Calculus for Year 1',
        name: 'Timmy',
        subject: 'Chemistry',
        active: '',
        rating: 3,
      },
    ],
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
    ],
  }),
}
</script>

<style scoped></style>
