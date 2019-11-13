<template>
  <div class="container">
    <h1>
      {{ title }}
    </h1>
    <p>
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: {
    title: String,
    subtitle: String
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  padding: 35px 15px;
  background-color: #eee;
}

h1 {
  margin: 0;
  padding: 0;
  font-size: 2.0em;
}

p {
  font-size: 1.0em;
  margin: 10px 0 0;
}
</style>
