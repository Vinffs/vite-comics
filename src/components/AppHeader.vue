<template>
  <header>
    <section class="container d-flex justify-content-between align-items-center">
      <div>
        <img src="/images/dc-logo.png" alt="logo" />
      </div>
      <HeaderNav />
    </section>
    <hero />
  </header>
</template>

<script>
import HeaderNav from "./HeaderComponents/HeaderNav.vue";
import hero from "./HeaderComponents/hero.vue";
export default {
  name: "AppHeader",
  components: {
    HeaderNav,
    hero,
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

header {
  margin-top: 1em;
  background-color: $color_white;

  img {
    padding: 0.5em 0 1.5em 0;
  }
}
</style>
