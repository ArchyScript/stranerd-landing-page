<template>
  <div>
    <div
      v-if="coin_position == 'right'"
      :class="`flex items-center justify-center py-2 px-3 ${bg_color} border border-gray-200 rounded-xl`"
    >
      <span :class="`pr-3 ${text_color} font-bold text-xl`">
        {{ value }}
        <!-- ${coin_type == 'gold' ? 'orange' : 'text-blue-500'} -->
      </span>
      <i :class="`fas fa-coins ${coin_type}`"></i>
    </div>

    <div
      v-if="coin_position == 'left'"
      :class="`flex items-center justify-center py-2 px-3 ${bg_color} border border-gray-200 rounded-xl`"
    >
      <i :class="`fas fa-coins ${coin_type} pr-3`"></i>

      <span :class="`${text_color} font-bold text-xl`">
        {{ value }}
        <!-- ${coin_type == 'gold' ? 'orange' : 'text-blue-500'} -->
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ratings',
  props: {
    value: String || Number,
    coin_type: String,
    bg_color: String,
    text_color: String,
    coin_position: String,
  },
}
</script>

<style scope>
.gold {
  color: gold;
}
.bronze {
  color: #cd7f32;
}
.fas {
  font-size: 1.4rem;
}
</style>
