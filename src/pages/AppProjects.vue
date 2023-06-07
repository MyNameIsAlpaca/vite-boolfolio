<script>
import axios from 'axios';
import AppProjectCard from '../components/AppProjectCard.vue';

export default {
  name: "AppProjects",
  data() {
    return {
      projects: [],
      activeIndex: 1,
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then(response => {
        this.projects = response.data.results;
      });
    },

    goLeft() {
      if (this.activeIndex !== 0) {
        this.activeIndex--;
        if(this.activeIndex == 0) {
          this.activeIndex = this.projects.length - 1;
        }
      }
    },
    goRight() {
      if (this.activeIndex !== this.projects.length - 1) {
        this.activeIndex++;
        if(this.activeIndex == this.projects.length - 1) {
          this.activeIndex = this.activeIndex = 1;
        }
      }
    },

  },
  components: {
    AppProjectCard,
  },
};
</script>

<template>
  <div class="background">
    <div class="main">
      <h1>I miei progetti</h1>
      <div class="container">
        <div class="card-container container">
          <button class="btn btn-outline-secondary" @click="goLeft()"><i class="fa-solid fa-arrow-left"></i></button>
          <div v-for="(project, index) in projects" v-show="index == this.activeIndex" class="bt-2">
            <AppProjectCard :project="project"></AppProjectCard>
          </div>
          <button class="btn btn-outline-secondary" @click="goRight()"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background{
  background-color: black;
  background-size: cover;
  background-position: center;
  height: 100vh;
  .main {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    h1 {
      text-align: center;
      padding-top: 20px;
      color: rgb(56, 56, 56);
      font-weight: bold;
      font-family: "Courier New";
      text-transform: uppercase;
    }
    .card-container {
      display: flex;
      padding-top: 30px;
      flex-wrap: wrap;
      margin: auto;
      padding: 50px 0;
      gap: 40px;
      align-items: center;
      justify-content: center;
    }   
  }
}

</style>
