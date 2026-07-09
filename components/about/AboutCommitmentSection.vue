<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeader.vue'
import { aboutCommitment } from '~/data/about'
</script>

<template>
  <section id="commitment" class="bg-white section-py" aria-labelledby="commitment-heading">
    <div class="container-page">
      <CardHeader heading-id="commitment-heading" classes="!px-0 !py-0" badge="Our Commitment"
        title="Our Standards of <span class='text-gradient-brand'>Educational Excellence</span>"
        :description="aboutCommitment.subtitle" />

      <ul class="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5" role="list">
        <li v-for="(item, i) in aboutCommitment.items" :key="item.title" class="flex flex-col items-center text-center"
          v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 460, delay: 60 + i * 80 } }">
          <span
            class="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-600/25">
            <Icon :icon="item.icon" class="h-7 w-7" aria-hidden="true" />
          </span>
          <h3 class="font-display mt-4 text-sm font-bold text-slate-900 sm:text-base">
            {{ item.title }}
          </h3>
          <p class="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
            {{ item.description }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
