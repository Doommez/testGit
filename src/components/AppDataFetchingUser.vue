<template>
  <div>
    <the-loader
      v-if="isLoaded"
      class="loader"
    />
    <div v-if="user">
      <div>
        {{ user.firstName }}
        {{ user.age }}
        {{ user.username }}
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  import {useRoute} from 'vue-router';
  import {useLoadingData} from '../composable/useLoadingData';
  import TheLoader from './TheLoader.vue';

  const {request, isLoaded} = useLoadingData();


  const user = ref(null);
  const route = useRoute();


  const getUsers = async () => {
    console.log(route.params.id);
    const url = ref(`https://dummyjson.com/users/${route.params.id}`);
    const data = await request(url.value);
    user.value = data;
    console.log(data);
    console.log(user.value);
  };

  getUsers();
</script>

<style lang="scss" scoped>
  .loader{
    z-index: 100;
    margin: auto;
  }
</style>
