<template>
  <main>
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
</style>
