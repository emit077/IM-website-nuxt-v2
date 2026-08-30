<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { cultureSection } from '~/data/careers'
</script>

<template>
  <section id="work-culture" class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py" aria-labelledby="work-culture-heading">
    <div class="container-page relative">
      <CardHeader
        heading-id="work-culture-heading"
        :badge="cultureSection.kicker"
        :title="cultureSection.title"
        :description="cultureSection.description"
        :classes="cultureSection.classes"
      />

      <div class="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
        <article
          class="flex flex-col rounded-[1.75rem] border border-slate-200/80 bg-white p-7 shadow-soft sm:p-9"
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }"
        >
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">{{ cultureSection.expectTitle }}</p>
          <ul class="mt-6 space-y-4" role="list">
            <li v-for="item in cultureSection.expect" :key="item.title" class="flex items-start gap-3.5">
              <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100" aria-hidden="true">
                <Icon :icon="item.iconMdi" class="h-5 w-5" />
              </span>
              <div class="min-w-0">
                <h3 class="font-display text-[15px] font-bold text-slate-900">{{ item.title }}</h3>
                <p class="mt-0.5 text-[13.5px] leading-relaxed text-slate-600">{{ item.description }}</p>
              </div>
            </li>
          </ul>
        </article>

        <article
          class="flex flex-col rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-7 text-white shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)] sm:p-9"
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80, duration: 450 } }"
        >
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-100">{{ cultureSection.benefitsTitle }}</p>
          <ul class="mt-6 flex-1 space-y-3" role="list">
            <li v-for="item in cultureSection.benefits" :key="item" class="flex items-start gap-2.5 text-[14px] font-medium text-white">
              <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/15 text-amber-300" aria-hidden="true">
                <IconCheck class="h-3 w-3" />
              </span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
