<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  color: 'red' | 'blue' | 'green';
}

const props = withDefaults(defineProps<Props>(), {
  color: 'red',
});
</script>

<style scoped>
.base-button {
  background-color: v-bind(props.color);
}
</style>
