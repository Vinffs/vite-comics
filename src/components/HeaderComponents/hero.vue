<template>
  <section>
  </section>
</template>

<script>
export default {
  name: 'hero',
}
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

section {
  background-image: url("/images/jumbotron.jpg");
  background-size: cover;
  width: 100%;
  height: 50vh;
}
</style>