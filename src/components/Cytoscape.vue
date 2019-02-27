<template>
  <div id="view">
    <div id="cy"></div>
  </div>
</template>

<script>
var cytoscape = require('cytoscape')

var elements = {
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

export default {
  name: 'Cytoscape',
  components: {},
  created: function () {
  },
  data: function () {
    return {
      input: '',
      output: '',
      msg: 'vue to cytoscape',
      count: 0
    }
  },
  methods: {
    add_node: function () {
//      console.info(this.cy)
      this.cy.add([
        { 'group': 'nodes', data: { 'id': 'node' + this.count }, position: { x: 300, y: 200 } },
        {'group': 'edges', data: {'id': 'edge' + this.count, 'source': 'node' + this.count, 'target': 'cat'}}
      ])
    },
    view_init: function () {
      var cy = cytoscape({
        container: document.getElementById('cy'),

        boxSelectionEnabled: false,
        autounselectify: true,

        style: cytoscape.stylesheet()
          .selector('node')
            .css({
              'content': 'data(name)',
              'text-valign': 'center',
              'color': 'white',
              'text-outline-width': 2,
              'text-outline-color': '#888',
              'background-color': '#888'
            })
          .selector(':selected')
            .css({
              'background-color': 'black',
              'line-color': 'black',
              'target-arrow-color': 'black',
              'source-arrow-color': 'black',
              'text-outline-color': 'black'
            }),

        elements: elements,

        layout: {
          name: 'circle',
          padding: 10
        }
      });

      cy.on('tap', 'node', function(){
        try { // your browser may block popups
          window.open( this.data('href') );
        } catch(e){ // fall back on url change
          window.location.href = this.data('href');
        }
      });    }
  },
  computed: {
  },
  mounted: function () {
    this.view_init()
  }
}

</script>
<style scoped>
#cy {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 60px;
    left: 0px;
    text-align: left;
}

body {
  font: 14px helvetica neue, helvetica, arial, sans-serif;
}
</style>
