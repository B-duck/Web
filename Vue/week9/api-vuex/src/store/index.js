import { createStore } from 'vuex'
//创建了全局唯一的仓库，用来存放全局的数据
export default createStore({
  //数据只放在state中
  state: {
    name: 'dell'
  },
  getters: {
  },
  //同步操作
  mutations: {
    changeName() {
      this.state.name = 'lee'
    }
  },
  //异步操作放在action中做
  actions: {
    //change中两个参数store, str
    getData() {
      setTimeout(() => {
        this.commit('changeName')
      }, 2000);
    }
  },
  modules: {
  }
})
