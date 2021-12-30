<template>
  <div class="mt-10">
    <div class="flex justify-between align-center mb-3">
      <h1 class="font-semibold text-lg font-sans">Study Sets</h1>

      <!-- <CardSlider /> -->

      <ViewAll route="/study" />
    </div>

    <div class="grid grid-cols-3 gap-3">
      <div
        v-for="studySet in studySets"
        :key="studySet"
        :class="`border border-gray-200 rounded-3xl ${
          studySet.active == 'active' ? 'bg-red-50' : 'bg-blue-50'
        } p-3`"
      >
        <div class="flex m-2">
          <span><i class="fa fa-folder fa-3x"></i></span>

          <div class="flex-1 ml-2 align-center">
            <div class="block flex-start font-semibold text-xs">
              {{ studySet.topic }}
            </div>
            <div class="block text-xs font-medium">
              {{ studySet.sub_topic }}
            </div>
          </div>
        </div>

        <div class="flex justify-between items-center m-2 mt-4">
          <MultipleCards
            :video="studySet.multiple_cards.video"
            :flashcard="studySet.multiple_cards.flashcard"
            :document="studySet.multiple_cards.document"
          />

          <Coins
            v-if="studySet.coin.is_available"
            :value="studySet.coin.value"
            :coin_type="studySet.coin.coin_type"
            coin_position="right"
          />
        </div>

        <div class="flex justify-between m-2 mt-4">
          <Ratings :value="studySet.rating" />

          <User :name="studySet.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Ratings from '@/components/Reusable/Ratings.vue'
import ViewAll from '@/components/Reusable/ViewAll.vue'
import Coins from '@/components/Reusable/Coins.vue'
// import CardSlider from '@/components/Reusable/CardSlider.vue'
import User from '@/components/Reusable/User.vue'
import MultipleCards from '@/components/Reusable/MultipleCards.vue'

export default {
  name: 'MyStudy',
  components: {
    Ratings,
    ViewAll,
    MultipleCards,
    Coins,
    // CardSlider,
    User,
  },
  data: () => ({
    studySets: [
      {
        topic: 'Work and Energy',
        sub_topic: 'Introduction to Work., Energy and Power',
        name: 'Daniel',
        subject: 'Physics',
        multiple_cards: {
          flashcard: 'flashcard',
          document: 'document',
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
        topic: 'Electrolysis',
        sub_topic: 'This is a brieft description of electrolysis in chemistry',
        name: 'Tola',
        subject: 'Chemistry',
        multiple_cards: {
          flashcard: 'flashcard',
          document: 'doc ument',
          video: 'video',
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
      {
        topic: 'Nuclear Bomb',
        sub_topic: 'Nuclear Physic for first year College student',
        name: 'Derin',
        subject: 'Physics',
        multiple_cards: {
          flashcard: 'flashcard',
          document: 'document',
          video: 'video',
        },
        coin: {
          is_available: true,
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

<style scope></style>
