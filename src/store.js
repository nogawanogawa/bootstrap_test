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
        { data: { id: 'aphid',name: 'aphid'} },
        { data: { id: 'rose', name: 'rose'} },
        { data: { id: 'grasshopper', name: 'grasshopper'} },
        { data: { id: 'plant' , name: 'plant'} },
        { data: { id: 'wheat' , name: 'wheat'} }
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
})

export default store
