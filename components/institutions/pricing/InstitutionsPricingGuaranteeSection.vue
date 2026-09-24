<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { institutionsGuaranteeSection } from '~/data/institutions-pricing'
</script>

<template>
  <section id="replacement-guarantee" class="relative scroll-mt-24 overflow-hidden section-surface-muted section-py"
    aria-labelledby="replacement-guarantee-heading">
    <div class="container-page relative">
      <CardHeader heading-id="replacement-guarantee-heading" :badge="institutionsGuaranteeSection.badge"
        :title="institutionsGuaranteeSection.title" :description="institutionsGuaranteeSection.description"
        :classes="institutionsGuaranteeSection.classes" />

      <!-- <p class="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-slate-600">
        {{ institutionsGuaranteeSection.intro }}
      </p> -->

      <div class="mt-10 grid grid-cols-1 gap-4 lg:mt-12 lg:grid-cols-2">
        <article v-for="(period, i) in institutionsGuaranteeSection.periods" :id="period.id" :key="period.id"
          class="rounded-[1.6rem] border border-slate-200/80 bg-white p-6 shadow-soft sm:p-7" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 80, duration: 450 } }">
          <span class="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
            aria-hidden="true">
            <Icon :icon="period.iconMdi" class="h-6 w-6" />
          </span>
          <p class="mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700">{{ period.window }}</p>
          <h3 class="font-display mt-1 text-xl font-extrabold text-slate-900 sm:text-2xl">{{ period.support }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-slate-600">{{ period.body }}</p>
        </article>
      </div>

      <div class="mt-5 overflow-hidden rounded-[1.6rem] border border-slate-200/80 bg-white p-6 shadow-soft sm:p-7"
        v-motion :initial="{ opacity: 0, y: 14 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 160, duration: 450 } }">
        <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
          {{ institutionsGuaranteeSection.processLabel }}
        </p>
        <ol class="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2.5" role="list">
          <li v-for="(step, i) in institutionsGuaranteeSection.process" :key="step" class="flex items-center gap-2">
            <span
              class="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-[13px] font-semibold text-slate-800">
              {{ step }}
            </span>
            <Icon v-if="i < institutionsGuaranteeSection.process.length - 1" icon="mdi:arrow-right"
              class="h-4 w-4 text-slate-300" aria-hidden="true" />
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
