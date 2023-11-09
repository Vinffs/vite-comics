<template>
  <header>
    <section
      class="container d-flex justify-content-between align-items-center"
    >
      <div>
        <img src="/images/dc-logo.png" alt="logo" />
      </div>
      <HeaderNav />
    </section>
  </header>
</template>

<script>
import HeaderNav from "./HeaderComponents/HeaderNav.vue";
export default {
  name: "AppHeader",
  components: {
    HeaderNav,
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

header {
  padding: 20px 0;
  background-color: $color_white;
}
</style>
