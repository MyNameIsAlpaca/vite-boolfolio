<script>
import axios from 'axios';
import AppProjectCard from './AppProjectCard.vue';

export default {
  name: "AppMain",
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
  <div class="container">
    <h1>I miei progetti</h1>
    <div class="card-container">
      <div v-for="project in projects" class="bt-2">
        <AppProjectCard :project="project"></AppProjectCard>
      </div>
      <div class="more">
        <button @click="changeCurrentPage">Carica altro</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  h1 {
    text-align: center;
    padding-top: 20px;
  }
  .card-container {
    display: flex;
    gap: 20px;
    padding-top: 30px;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
