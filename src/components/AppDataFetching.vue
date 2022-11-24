<template>
  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut corporis cum, cumque doloremque ducimus
    excepturi ipsa ipsum iste mollitia necessitatibus nisi odit omnis quam quos repellat sed totam voluptas.
    <the-loader
      v-if="isLoaded"
      class="loader"
    />
    <div v-else>
      <ul>
        <li
          v-for="user in users"
          :key="user.id"
        >
          <router-link :to="{name: 'user',params: {id:user.id} }">
            <div>{{ user.firstName }}</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import {
    ref,
  } from 'vue';
  import {useRoute} from 'vue-router';
  import TheLoader from './TheLoader.vue';
  import {useLoadingData} from '../composable/useLoadingData';

  const {request, isLoaded} = useLoadingData();

  const users = ref(null);
  const route = useRoute();

  console.log(route);
  const getUsers = async () => {
    const data = await request('https://dummyjson.com/users');
    users.value = data.users;
    console.log(users.value);
  };


  getUsers();




</script>

<style scoped>
  .loader{
    z-index: 100;
    margin: auto;


  }
</style>
