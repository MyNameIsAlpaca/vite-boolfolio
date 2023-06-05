<script>

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css/effect-creative';

import 'swiper/css';

import { EffectCreative } from 'swiper';

export default {
  name: "AppHome",
  data() {
    return {

    };
  },
  created() {
  
  },
  methods: {
    
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [EffectCreative],
      };
    },
};
</script>

<template>
  <div class="background">
    <div class="container-xl main-container">
      <div class="left-section">
        <div class="image-container">
          <img src="/img/curriculum_foto_def.jpg" alt="Immagine di profilo">
        </div>
        <h3 class="pt-3"><em>Conoscenze:</em></h3>
        <swiper :grabCursor="true" :effect="'creative'" :creativeEffect="{ prev: { shadow: true, translate: [0, 0, -400],}, next: { translate: ['100%', 0, 0],},}" :modules="modules" class="mySwiper">
          <swiper-slide><i class="fa-brands fa-html5"></i><span class="swiper_name">Html</span> <em class="swipe_arrow">swipe <i class="fa-solid fa-arrow-right"></i></em></swiper-slide>
          <swiper-slide><i class="fa-brands fa-css3-alt"></i><span class="swiper_name">Css</span></swiper-slide>
          <swiper-slide><i class="fa-brands fa-js"></i><span class="swiper_name">Javascript</span></swiper-slide>
          <swiper-slide><i class="fa-brands fa-bootstrap"></i><span class="swiper_name">Bootstrap</span></swiper-slide>
          <swiper-slide><i class="fa-brands fa-vuejs"></i><span class="swiper_name">VueJs</span></swiper-slide>
          <swiper-slide><i class="fa-brands fa-php"></i><span class="swiper_name">Php</span></swiper-slide>
          <swiper-slide><i class="fa-brands fa-laravel"></i><span class="swiper_name">Laravel</span></swiper-slide>
        </swiper> 
      </div>
      <div class="right-section">
        <h1>Gabriele Saragosa</h1>
        <span>- Web Developer Junior -</span>
      </div>
    </div>
    </div>
</template>

<style lang="scss" scoped>
.background{
  background-image: url(/img/background.jpg);
  background-size: cover;
  width: 100%;
  height: 100vh;
  .main-container{
    padding-top: 70px;
    display: flex;
    justify-content: space-between;
  }
  .left-section{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 100px;
    width: 50%;
    height: calc(100vh - 70px);
    flex-direction: column;
    .image-container{
      width: 200px;
      img{
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }
  }
  .right-section{
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1{
      font-size: 3em;
      color: lightgray;
      text-shadow: 1px 1px 2px black;
    }
    span{
      text-shadow: 1px 1px 2px black;
      width: fit-content;
      overflow: hidden;
      white-space: nowrap;
      font-size: 1.5rem;
      margin: 0 auto;
      font-family: "Courier New";
      animation: typing 3s steps(38) 1s 1 normal both, blink 1s steps(1) infinite;
      text-align: center;
    }
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
    @keyframes blink {
      50% {
        border-color: transparent;
    }
  }
}
/* for swiper */
.swiper {
  margin-top: 10px;
  width: 200px;
  height: 100px;
}

.swiper-slide {
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  border-radius: 10px;
  .swipe_arrow{
    font-size: 0.5em;
  }
}
.swiper-slide:nth-child(1n) {
  background-color: darken(#e44c26, 10%);
  border: 5px solid #e44d26;
}

.swiper-slide:nth-child(2n) {
  background-color: darken(#2449d8, 10%);
  border: 5px solid #2449d8;
}

.swiper-slide:nth-child(3n) {
  background-color: darken(#cbb132, 10%);
  border: 5px solid #cbb132;
}

.swiper-slide:nth-child(4n) {
  background-color: darken(#7911ee, 10%);
  border: 5px solid #7911ee;
}

.swiper-slide:nth-child(5n) {
  background-color: darken(#3eaf7c, 10%);
  border: 5px solid #3eaf7c;
}

.swiper-slide:nth-child(6n) {
  background-color: darken(#7175aa, 10%);
  border: 5px solid #7175aa;
}

.swiper-slide:nth-child(7n) {
  background-color: darken(#e4453a, 10%);
  border: 5px solid #e4453a;
}

@media screen and (max-width: 992px) {
  .main-container{
    flex-direction: column;
    padding-left: 150px;
  }
  .left-section{
    width: 100%;
    height: fit-content;
  }
  .right-section{
    width: 100%;
    height: fit-content;
    align-items: center;
  }
}

@media screen and (max-width: 768px) {
  .main-container{
    gap: 100px;
  }
  .left-section{

    gap: 10px;
    .image-container{
      width: 150px;
    }
  }
}

@media screen and (max-width: 600px) {
  .main-container{
    padding-left: 50px;
  }
  .right-section{
    h1{
      font-size: 2em;
    }
    span{
      font-size: 1.5em;
    }
  }
}

}
</style>
