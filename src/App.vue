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
  <AppNav class="fixed-navbar"></AppNav>
  <router-view class="router-view" v-slot="{ Component}">
    <transition name="page-slide" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped lang="scss">

.page-slide-enter-active,
.page-slide-leave-active{
  transition: 400ms ease all;
}

.page-slide-enter-from,
.page-slide-leave-to{
  opacity: 0;
}

.page-transition {
  background-image: url(/img/background.jpg); // Sostituisci con il colore di sfondo temporaneo desiderato o un'immagine di sfondo predefinita
}
</style>
