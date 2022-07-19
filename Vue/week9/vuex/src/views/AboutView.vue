<template>
  <div class="about">
    <h1 @click="handle">This is an about page</h1>
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
  },
  //改数据时
  methods:{
    handle(){
      this.$store.dispatch('change');
    }
  }
}
</script>
