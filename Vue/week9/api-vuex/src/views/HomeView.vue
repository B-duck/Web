<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>{{name}}</div>
  </div>
</template>

<script>
import {useStore} from 'vuex';
export default {
  name: 'HomeView',
  setup(){
    const store=useStore();
    const name=store.state.name;
    return{name}
  }
}
</script>
