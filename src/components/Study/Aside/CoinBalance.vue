<template>
  <div class="flex justify-between items-center text-xs bg-gray-200 rounded-xl">
    <Coins
      value="10k"
      coin_position="left"
      text_color="text-slate-500"
      coin_type="bronze"
    />

    <span><i class="fa fa-plus text-slate-300"></i></span>

    <Coins
      value="250"
      coin_position="right"
      text_color="text-slate-500"
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
