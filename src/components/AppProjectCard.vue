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
    projectImage() {
      console.log(this.project)
      if(this.project.project_image == null) {
        return "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
      } else {
        return this.baseUrl + 'storage/' + this.project.project_image;
      }
    }
  }
}

</script>

<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" :src="projectImage()" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ project.name }}</h5>
      <p class="card-text">{{ project.desc }}</p>
    </div>
  </div>
</template>

<style lang="scss">
  .card{
    min-height: 400px;
  }
</style>