<template>
  <div>
    <h1>Hallo</h1>
    <div>props: {{ name }}</div>
    <div class="counter">
      {{ storeCounter.count }}
      <div class="counter__button">
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
  </div>
</template>

<script setup>
  import {useCounterStore} from '../stores/counter';
  import {useStoreCounterComposable} from '../composable/useStoreCounterComposable.js';

  defineProps({
    name: {
      type: String,
      default: 'false',
    },
  });
  const storeCounter = useCounterStore();
  const {
    increaseCount, decreaseCount, getCount, oddOrEven,
  } = useStoreCounterComposable();
</script>

<style lang="scss" scoped>
.counter{
  font-size: 30px;
}
</style>
