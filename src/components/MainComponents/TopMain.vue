<template>
  <section class="d-flex justify-content-center">
    <div class="row container justify-content-center">
      <div class="col-5 col-sm-5 col-md-4 col-lg-3 col-xl-3 col-xxl-2" v-for="(comic, index) in comics" :key="index">
        <card :thumb="comic.thumb" :series="comic.series" />
      </div>
      <button>LOAD MORE</button>
    </div>
  </section>
</template>

<script>
import { dcComics } from "../../data/data.js";
import card from "./card.vue";
export default {
  name: "TopMain",
  components: {
    card,
  },
  data() {
    return {
      comics: dcComics,
    }
  }
};
</script>

<style lang="scss" scoped>
@use "./../../assets/styles/partials/variables.scss" as *;

section {
  background-color: $color_black;
  padding: 2.5em 0;

  button {
    width: 15% !important;
    padding: 0.5em 1.5em;
    font-size: 1em;
    font-weight: bold;
    color: $color_white;
    background-color: $color_primary;
    border: none;
    margin-top: 1em;
  }
}

h3 {
  color: $color_white;
}
</style>
