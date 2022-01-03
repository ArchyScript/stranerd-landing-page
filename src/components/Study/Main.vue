<template>
  <div
    class="main_page grid grid-cols-12 gap-8 mb-4 mt-4 px-1 ml-2 sm:ml-6 sm:px-4 overflow-y-scroll"
  >
    <div
      class="col-span-12 md:col-span-8 lg:col-span-12 xl:col-span-9 max-w-screen-xl mx-auto"
    >
      <TopBar class="resp_on_xs_screen" />
      <MyStudy class="resp_on_xs_screen" />
      <TestPrep class="resp_on_xs_screen" />
      <StudyTools class="resp_on_xs_screen" />
      <Flashcards class="resp_on_xs_screen" />
      <Notes class="resp_on_xs_screen" />
      <Videos class="resp_on_xs_screen" />
      <StudySets class="resp_on_xs_screen" />
    </div>

    <div
      class="aside_section col-span-12 md:col-span-4 w-full lg:col-span-12 xl:col-span-3"
    >
      <CoinBalance class="resp_on_xs_screen" />
      <Challenges class="resp_on_xs_screen" />
      <Ranking class="resp_on_xs_screen" />
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
  name: 'StudyMainPage',
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

@media (max-width: 269px) {
  .aside_section {
    display: none;
  }
}
</style>
