<script setup lang="ts">
import { cityIconBasePath } from '~/data/contact'

const props = defineProps<{
  icon: string
  label: string
}>()

const iconSrc = `${cityIconBasePath}/${props.icon}.png`
</script>

<template>
  <img
    :src="iconSrc"
    :alt="`${label} city icon`"
    class="h-12 w-12 object-contain sm:h-14 sm:w-14"
    loading="lazy"
    decoding="async"
  />
</template>
