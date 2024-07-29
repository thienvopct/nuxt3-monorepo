<script lang="ts" setup>
const counter = ref(0);
</script>

<template>
  <div>
    {{ counter }}
    <button @click="counter--">Decrease</button>
    <slot />
    <button @click="counter++">Increase</button>
  </div>
</template>
