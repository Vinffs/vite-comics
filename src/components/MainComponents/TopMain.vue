<template>
  <section class="d-flex justify-content-center">
    <div class="row container justify-content-center">
      <div class="col-5 col-sm-5 col-md-4 col-lg-3 col-xl-3 col-xxl-2" v-for="(comic, index) in comics" :key="index">
        <card :thumb="comic.thumb" :series="comic.series" />
      </div>
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
  padding: 3em 0;
}

h3 {
  color: $color_white;
}
</style>
