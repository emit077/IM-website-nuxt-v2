<script lang="ts">
export type { TrustIndicatorItem } from '~/components/ui/TrustIndicators.vue'
</script>

<script setup lang="ts">
import TrustIndicatorsUi from '~/components/ui/TrustIndicators.vue'
import type { TrustIndicatorItem } from '~/components/ui/TrustIndicators.vue'

defineProps<{
  items: TrustIndicatorItem[]
}>()
</script>

<template>
  <TrustIndicatorsUi :items="items" />
</template>
