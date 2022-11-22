<template>
  <div>
    <h4 @click="router.push({name:'home'})">
      children second page {{ $route.params.count }} {{ $route.params.id }}
    </h4>
  </div>
</template>

<script setup>
  import {useRoute, useRouter} from 'vue-router';

  const route = useRoute();
  const router = useRouter();
  console.log(route, router);
</script>

<style lang="scss" scoped>

</style>
