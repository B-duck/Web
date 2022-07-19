import { createStore } from 'vuex'
//创建了全局唯一的仓库，用来存放全局的数据
export default createStore({
  //数据只放在state中
  state: {
    name: 'dell'
  },
  getters: {
  },
  //只允许写同步代码，不允许写异步代码
  //dispatch和actions做关联
  //commit和mutations做关联
  mutations: {
    change() {
      this.state.name = 'lee'
    }
  },
  //异步操作放在action中做
  actions: {
    //change中两个参数store, str
    change() {
      setTimeout(() => {
        this.commit('change')
      }, 2000);
    }
  },
  modules: {
  }
})
