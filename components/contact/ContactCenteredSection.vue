<script setup lang="ts">
import { Icon } from '@iconify/vue'

withDefaults(
  defineProps<{
    id?: string
    headingId: string
    icon: string
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
  <section
    :id="id"
    class="scroll-mt-24 py-14 sm:py-16 lg:py-20"
    :class="[
      bgClass,
      bordered ? 'border-b border-slate-200/70' : '',
    ]"
    :aria-labelledby="headingId"
  >
    <div class="container-page">
      <div
        class="mx-auto max-w-2xl text-center"
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <span
          class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100"
          aria-hidden="true"
        >
          <Icon :icon="icon" class="h-6 w-6" />
        </span>
        <h2
          :id="headingId"
          class="font-display mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          {{ title }}
        </h2>
        <p class="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          {{ description }}
        </p>
        <p
          v-if="closing"
          class="mt-3 text-sm font-semibold text-blue-700 sm:text-base"
        >
          {{ closing }}
        </p>
      </div>
    </div>
  </section>
</template>
