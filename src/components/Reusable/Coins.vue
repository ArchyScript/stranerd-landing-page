<template>
  <div>
    <div
      v-if="coin_position == 'right'"
      :class="`flex items-center justify-center px-2 py-1 ${bg_color} rounded-lg`"
    >
      <span :class="`pr-2 ${text_color} font-medium text-xs`">
        {{ value }}
      </span>
      <span
        style="font-size: 1.1rem;"
        :class="`fas fa-coins ${coin_type}`"
      ></span>
    </div>

    <div
      v-if="coin_position == 'left'"
      :class="`flex items-center justify-center px-2 py-1 ${bg_color} rounded-lg`"
    >
      <span
        style="font-size: 1.1rem;"
        :class="`fas fa-coins ${coin_type} pr-2`"
      ></span>

      <span :class="`${text_color} font-medium text-sm`">
        {{ value }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ratings',
  props: {
    value: Number,
    coin_type: String,
    bg_color: String,
    text_color: String,
    coin_position: String,
  },
}
</script>

<style scope>
.gold {
  color: #fee103;
}
.bronze {
  color: #cd7f32;
}
</style>
