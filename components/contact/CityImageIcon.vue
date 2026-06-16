<script setup lang="ts">
import { cityImgBasePath } from '~/data/contact'

const props = defineProps<{
  image: string
  label: string
}>()

const imageSrc = `${cityImgBasePath}/${props.image}.png`
</script>

<template>
  <img
    :src="imageSrc"
    :alt="`${label} city`"
    class="h-16 w-16 rounded-xl object-cover sm:h-[72px] sm:w-[72px]"
    loading="lazy"
    decoding="async"
  />
</template>
