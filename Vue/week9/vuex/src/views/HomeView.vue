<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{myName}}
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  computed:{
    myName(){
      return this.$store.state.name;
    }
  }
}
</script>
