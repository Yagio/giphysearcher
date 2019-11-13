<template>
  <div id="app">
    <HeaderTitle title="TGIF Searcher" subtitle="Powered by Giphy" />
    <Search :queryTerm="searchTerm" :limit="resultsLimit" />
  </div>
</template>

<script>
import HeaderTitle from './components/HeaderTitle.vue'
import Search from './components/Search.vue'

export default {
  name: 'app',
  components: {
    HeaderTitle,
    Search
  },
  data: function () {
    return {
      searchTerm: 'TGIF',
      resultsLimit: 5
    }
  }  
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;  
}
</style>
