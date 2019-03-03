<template>
<div>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">NavigationBar</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          {{this.$store.state.word}}
          <b-form-input size="sm" class="mr-sm-2" type="text" v-model="word" placeholder='Search' />
          <b-button size="sm" class="my-2 my-sm-0" @click="search">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data () {
    return {
      word: ''
    }
  },
  methods: {
    search : function (){
      this.$store.dispatch('searchAction', this.word);
    }
  }
}
</script>

<style>
</style>
