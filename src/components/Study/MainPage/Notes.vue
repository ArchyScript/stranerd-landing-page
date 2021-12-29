<template>
  <div class="mt-10">
    <div class="flex justify-between align-center mb-3">
      <h1 class="font-bold text-2xl font-sans">Notes</h1>

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
      <div class="bg-blue-50 border-4 border-black rounded-3xl p-4">
        <div class="m-2">
          <span class="font-bold text-xl font-sans">
            Physics - First year physics for ... student ... akdjkdla
            ljlaedjdhdladk
          </span>
        </div>

        <div class="flex justify-between m-2 mt-4">
          <Ratings value="3" />

          <Ratings value="3" />
        </div>

        <div class="flex justify-between m-2 mt-4">
          <Ratings value="3" />

          <Ratings value="3" />
        </div>
      </div>
      <div class="bg-blue-50 border-4 border-black rounded-3xl p-4">
        <div class="m-2">
          <span class="font-bold text-xl font-sans">Physics</span>
          -
          <span>
            First year physics for ... student ... akdjkdla ljlaedjdhdladk
          </span>
        </div>

        <div class="flex justify-between m-2 mt-4">
          <Ratings value="3" />

          <Cards />
        </div>

        <div class="flex justify-between items-center m-2 mt-4">
          <Cards value="70" />

          <User name="Daniel" />
        </div>

        <div class="flex justify-between items-center m-2 mt-4">
          <Ratings value="4" />

          <Coins
            value="10k"
            coin_type="bronze"
            text_color="text-blue-50"
            bg_color="bg-green-800"
            coin_position="right"
          />
        </div>

        <div class="flex justify-between items-center m-2 mt-4">
          <Ratings value="4" />

          <Coins
            value="90"
            coin_type="gold"
            text_color="text-blue-50"
            bg_color="bg-green-800"
            coin_position="left"
          />
        </div>
      </div>
      <div class="bg-blue-50 border-4 border-black rounded-3xl p-4">
        <div class="m-2">
          <span class="font-bold text-xl font-sans">Physics</span>
          -
          <span>
            First year physics for ... student ... akdjkdla ljlaedjdhdladk
          </span>
        </div>

        <div class="flex justify-between m-2 mt-4">
          <Ratings value="3" />

          <Ratings value="3" />
        </div>

        <div class="flex justify-between m-2 mt-4">
          <Ratings value="3" />

          <Ratings value="3" />
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

export default {
  name: 'MyStudy',
  components: {
    Ratings,
    Coins,
    Cards,
    User,
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
