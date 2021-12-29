<template>
  <div
    :class="`flex items-center justify-center p-2 ${bg_color} border border-gray-200 rounded`"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-10 w-10 pr-2"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
      />
      <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
    </svg>

    <span :class="`pr-2 ${text_color} font-bold`">
      {{ value }}
    </span>
    cards
  </div>
</template>

<script>
export default {
  name: 'Cards',
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style scope>
.gold {
  color: orange;
}
.bronze {
  color: orangered;
}
.fas {
  font-size: 1.4rem;
}
</style>
