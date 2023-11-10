<template>
  <nav>
    <ul class="d-flex list-unstyled m-0">
      <li :class="{ activePage: obj.active }" v-for="obj in navList">
        <a href="#">{{ obj.sectionTitle }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { navList } from "../../data/data.js";
export default {
  name: "HeaderNav",
  components: {
    sectionTitle: String,
    active: Boolean,
  },
  data() {
    return {
      navList: navList,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

li {
  padding: 4em 0.8em;
  font-size: 0.9em;
  font-weight: bold;

  &.activePage,
  &:hover {
    color: $color_primary;
    padding-bottom: 15px;
    border-bottom: 5px solid $color_primary;
  }

  a {
    text-decoration: none;
    color: $color_black;
  }

  &.activePage a,
  &:hover a {
    color: $color_primary;
  }
}
</style>
