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
  <div class="cardProject">
    <div class="card-image">
      <img :src="projectImage()" alt="">
    </div>
    <p class="card-title">{{ project.name }}</p>
    <p class="card-body">
    {{ project.desc }}
    </p>
    <p class="footer">{{ project.publication_date }}</p>
  </div>
</template>

<style lang="scss">
  .cardProject {
    padding: 20px;
    width: 300px;
    border-radius: 20px;
    background: var(--secondary-color);
    transition: 0.4s;
    min-height: 400px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .card-title {
      font-size: 18px;
      font-weight: 600;
      color: var(--primary-color);
    margin: 15px 0 0 10px;
  }
  .card-body {
    color: white;
    font-size: 15px;
  }
  .card-image {
    border-radius: 15px;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
    img{
      height: 180px;
    }
  }
  .footer {
    color: lightgray;
  }
  .date {
    font-weight: 700;
  }
}
.cardProject:hover {
  translate: 0 -10px;
  cursor: pointer;
}






</style>