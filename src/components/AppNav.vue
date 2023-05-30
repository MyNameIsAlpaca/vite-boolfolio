<script>
export default {
  name: 'AppNav',

  data() {
    return {
      
    }
  }
}
</script>

<template>
  <div class="nav">
    <div class="left-nav">
      &lt;Nav>
    </div>
    <div class="mid-nav">
      <router-link class="pc" :to="{ name: 'home' }"><button><span class="box">Home</span></button></router-link>
      <router-link class="pc" :to="{ name: 'about-me' }"><button><span class="box">About me</span></button></router-link>
      <router-link class="pc" :to="{ name: 'projects' }"><button><span class="box">Progetti</span></button></router-link>
      <router-link class="pc" :to="{ name: 'home' }"><button><span class="box">Contatti</span></button></router-link>
    </div>
    <div class="right-nav">
      &lt;/Nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .nav{
    width: 100vw;
    height: 90px;
    background-color: var(--secondary-color);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .right-nav, .left-nav{
      font-size: 1.5em;
      padding: 0px 10px;
      color: lightgray;
    }
    .mid-nav{
      display: flex;
      gap: 20px;
    }
    .smartphone{
      display: none;
    }
    .box {
    width: 140px;
    height: auto;
    float: left;
    transition: .5s linear;
    position: relative;
    display: block;
    overflow: hidden;
    padding: 15px;
    text-align: center;
    margin: 0 5px;
    background: transparent;
    text-transform: uppercase;
    color: white;
    
  }
  button{
    text-decoration: none;
    cursor: pointer;
    outline: none;
    border: none;
    background: transparent;
  }

  .box:before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    height: 4px;
    width: 100%;
    border-bottom: 4px solid transparent;
    border-left: 4px solid transparent;
    box-sizing: border-box;
    transform: translateX(100%);
  }

  .box:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-top: 4px solid transparent;
    border-right: 4px solid transparent;
    box-sizing: border-box;
    transform: translateX(-100%);
  }

  .box:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }

  .box:hover:before {
    border-color: white;
    height: 100%;
    transform: translateX(0);
    transition: .3s transform linear, .3s height linear .3s;
  }

  .box:hover:after {
    border-color: white;
    height: 100%;
    transform: translateX(0);
    transition: .3s transform linear, .3s height linear .5s;
  }
    }

    @media screen and (max-width: 992px) {
      .nav{
    width: 120px;
    height: 100vh;
    background-color: var(--secondary-color);
    display: flex;
    font-size: 1em;
    position: fixed;
    .mid-nav{
      flex-direction: column;
      .box{
        width: 100px;
        margin: 0;
        font-size: 0.8em;
      }
    }
      }
    }
</style>