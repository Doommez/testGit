import {ref} from 'vue';

export const useLoadingData = () => {
  const isLoaded = ref(false);
  // const isError= ref(false);

  const request = async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
    isLoaded.value = true;
    const response = await fetch(url, {
      method,
      body,
      headers,
    });
    try {
      if (!response.ok) {
        throw new Error('CAN\'T DO THIS');
      }
      const data = await response.json();
      isLoaded.value = false;
      return data;
    } catch (e) {
      isLoaded.value = false;
    }
  };
  return {
    request,
    isLoaded,
  };
};
