<template>
  <div>
    <h1>Hallo</h1>
    <div>props: {{ name }}</div>

  </div>
</template>

<script setup>
  const props = defineProps({
    name: {
      type: String,
      default: 'false',
    },
  });
</script>

<style lang="scss" scoped>

</style>
