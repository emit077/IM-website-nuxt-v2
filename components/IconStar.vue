<script setup lang="ts">
defineProps<{ class?: string }>()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    :class="$props.class"
  >
    <path d="M12 2.5l2.95 6.36 6.99.79-5.2 4.79 1.46 6.86L12 17.77 5.8 21.3l1.46-6.86-5.2-4.79 6.99-.79z"/>
  </svg>
</template>
