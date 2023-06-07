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
  <router-link :to="{name: 'single-project', params: {slug: project.slug}}" style="text-decoration: none; color: inherit;">
    <div class="cardProject">
      <div class="card-image">
        <img :src="projectImage()" alt="">
      </div>
      <div class="text">
        <h1 class="card-title">{{ project.name }}</h1>
        <p class="card-body">
        {{ project.desc }}
        </p>
        <p class="footer">{{ project.publication_date }}</p>
      </div>
    </div>
  </router-link>
</template>

<style lang="scss">
.cardProject {
  height: 100vh;
  color: black;
  height: 600px;
  width: 1000px;
  background-color: white;
  border-radius: 10px;
  .card-image {
    padding: 0;
    height: 400px;
    overflow: hidden;
    img {
      border-radius: 10px 10px 0% 0%;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
  .text{
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    .card-body{
      padding-top: 10px;
    }
  }
}

@media screen and (max-width: 1400px) {
  .cardProject{
    width: 500px;
    height: 500px;
  }

}
</style>