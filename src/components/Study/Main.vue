<template>
  <div class="grid grid-cols-12 gap-8 mb-4 mt-4 ml-6 pr-6 overflow-y-scroll">
    <div
      class="col-span-12 md:col-span-8 lg:col-span-12 xl:col-span-9 max-w-screen-xl  mx-auto"
    >
      <TopBar />
      <MyStudy />
      <StudyTools />
      <TestPrep />
      <Flashcards />
      <Notes />
      <Videos />
      <StudySets />
    </div>

    <div class="col-span-12 md:col-span-4 lg:col-span-12 lg:w-5xl xl:col-span-3">
      <CoinBalance />
      <Challenges />
      <Ranking />
    </div>
  </div>
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

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.hide_scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide_scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
