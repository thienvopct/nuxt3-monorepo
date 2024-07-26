<script setup lang="ts">
const props = defineProps<{
  bgColor: string;
}>();
</script>
<template>
  <div class="message" :style="{ backgroundColor: props.bgColor }">
    <slot />
  </div>
</template>
<style scoped lang="scss">
.message {
  height: 98vh;
  width: 99vw;
  font-size: 32px;
  color: #2c2c2c;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
