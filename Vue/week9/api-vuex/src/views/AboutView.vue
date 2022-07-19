<template>
  <div class="about">
    <h1 @click="handle">This is an about page</h1>
    {{name }}
  </div>
</template>

<script>
//接口地址
import { useStore } from 'vuex';

import axios from 'axios';

export default {
  name: 'HomeView',
  setup() {
    axios.get('https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/register')
      .then((response)=>{
        console.log(response.data)
      })
    const store = useStore();
    const name = store.state.name;
    const handle=()=>{
      //store.commit('changeName')
      //异步
      store.dispatch('getData')
    }
    return { name,handle }
  }
}
</script>
