<template>
  <div class="grid grid-cols-12 gap-8 my-8 mx-8">
    <div class="col-span-9">
      <TopBar />
      <MyStudy />
      <StudyTools />
      <TestPrep />
      <Flashcards />
      <Notes />
      <Videos />
      <StudySets />
    </div>

    <div class="col-span-3">
      <CoinBalance />
      <Challenges />
      <Ranking />
    </div>
    <!-- <ion-grid>
      <ion-row>
        <ion-col size="2"></ion-col>

        <ion-col size="8">
          <TopBar />
          <MyStudy />
          <StudyTools />
          <TestPrep />
          <Flashcards />
          <Notes />
          <Videos />
          <StudySets />
        </ion-col>

        <ion-col size="2">
          <CoinBalance />
          <Challenges />
          <Ranking />
        </ion-col>
      </ion-row>
    </ion-grid> -->
  </div>
  <!-- <ion-list>
      <ion-item>
        <ion-checkbox slot="start"></ion-checkbox>
        <ion-label>
          <h1>Create Idea</h1>
          <ion-note>Run Idea by Brandy</ion-note>
        </ion-label>
        <ion-badge 1color="success" slot="end">5 Days</ion-badge>
      </ion-item>
    </ion-list>
    <ion-spacer />

    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button>
        <ion-icon name="add" />
      </ion-fab-button>
    </ion-fab -->
</template>

<script type="js">
// Main Page
import TopBar from "./MainPage/TopBar"
import MyStudy from "./MainPage/MyStudy"
import StudyTools from "./MainPage/StudyTools"
import TestPrep from "./MainPage/TestPrep"
import Flashcards from "./MainPage/Flashcards"
import Notes from "./MainPage/Notes"
import Videos from "./MainPage/Videos"
import StudySets from "./MainPage/StudySets"
// Aside
import CoinBalance from "./Aside/CoinBalance"
import Challenges from "./Aside/Challenges"
import Ranking from "./Aside/Ranking"
// ionic icons
import { add } from 'ionicons/icons'
import { addIcons } from 'ionicons'

addIcons({
  'ios-add': add.ios,
  'md-add': add.md,
})

export default {
  name: 'MainPage',
  data: () => ({}),
  components: {
    MyStudy,
    TopBar,
    StudyTools,
    TestPrep,
    Flashcards,
    Notes,
    Videos,
    StudySets,
    CoinBalance,
    Challenges,
    Ranking
  }
}
</script>

<style scoped></style>
