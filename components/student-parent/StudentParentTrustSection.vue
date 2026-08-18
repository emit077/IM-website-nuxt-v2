<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { spTrust, spCycle } from '~/data/student-parent'
</script>

<template>
  <section id="trust" class="relative scroll-mt-28 overflow-hidden bg-[#f4f7fb] section-py"
    aria-labelledby="trust-heading">
    <div class="container-page relative">
      <CardHeader heading-id="trust-heading" :badge="spTrust.badge" :title="spTrust.title"
        :description="spTrust.description" :classes="spTrust.classes" />

      <ul class="mt-10 space-y-3" role="list">
        <li v-for="(item, i) in spTrust.items" :key="item.title" v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 400 } }">
          <article
            class="flex flex-col gap-3 rounded-[1.15rem] bg-white px-5 py-4 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.18)] sm:flex-row sm:items-center sm:gap-4 sm:px-6 sm:py-5">
            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-[0.7rem] bg-blue-600 text-white"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <span
              class="inline-flex w-fit shrink-0 items-center rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-blue-700 ring-1 ring-blue-100">
              {{ item.badge }}
            </span>
            <h3 class="shrink-0 font-display text-[15px] font-bold text-slate-900 sm:text-base">{{ item.title }}</h3>
            <span class="hidden h-4 w-px shrink-0 bg-slate-200 sm:block" aria-hidden="true" />
            <p class="min-w-0 text-[14px] leading-relaxed text-slate-500">{{ item.description }}</p>
          </article>
        </li>
      </ul>
    </div>
  </section>

  <section id="success-cycle" class="relative scroll-mt-28 overflow-hidden section-surface-white section-py"
    aria-labelledby="cycle-heading">
    <div class="container-page relative">
      <CardHeader heading-id="cycle-heading" :badge="spCycle.badge" :title="spCycle.title" :classes="spCycle.classes" />

      <ol class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
        <li v-for="(step, i) in spCycle.steps" :key="step.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 25 + i * 35, duration: 380 } }">
          <article
            class="relative flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft">
            <span class="font-display text-2xl font-black tabular-nums text-blue-500/20">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <h3 class="mt-2 font-display text-base font-bold uppercase tracking-wide text-slate-900">{{ step.title }}
            </h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ step.description }} </p>
          </article>
        </li>
      </ol>

      <p class="mx-auto mt-8 max-w-2xl text-center font-display text-lg font-bold text-slate-800 sm:text-xl">
        {{ spCycle.tagline }}
      </p>
    </div>
  </section>
</template>
