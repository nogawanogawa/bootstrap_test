<template>
<div>
  <NavigationBar/>
  <Cytoscape/>

  <div id="app">
  </div>
</div>
</template>

<script>
import Cytoscape from './components/Cytoscape.vue'
import NavigationBar from './components/NavigationBar.vue'

export default {
  name: 'app',
  components: {
    Cytoscape,
    NavigationBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
