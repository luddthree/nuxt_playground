<template>
    <div>
      <h1>About</h1>


      <div> {{ data }}</div>
    </div>
</template>

<script setup>
  const { data } = await useFetch('/api/storefront?name=mario', {
    method: 'POST',
    body: {age: 30}
  })
</script>

<style scoped>

</style>