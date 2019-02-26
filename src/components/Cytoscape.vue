<template>
  <div id="view">
    <div id="cy"></div>
  </div>
</template>

<script>
var cytoscape = require('cytoscape')

var elements = {
  nodes: [
    { data: { id: 'cat' } },
    { data: { id: 'bird' } },
    { data: { id: 'ladybug' } },
    { data: { id: 'aphid' } },
    { data: { id: 'rose' } },
    { data: { id: 'grasshopper' } },
    { data: { id: 'plant' } },
    { data: { id: 'wheat' } }
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
      console.info(this.cy)
      this.cy.add([
        { 'group': 'nodes', data: { 'id': 'node' + this.count }, position: { x: 300, y: 200 } },
        {'group': 'edges', data: {'id': 'edge' + this.count, 'source': 'node' + this.count, 'target': 'cat'}}
      ])
    },
    view_init: function () {
      this.cy = cytoscape(
        {
          container: document.getElementById('cy'),
          boxSelectionEnabled: false,
          autounselectify: true,
          style: cytoscape.stylesheet()
              .selector('node')
              .css({
                'height': 40,
                'width': 40,
                'background-fit': 'cover',
                'border-color': '#000',
                'border-width': 2,
                'border-opacity': 0.5,
                'content': 'data(id)',
                'text-valign': 'center',
                'color': '#000'
              })
              .selector('edge')
              .css({
                'width': 4,
                'line-color': '#ffaaaa',
                'target-arrow-color': '#ffaaaa',
                'curve-style': 'bezier'
              }),
          elements: elements,
          layout: {
            name: 'circle',
            directed: true,
            padding: 10
          }
        }
      )
    }
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
