<script setup lang="ts">
import CardHeader from '~/components/ui/cardheader.vue'

withDefaults(
  defineProps<{
    id?: string
    headingId: string
    badge?: string
    title: string
    description: string
    closing?: string
    bgClass?: string
    bordered?: boolean
  }>(),
  {
    bgClass: 'bg-cream-50',
    bordered: true,
  },
)
</script>

<template>
  <section :id="id" class="scroll-mt-24 py-14 sm:py-16 lg:py-20" :class="[
    bgClass,
    bordered ? 'border-b border-slate-200/70' : '',
  ]" :aria-labelledby="headingId">
    <div class="container-page">
      <div v-motion :initial="{ opacity: 0, y: 12 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
        <CardHeader :heading-id="headingId" content-class="!px-0 !py-0" :badge="badge" :title="title"
          :description="description" />
        <p v-if="closing" class="mx-auto mt-3 max-w-3xl text-center text-sm font-semibold text-blue-700 sm:text-base">
          {{ closing }}
        </p>
      </div>
    </div>
  </section>
</template>
