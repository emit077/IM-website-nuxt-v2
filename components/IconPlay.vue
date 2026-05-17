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
    <path d="M8 5v14l11-7z" />
  </svg>
</template>
