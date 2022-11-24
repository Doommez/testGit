<template>
  <div>
    <div class="counter">
      <div class="counter__button">
        {{ storeCounter.count }}
        <button @click="storeCounter.increaseCount">
          +
        </button>
        <button @click="storeCounter.decreaseCount">
          -
        </button>
      </div>
    </div>
    <div class="counter">
      <div class="counter__button">
        {{ storeCounter.count }}
        <button @click="storeCounter.increaseCount">
          +
        </button>
        <button @click="storeCounter.decreaseCount">
          -
        </button>
      </div>
    </div>
    <div class="counter">
      <div class="counter__button">
        {{ getCount }}
        <button @click="increaseCount">
          +
        </button>
        <button @click="decreaseCount">
          -
        </button>
        <div>
          {{ oddOrEven }}
        </div>
      </div>
    </div>
    <h4 @click="router.push({name:'home'})">
      children second page {{ $route.params.count }} {{ $route.params.id }}
    </h4>
  </div>
</template>

<script setup>
  import {useRoute, useRouter} from 'vue-router';
  import {useCounterStore} from '../stores/counter.js';
  import {useStoreCounterComposable} from '../composable/useStoreCounterComposable.js';

  const storeCounter = useCounterStore();
  const {
    increaseCount, decreaseCount, getCount, oddOrEven,
  } = useStoreCounterComposable();
  const route = useRoute();
  const router = useRouter();
  console.log(route, router);
</script>

<style lang="scss" scoped>

</style>
