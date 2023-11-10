<template>
  <section class="container d-flex justify-content-between g-0">
    <div class="d-flex footerPadding">
      <div id="identifier">
        <ul v-for="listing in footerList.slice(0, 2)">
          <li class="headerList">{{ listing.name }}</li>
          <li v-for="item in listing.list">
            <a href="#">{{ item }}</a>
          </li>
        </ul>
      </div>
      <div class="d-flex">
        <ul v-for="listing in footerList.slice(2)">
          <li class="headerList">{{ listing.name }}</li>
          <li v-for="item in listing.list">
            <a href="#">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div id="imgContainer">
    </div>
  </section>
</template>

<script>
import { footerList } from "../../data/data.js";
export default {
  name: "TopFooter",
  components: {
    name: String,
    list: Array,
  },
  data() {
    return {
      footerList: footerList,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/_variables.scss" as *;

ul {
  margin: 0 !important;
  padding: 0 2.5em 0 0 !important;
  list-style: none;
}

.headerList {
  color: $color_white;
  font-size: 1.2em;
  font-weight: bold;
  padding-bottom: 0.5em;

}

#identifier>ul:last-child {
  padding-top: 1em !important;
}

.footerPadding {
  padding: 3em 0 5em 0.75em;
}

a {
  text-decoration: none;
  color: $color_lightgrey;
}

#imgContainer {
  background-image: url('images/dc-logo-bg.png');
  background-position-y: -110px;
  background-size: cover;
  width: 50%;
  margin: 0;
}
</style>
