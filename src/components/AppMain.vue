<script>
import axios from 'axios';
import AppProjectCard from './AppProjectCard.vue';

export default{
    name: "AppMain",
    data() {
        return {
            projects: [],
        };
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            axios.get("http://127.0.0.1:8000/api/projects").then(response => {
              this.projects = response.data.results
            });
        }
    },
    components: { 
      AppProjectCard,
    }
}

</script>

<template>
  <div class="container">
    <h1>I miei progetti</h1>
    <div class="card-container">
      <div v-for="project in projects" class="bt-2">
        <AppProjectCard :project="project"></AppProjectCard>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container{
    h1{
      text-align: center;
      padding-top: 20px;
    }
    .card-container{
      display: flex;
      gap: 20px;
      padding-top: 30px;
    }
  }
</style>