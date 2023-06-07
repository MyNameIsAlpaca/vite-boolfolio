<script>

export default {
  name: "AppAbout",
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
  <div class="background">
    <div class="container">
      <div class="main-container">
        <div class="change-text">
          <h4 class="wordCarousel">
              <span>I am a</span>
              <div>
                  <ul class="flip3">
                    <li style="color:green; margin-left: -25px;">Web Developer</li>
                    <li style="color:red; margin-left: -25px;">Gamer</li>
                    <li style="color:powderblue; margin-left: -25px;">IT nerd</li>
                  </ul>
              </div>
          </h4>
        </div>
        <div class="title-container">
          <h1>
            <span>Who&nbsp;</span>
            <span>Is&nbsp;</span>
            <span>Gabriele</span>
            <span>?</span>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background{
  background-color: black;
  width: 100%;
  height: 100vh;
  .main-container{
    padding-top: 100px;
    height: 100vh;
    .title-container{
      h1 {
        transform: scale(0.94);
        animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
        text-align: center;
      }
  
      @keyframes scale {
        100% {
          transform: scale(1);
        }
      }
  
      span {
        display: inline-block;
        opacity: 0;
        filter: blur(4px);
      }
  
      span:nth-child(1) {
        animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
      }
  
      span:nth-child(2) {
        animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
      }
  
      span:nth-child(3) {
        animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
      }
  
      span:nth-child(4) {
        animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
      }
  
      @keyframes fade-in {
        100% {
          opacity: 1;
          filter: blur(0);
        }
      }
    }
    .change-text{
      .wordCarousel {
        font-size: 1.5em;
        font-weight: 100;
        color: #eee;
        display: flex;
        div {
            overflow: hidden;
            position: relative;
            height: 65px;
            margin-right: -10px;
            padding-top: 10px;
            margin-top: -10px;
            li {
                font-family: Serif;
                color: #eee;
                font-weight: 700;
                padding: 0 10px;
                height: 45px;
                margin-bottom: 45px;
                display: block;
            }
        }
        .flip3 { animation: flip3 8s cubic-bezier(0.23, 1, 0.32, 1.2) infinite; }
    }

    @keyframes flip2 {
        0% { margin-top: -180px; }
        5% { margin-top: -90px;  }
        50% { margin-top: -90px; }
        55% { margin-top: 0px; }
        99.99% { margin-top: 0px; }
        100% { margin-top: -180px; }
    }

    @keyframes flip3 {
        0% { margin-top: -270px; }
        5% { margin-top: -180px; }
        33% { margin-top: -180px; }
        38% { margin-top: -90px; }
        66% { margin-top: -90px; }
        71% { margin-top: 0px; }
        99.99% { margin-top: 0px; }
        100% { margin-top: -270px; }
    }

    @keyframes flip4 {
        0% { margin-top: -360px; }
        5% { margin-top: -270px; }
        25% { margin-top: -270px; }
        30% { margin-top: -180px; }
        50% { margin-top: -180px; }
        55% { margin-top: -90px; }
        75% { margin-top: -90px; }
        80% { margin-top: 0px; }
        99.99% { margin-top: 0px; }
        100% { margin-top: -360px; }
    }

    @keyframes flip5 {
        0% { margin-top: -450px; }
        5% { margin-top: -360px; }
        20% { margin-top: -360px; }
        25% { margin-top: -270px; }
        40% { margin-top: -270px; }
        45% { margin-top: -180px; }
        60% { margin-top: -180px; }
        65% { margin-top: -90px; }
        80% { margin-top: -90px; }
        85% { margin-top: 0px; }
        99.99% { margin-top: 0px; }
        100% { margin-top: -450px; }
    }
    }
  }
}
</style>