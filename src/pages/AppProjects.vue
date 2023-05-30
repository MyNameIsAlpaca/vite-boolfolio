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

</template>

<style lang="scss" scoped>

</style>
