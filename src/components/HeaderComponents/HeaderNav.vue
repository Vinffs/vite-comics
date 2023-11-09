<template>
  <nav>
    <ul class="d-flex list-unstyled">
      <li :class="{ activePage: obj.active }" v-for="obj in navList">
        <a href="#">{{ obj.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      navList: [
        {
          text: "CHARACTERS",
          url: "#",
          active: false,
        },
        {
          text: "COMICS",
          url: "#",
          active: true,
        },
        {
          text: "MOVIES",
          url: "#",
          active: false,
        },
        {
          text: "TV",
          url: "#",
          active: false,
        },
        {
          text: "GAMES",
          url: "#",
          active: false,
        },
        {
          text: "COLLECTIBLES",
          url: "#",
          active: false,
        },
        {
          text: "VIDEOS",
          url: "#",
          active: false,
        },
        {
          text: "FANS",
          url: "#",
          active: false,
        },
        {
          text: "NEWS",
          url: "#",
          active: false,
        },
        {
          text: "SHOP",
          url: "#",
          active: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

li {
  padding: 20px 15px;
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
