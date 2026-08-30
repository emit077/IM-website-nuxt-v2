<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { standardsSection } from '~/data/careers'
</script>

<template>
  <section id="professional-standards" class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py" aria-labelledby="standards-heading">
    <div class="container-page relative">
      <CardHeader heading-id="standards-heading" :badge="standardsSection.kicker" :title="standardsSection.title" :classes="standardsSection.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li
          v-for="(item, i) in standardsSection.items"
          :key="item.title"
          v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + i * 35, duration: 360 } }"
        >
          <article class="flex h-full items-start gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-soft">
            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100" aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <div class="min-w-0">
              <h3 class="font-display text-[15px] font-bold text-slate-900">{{ item.title }}</h3>
              <p class="mt-1 text-[13px] leading-relaxed text-slate-600">{{ item.description }}</p>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
