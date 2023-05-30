<script>

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
  },
};
</script>

<template>
  <div class="main">
    <div class="left-section">
      <div class="info">
        <img src="img/curriculum_foto_def.jpg" alt="">
      </div>
    </div>
    <div class="right-section">
      <div class="info">
        <h1>Gabriele Saragosa</h1>
        <div class="container-type">
          <span class="typed">- Web Developer Junior -</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main{
  display: flex;
  .left-section{
    width: 50%;
    height: calc(100vh - 90px);
    border: 30px solid var(--primary-color);
    background-color: var(--primary-color);
    
    .info{
      border-radius: 20px;
      background-image: url('./img/background.jpg');
      background-size: cover;
      background-position: right;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      
    }
    img{
      max-width: 250px;
      border-radius: 10px;

    }
  }
  .right-section{
    color: white;
    background-color: var(--primary-color);
    width: 50%;
    height: calc(100vh - 90px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .info{
      text-align: center;
    }
  }
}

@media screen and (max-width: 992px){
  .main{
    max-width: calc(100vw - 100px);
    margin-left: 100px;
    height: 100vh;
    flex-direction: column;;
    .left-section{
      height: 100vh;
      width: 100%;
      .info{
        padding: 0;
      }
    }
    .right-section{
      height: 100vh;
      width: 100%;
    }
  }
}
</style>
