<script>
import axios from 'axios';

export default {
  name: 'SingleProject',
  data(){
    return{
      project: {},
      projectSlug: '',
    }
  },
  mounted(){
    this.projectSlug = this.$route.params.slug;
    this.getProject();
  },

  methods: {
    getProject(){
      axios.get('http://127.0.0.1:8000/api/projects/' + this.projectSlug).then(response => {
        this.project = response.data.project
      });
    }
  }
}
</script>

<template>
  <div>
    <h1>{{ project.name }}</h1>

  </div>
</template>