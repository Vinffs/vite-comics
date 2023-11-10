<template>
  <main>
    <button class="border-0">CURRENT SERIES</button>
    <TopMain />
    <BottomMain />
  </main>
</template>

<script>
import TopMain from "./MainComponents/TopMain.vue";
import BottomMain from "./MainComponents/BottomMain.vue";
export default {
  name: "AppMain",
  components: {
    TopMain,
    BottomMain,
  },
};
</script>

<style lang="scss" scoped>
@use "./../assets/styles/partials/_variables.scss" as *;

main {
  position: relative;

  button:first-child {
    background-color: $color_primary;
    color: $color_white;
    position: absolute;
    top: -30px;
    left: 25px;
    padding: 0.5em 1.5em;
    font-size: 1.5em;
    font-weight: bold;
  }

}
</style>
