<script>
import axios from 'axios';

export default {
  name: 'SingleProject',
  data(){
    return{
      project: {},
      projectSlug: '',
      projectExist: false,
    }
  },
  mounted(){
    this.projectSlug = this.$route.params.slug;
    this.getProject();
  },

  methods: {
    getProject(){
      axios.get('http://127.0.0.1:8000/api/projects/' + this.projectSlug).then(response => {
        if(response.data.success) {
          this.project = response.data.project
          this.projectExist = true
        }else{
          this.projectExist = false
        }
      });
    }
  }
}
</script>

<template>
  <div>
    <div v-if="projectExist" class="container">
      Esiste
    </div>
    <div v-else class="container" >
      Non esiste
    </div>

  </div>
</template>