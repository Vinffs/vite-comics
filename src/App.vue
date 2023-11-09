<template>
  <AppHeader/>
  <AppMain/>
  <AppFooter/>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
  export default {
    name: 'App',
    components: {
      AppHeader,
      AppMain,
      AppFooter,
    },
    data(){
      return {}
    },
  }
</script>

<style lang="scss" scoped>

</style>