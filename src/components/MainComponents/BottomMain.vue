<template>
  <section>
    <div class="d-flex justify-content-between container" id="sectionContainer">
      <div v-for="section in sections" class="d-flex align-content-center align-items-center">
        <img :src="section.comicImage" :alt="section.comicName" />
        <div class="sectionText">{{ section.comicName }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import { sections } from "../../data/data.js";
export default {
  name: "BottomMain",
  components: {
    comicName: String,
    comicImage: String,
  },
  data() {
    return {
      sections: sections,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "./../../assets/styles/partials/variables.scss" as *;

section {
  padding: 3em 0;
  background-color: $color_primary;

  img {
    width: 70px;
  }
}

.sectionText {
  color: $color_white;
  padding-left: 0.5em;
}

#sectionContainer {
  max-width: 1200px;

  &>div:nth-child(4) img {
    width: 50px;
  }
}
</style>
