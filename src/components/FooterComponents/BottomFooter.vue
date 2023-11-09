<template>
  <section>
    <div class="container d-flex justify-content-between py-5">
      <div>
        <button>SIGN-UP NOW!</button>
      </div>
      <div>
        <ul class="d-flex list-unstyled">
          <li>FOLLOW US</li>
          <li><a href="#"><img src="/images/footer-facebook.png" alt="Facebook"></a></li>
          <li><a href="#"><img src="/images/footer-twitter.png" alt="Twitter"></a></li>
          <li><a href="#"><img src="/images/footer-youtube.png" alt="Youtube"></a></li>
          <li><a href="#"><img src="/images/footer-pinterest.png" alt="Pinterest"></a></li>
          <li><a href="#"><img src="/images/footer-periscope.png" alt="Periscope"></a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BottomFooter",
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/_variables.scss" as *;

section {
  background-color: $color_secondary;

  button {
    background-color: $color_secondary;
    color: $color_white;
    font-size: 1.2em;
    font-weight: bold;
    border: 2px solid $color_primary;
    padding: 0.5em 1em;
    border-radius: 0 !important;
  }

  li {
    padding: 0 0.5em;
  }
}

ul>li:first-child {
  color: $color_primary;
  font-size: 1.5em;
  font-weight: bold;
}
</style>
