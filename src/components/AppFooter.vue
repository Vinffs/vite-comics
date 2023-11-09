<template>
  <footer>
    <TopFooter />
    <BottomFooter />
  </footer>
</template>

<script>
import TopFooter from "./FooterComponents/TopFooter.vue";
import BottomFooter from "./FooterComponents/BottomFooter.vue";
export default {
  name: "AppFooter",
  components: {
    TopFooter,
    BottomFooter,
  },
};
</script>

<style lang="scss" scoped>
footer {
  background-image: url("/images/footer-bg.jpg");
  background-size: cover;
}
</style>
