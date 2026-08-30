<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { whoCanApplySection } from '~/data/careers'
</script>

<template>
  <section id="who-can-apply" class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py" aria-labelledby="who-can-apply-heading">
    <div class="container-page relative">
      <CardHeader
        heading-id="who-can-apply-heading"
        :badge="whoCanApplySection.kicker"
        :title="whoCanApplySection.title"
        :description="whoCanApplySection.description"
        :classes="whoCanApplySection.classes"
      />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2" role="list">
        <li
          v-for="(item, i) in whoCanApplySection.items"
          :key="item.title"
          v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 25 + i * 40, duration: 360 } }"
        >
          <article class="flex h-full items-start gap-3.5 rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-soft">
            <span class="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100" aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <div class="min-w-0">
              <h3 class="font-display text-[15px] font-bold text-slate-900">{{ item.title }}</h3>
              <p class="mt-1 text-[13.5px] leading-relaxed text-slate-600">{{ item.description }}</p>
            </div>
          </article>
        </li>
      </ul>

      <article
        class="mt-6 rounded-[1.5rem] border border-blue-100 bg-white p-6 shadow-soft sm:p-8"
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 400, delay: 120 } }"
      >
        <h3 class="font-display text-lg font-bold text-slate-900">{{ whoCanApplySection.educatorsNote.title }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ whoCanApplySection.educatorsNote.description }}</p>
      </article>
    </div>
  </section>
</template>
