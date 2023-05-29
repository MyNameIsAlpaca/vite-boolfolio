<script>

export default{
  name: 'AppProjectCard',

  data() {
    return {
      baseUrl:'http://127.0.0.1:8000/',
    }
  },

  props: {

    project: Object,

  },

  created(){
  },

  methods: {
  }
}

</script>

<template>
  <div class="card" style="width: 18rem;">
    <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
    <div class="card-body">
      <h5 class="card-title">{{ project.name }}</h5>
      <p class="card-text">{{ project.desc }}</p>
    </div>
  </div>
</template>

<style lang="scss">
  
</style>