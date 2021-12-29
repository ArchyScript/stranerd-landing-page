<template>
  <div class="grid grid-cols-12 gap-8 my-8 mx-8">
    <div class="col-span-9">
      <!-- <TopBar /> -->
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
  </div>
</template>

<script type="js">
// Main Page
// import TopBar from "./MainPage/TopBar"
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

export default {
  name: 'MainPage',
  data: () => ({}),
  components: {
    MyStudy,
    // TopBar,
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
