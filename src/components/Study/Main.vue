<template>
  <div
    class="main_page grid grid-cols-12 gap-8 mb-4 mt-4 px-1 ml-2 sm:ml-6 sm:px-4 overflow-y-scroll"
  >
    <div
      class="col-span-12 md:col-span-8 lg:col-span-12 xl:col-span-9 max-w-screen-xl mx-auto"
    >
      <TopBar class="resp_on_xs_screen" />
      <MyStudy class="resp_on_xs_screen" />
      <StudyTools class="resp_on_xs_screen" />
      <TestPrep class="resp_on_xs_screen" />
      <Flashcards class="resp_on_xs_screen" />
      <Notes class="resp_on_xs_screen" />
      <Videos class="resp_on_xs_screen" />
      <StudySets class="resp_on_xs_screen" />
    </div>

    <div
      class="col-span-12 md:col-span-4 lg:col-span-12 lg:w-5xl xl:col-span-3"
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

@media (max-width: 500px) {
  .main_page {
    overflow-x: scroll;
  }
  .resp_on_xs_screen {
    max-width: 400px;
    margin-right: auto;
  }
}
@media (max-width: 499px) and (min-width: 400px) {
  .resp_on_xs_screen {
    max-width: 360px;
    margin-right: auto;
  }
}
@media (max-width: 399px) and (min-width: 350px) {
  .resp_on_xs_screen {
    max-width: 320px;
    margin-right: auto;
  }
}

@media (max-width: 349px) {
  .resp_on_xs_screen {
    max-width: 300px;
    margin-right: auto;
  }
}
</style>
