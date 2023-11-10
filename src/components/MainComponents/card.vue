<template>
  <div class="card py-3 border-0">
    <div>
      <img :src="thumb" class="card-img-top rounded-0" :alt="series">
    </div>
    <div class=" card-body d-flex p-0">
      <h5>{{ series }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    thumb: String,
    series: String,
  }

}
</script>

<style lang="scss" scoped>
@use "./../../assets/styles/partials/variables.scss" as *;

.card {
  background-color: $color_black !important;
  padding-bottom: 1em;

  img {
    object-position: top;
    width: 190px;
    height: 190px;
    object-fit: cover;

  }

  h5 {
    color: $color_white !important;
    padding: 0.5em 0 !important;
    margin: 0;
    font-size: 1em;
    text-wrap: balance;
  }
}
</style>