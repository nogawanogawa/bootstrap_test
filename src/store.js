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
    },
    word: "test"
  },
  getters: {
  },
  mutations: {
    search(state, newElements){
      state.elements.nodes = newElements.edges
      state.elements.edges = newElements.nodes
      state.word = "hoge"
    },
    update(state, result){
      state.word = result
    }
  },
  actions:{
    searchAction(ctx, word) {
      const neo4j = require('neo4j-driver').v1;
      const uri = "bolt://localhost";
      const user = "neo4j";
      const password = "password";
      const driver = neo4j.driver(uri, neo4j.auth.basic(user, password), {maxTransactionRetryTime: 30000});
      const session = driver.session();

      const resultPromise = session.run(
        'MATCH (a{name: $name}) - [r] - (n) RETURN a, r, n',
        {name: word}
      );

      resultPromise.then(result => {
        session.close();
        driver.close();

        ctx.commit('search', result)
      })

    }
  }
})

export default store
