<template>
  <div class="mt-7">
    <div class="flex justify-between items-center mb-2">
      <h1 class="font-semibold text-lg text-gray-700 font-sans">
        Videos
      </h1>

      <CardSlider class="hidden md:flex" />

      <ViewAll route="/study" class="hidden md:flex" />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <div
        v-for="(video, index) in videos"
        :key="`${video}_${index}`"
        class="flex flex-col border border-gray-200 rounded-3xl bg-blue-50"
      >
        <div
          class="w-full h-32 rounded-3xl bg-indigo-400 flex justify-center items-center"
        >
          <iframe
            class="h-full w-full rounded-3xl"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
          ></iframe>
        </div>

        <div class="p-3">
          <div class="flex justify-between items-center mb-2">
            <div>
              <span class="font-medium text-xs text-gray-700 font-sans">
                {{ video.topic }} -
              </span>

              <span class="font-normal text-xs text-gray-600 font-sans">
                {{ video.sub_topic }} - Video
              </span>
            </div>

            <Coins
              v-if="video.coin.is_available"
              :value="video.coin.value"
              :coin_type="video.coin.coin_type"
              coin_position="right"
              text_color="text-blue-50"
              bg_color="bg-gray-700"
            />
          </div>

          <div class="flex justify-between items-center mt-1">
            <Ratings :value="video.rating" />

            <User :name="video.user.name" />
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
  name: 'MyStudy',
  components: {
    Ratings,
    Coins,
    User,
    ViewAll,
    CardSlider,
  },
  data: () => ({
    videos: [
      {
        topic: 'Work and Energy',
        sub_topic: 'Introduction to Unniversity Physics',
        user: { name: 'Daniel' },
        src: 'https://www.youtube.com/watch?v=mf2rvZ7Uv4s',
        coin: {
          is_available: false,
          value: 46,
          coin_type: 'gold',
          position: 'right',
        },
        rating: 4,
      },
      {
        topic: 'Work and Energy',
        sub_topic: 'Introduction to Unniversity Physics',
        user: { name: 'Dray' },
        src: 'https://www.youtube.com/watch?v=aN1a_J33P0E',
        coin: {
          is_available: true,
          value: 55,
          coin_type: 'bronze',
          position: 'right',
        },
        rating: 3,
      },
      {
        topic: 'Work and Energy',
        sub_topic: 'Introduction to Unniversity Physics',
        user: { name: 'Derin' },
        src: 'https://www.youtube.com/watch?v=8t13uQYHeX4',
        coin: {
          is_available: false,
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

<style scope></style>
