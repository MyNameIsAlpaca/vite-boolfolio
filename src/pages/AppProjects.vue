<script>
import axios from 'axios';
import AppProjectCard from '../components/AppProjectCard.vue';

export default {
  name: "AppProjects",
  data() {
    return {
      projects: [],
      currentPage: 1,
      totalPage: 0,
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios.get("http://127.0.0.1:8000/api/projects?page=" + this.currentPage).then(response => {
        this.projects = response.data.results.data;
        this.totalPage = response.data.results.last_page;
        console.log(this.totalPage)
        console.log(this.currentPage)

      });
    },
    changeCurrentPage() {
      if(this.currentPage < this.totalPage){
        this.currentPage++
        this.getProjects()
      } else {
        this.currentPage--
        this.getProjects()
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
      <div class="card-container">
        <div v-for="project in projects" class="bt-2">
          <AppProjectCard :project="project"></AppProjectCard>
        </div>
      </div>
      <div class="more">
        <button @click="changeCurrentPage">Carica altro</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background{
  background-image: url(/img/background-project.jpg);
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
      gap: 50px;
      padding-top: 30px;
      flex-wrap: wrap;
      max-width: 1600px;
      margin: auto;
      padding: 100px 0;
    }   
  }
}
</style>
