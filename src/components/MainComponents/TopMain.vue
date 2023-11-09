<template>
  <section>
    <div class="container">
      <h3>--&gt;Your Content Goes Here &lt;--</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: "TopMain",
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
