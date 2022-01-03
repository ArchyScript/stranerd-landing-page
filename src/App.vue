<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script lang="js">
import Layout from "@/components/Layout.vue";

export default {
  name: "App",

  components: {
    Layout,
  }
};
</script>

<style>
@media (max-width: 570px) and (min-width: 430px) {
  .text-xs {
    font-size: 0.9rem;
  }
}
@media (max-width: 429px) and (min-width: 365px) {
  .resp_on_xs_screen {
    max-width: calc(100% - 50px);
  }
  .text-xs {
    font-size: 0.8rem;
  }
}
@media (max-width: 364px) and (min-width: 315px) {
  .resp_on_xs_screen {
    max-width: calc(100% - 100px);
  }
  .text-xs {
    font-size: 0.75rem;
  }
}
@media (max-width: 314px) and (min-width: 270px) {
  .resp_on_xs_screen {
    max-width: calc(100% - 150px);
  }
  .text-xs {
    font-size: 0.65rem;
  }
}
@media (max-width: 269px) and (min-width: 220px) {
  .main_page {
    overflow-x: scroll;
    margin-left: 20px;
  }
  .resp_on_xs_screen {
    max-width: calc(100% - 150px);
    margin-left: -20px;
  }
  .text-xs {
    font-size: 0.5rem;
  }
  .text-lg {
    font-size: 0.8rem;
  }
  .fa-2x {
    font-size: 1.8rem;
  }
}
@media (max-width: 219px) {
  .main_page {
    overflow: scroll;
  }
  .resp_on_xs_screen {
    max-width: calc(100% - 180px);
    margin-left: -30px;
  }
  .text-xs {
    font-size: 0.45rem;
  }
  .text-lg {
    font-size: 0.7rem;
  }
  .fa-2x {
    font-size: 1.2rem;
  }
}
</style>
