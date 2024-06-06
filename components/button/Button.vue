<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: 'medium',
    validator: (value: string) => ['small', 'medium', 'large'].includes(value),
  },
  type: {
    type: String,
    default: 'main',
  },
});
</script>

<template>
  <button class="rounded" :class="`${size} ${type}`">
    <slot class="pr-2"></slot>
    Button
  </button>
</template>

<style scoped>
  .main {
    @apply bg-purple rounded text-white hover:bg-white hover:text-purple;
  }

  .main-disabled {
    @apply cursor-not-allowed;
  }

  .secondary {
    @apply bg-white text-purple border border-purple hover:border-[#AE60EB] hover:text-[#AE60EB];
  }

  .secondary-disabled {
    @apply border cursor-not-allowed;
  }

  .large {
    @apply py-3 px-14 text-m-regular;
  }

  .medium {
    @apply py-2 px-14 text-sm;
  }

  .small {
    @apply text-xs;
  }
</style>
