<template>
  <div class="flex justify-between items-center text-xs bg-gray-200 rounded-xl">
    <Coins
      value="10k"
      coin_position="left"
      text_color="text-gray-700"
      coin_type="bronze"
    />

    <span class="fa fa-plus text-gray-700"></span>

    <Coins
      value="250"
      coin_position="right"
      text_color="text-gray-700"
      coin_type="gold"
    />
  </div>
</template>

<script>
import Coins from '@/components/Reusable/Coins.vue'

export default {
  name: 'CoinBalance',
  data: () => ({}),
  components: {
    Coins,
  },
}
</script>

<style scoped></style>
