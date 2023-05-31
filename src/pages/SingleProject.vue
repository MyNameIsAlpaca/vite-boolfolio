<script>
export default {
  name: 'SingleProject',
  data(){
    return{
      projectSlug: '',
    }
  },
  mounted(){
    this.projectSlug = this.$route.params.slug;
  }
}
</script>

<template>
  <div>
    <h1>Benvenuto nel progetto</h1>

  </div>
</template>