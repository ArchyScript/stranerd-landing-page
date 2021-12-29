<template>
  <ion-grid>
    <ion-row>
      <ion-col size="9">
        videos ion-col 9
      </ion-col>

      <ion-col size="3">
        ion-col 3
        <span class="underline">Test me</span>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
// import { add } from "ionicons/icons";
// import { addIcons } from "ionicons";

// addIcons({
//   "ios-add": add.ios,
//   "md-add": add.md
// });

export default {
  name: 'Videos',
  data: () => ({
    message: 'Test Message',
  }),
}
</script>

<style scoped></style>
