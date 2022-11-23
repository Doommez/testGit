<template>
  <h1>this general page App</h1>
  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolore est quos sint tenetur. Architecto
    cupiditate delectus, dignissimos doloremque ducimus error eum explicabo fugit hic, nam omnis quasi qui velit!
  </div>
  <router-link
    to="/hello"
    :name="name"
  >
    first page
  </router-link>
  <router-link to="/second/id1/23">
    second page
  </router-link>
  <router-link to="/three">
    three page
  </router-link>
  <router-link to="/dataFetching">
    dataFetching
  </router-link>
  <router-view />
</template>

<script setup>

  const name = 'aaaa';
</script>

<style lang="scss" scoped>

</style>
