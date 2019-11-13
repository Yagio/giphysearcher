<template>
  <div v-if="items.length > 0" class="grid-container">
    <div v-for="item in items" :key="item.id" class="grid-cell">
      <img :src="item.images.fixed_width.url">
    </div>
  </div>

  <p v-else>
    No results :(
  </p>   
</template>

<script>
export default {
  name: 'Grid',  
  props: {
    items: Array
  }
}
</script>

<style>
.grid-container{
  columns: 15rem;
  column-gap: .5rem;
}

.grid-cell {
  break-inside: avoid;
  page-break-inside: avoid;
  padding-bottom: .5rem;
  position: relative;
}

.grid-cell img{
  width: 100%;
  height: auto;
  vertical-align: top;
}
</style>
