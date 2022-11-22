<template>
  <div>
    <h2>this second page</h2>
    <div>
      {{ $route.params.id }}
    </div>
    <button @click="showPostId">
      click for get post id
    </button>
  </div>
  <div>
    name: {{ name }}
  </div>
  <div>
    <router-link to="273">
      children
    </router-link>
  </div>
  <div><router-view /></div>
</template>

<script setup>
  import {useRoute} from 'vue-router';

  defineProps({
    name: {
      type: String,
      default: '111111',
    },
  });

  const route = useRoute();

  const showPostId = () => {
    alert(`id is ${route.params.count}`);
  };
</script>

<style scoped>

</style>
