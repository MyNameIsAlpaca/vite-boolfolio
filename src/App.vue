<script>
import AppNav from './components/AppNav.vue'; 

export default {
  name: "App",
  data() {
    return {

    };
  },
  components: { 
      AppNav,
    }
}

</script>

<template>
  <AppNav></AppNav>
  <router-view></router-view>
</template>

<style scoped lang="scss">

</style>
