import {computed, ref} from 'vue';


const count = ref(0);
export const useStoreCounterComposable = () => {
  const increaseCount = () => {
    count.value++;
  };
  const decreaseCount = () => {
    count.value--;
  };
  const oddOrEven = computed(() => (count.value % 2 === 0 ? 'odd' : 'even'));

  const getCount = computed(() => count.value);

  return {
    increaseCount,
    decreaseCount,
    oddOrEven,
    getCount,
  };
};

