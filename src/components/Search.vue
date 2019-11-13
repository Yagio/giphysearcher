<template>
  <div class="results-container">
    <Spinner v-if="isLoading" />

    <p v-else-if="error" class="empty-message">
      Error fetching GIFs :(
    </p>

    <Grid v-else :items="searchResults" />
  </div>
</template>

<script>
import api from '../api'
import Spinner from './Spinner.vue'
import Grid from './Grid.vue'

export default {
  name: 'Search',
  components: {
    Spinner,
    Grid
  },  
  props: {
    queryTerm: String,
    limit: Number
  },
  data: () => ({
    searchResults: [],
    error: null,
    isLoading: true,
  }),
  mounted () {
    api
      .searchGifs(this.queryTerm, this.limit)
      .then(response => {
        this.searchResults = response.data.data
      })
      .catch(error => {
        this.error = error
      })
      .finally(() => this.isLoading = false)
  } 
}
</script>

<style>
.results-container {
  margin: 50px auto;
  width: 800px;
  max-width: 100%;
}

.results-container p{
  text-align: center;
}
</style>
