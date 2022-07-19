<template>
  <div>
    <input v-model="inputValue" />
    <button @click="handle">提交</button>
  </div>
  <ul>
    <list-item 
    v-for="(item,index) in list"
    :key="index"
    :msg="item"
     />
  </ul>
</template>

<script>
//属于单文件组件
//引用
import { reactive,ref } from 'vue';
import ListItem from './components/ListItem';

export default {
  name: 'App',

  components:{
    ListItem
  },

  setup() {
    const inputValue=ref('')
    const list = reactive([]);
    const handle=()=>{
      list.push(inputValue.value);
      inputValue.value=''
    }
    return { list, inputValue,handle }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
