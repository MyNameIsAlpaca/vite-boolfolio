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
    
    .info{
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
</style>
