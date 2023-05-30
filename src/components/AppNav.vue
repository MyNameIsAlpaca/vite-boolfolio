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
      <button><span class="box">Home</span></button>
      <button><span class="box">About me</span></button>
      <button><span class="box">Progetti</span></button>
      <button><span class="box">Contatti</span></button>
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
    background-color: #232d36;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .right-nav, .left-nav{
      font-size: 1.5em;
      padding: 0px 10px;
    }
    .mid-nav{
      display: flex;
      gap: 20px;
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
</style>