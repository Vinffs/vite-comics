<template>
  <section>
    <div class="d-flex container justify-content-between" id="sectionContainer">
      <div
        v-for="section in sections"
        class="d-flex align-content-center align-items-center"
      >
        <img :src="section.image" :alt="section.name" />
        <div class="sectionText">{{ section.name }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BottomMain",
  data() {
    return {
      sections: [
        {
          name: "DIGITAL COMICS",
          image: "/images/buy-comics-digital-comics.png",
        },
        {
          name: "DC MERCHANDISE",
          image: "/images/buy-comics-merchandise.png",
        },
        {
          name: "SUBSCRIPTION",
          image: "/images/buy-comics-subscriptions.png",
        },
        {
          name: "COMIC SHOP LOCATOR",
          image: "/images/buy-comics-shop-locator.png",
        },
        {
          name: "DC POWER VISA",
          image: "/images/buy-dc-power-visa.svg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "./../../assets/styles/partials/variables.scss" as *;

section {
  padding: 3em 0;
  background-color: $color_primary;

  img {
    width: 70px;
  }
}
.sectionText {
  color: $color_white;
  padding-left: 0.5em;
}
#sectionContainer > div:nth-child(4) img {
  width: 50px;
}
</style>
