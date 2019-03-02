import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    elements: {
      nodes: [
        { data: { id: 'cat', name: '猫'} },
        { data: { id: 'bird', name: '鳥'} },
        { data: { id: 'ladybug', name: 'てんとう虫'} },
        { data: { id: 'aphid',name: 'アブラムシ'} },
        { data: { id: 'rose', name: 'バラ'} },
        { data: { id: 'grasshopper', name: 'バッタ'} },
        { data: { id: 'plant' , name: '植木鉢'} },
        { data: { id: 'wheat' , name: '小麦'} }
      ],
      edges: [
        { data: { source: 'cat', target: 'bird' } },
        { data: { source: 'bird', target: 'ladybug' } },
        { data: { source: 'bird', target: 'grasshopper' } },
        { data: { source: 'grasshopper', target: 'plant' } },
        { data: { source: 'grasshopper', target: 'wheat' } },
        { data: { source: 'ladybug', target: 'aphid' } },
        { data: { source: 'aphid', target: 'rose' } }
      ]
    }
  },
  getters: {
  },
  mutation: {
    search(state, newElements){
      state.node = newElements.nodes
      state.edges = newElements.edges
    }
  },
  actions:{
    searchAction(ctx, word) {
      var script = require("./search.js");
      ctx.commit('search', script.search(word))
    }
  }
})

export default store
