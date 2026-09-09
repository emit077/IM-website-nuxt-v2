<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { institutionsGuaranteeSection } from '~/data/institutions-pricing'
</script>

<template>
  <section id="replacement-guarantee" class="relative scroll-mt-24 overflow-hidden bg-white section-py"
    aria-labelledby="replacement-guarantee-heading">
    <div class="container-page relative">
      <CardHeader heading-id="replacement-guarantee-heading" :badge="institutionsGuaranteeSection.badge"
        :title="institutionsGuaranteeSection.title" :description="institutionsGuaranteeSection.description"
        :classes="institutionsGuaranteeSection.classes" />

      <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12">
        <article v-for="(period, i) in institutionsGuaranteeSection.periods" :id="period.id" :key="period.id"
          class="rounded-[1.6rem] border border-slate-200/80 bg-white p-6 shadow-soft sm:p-7" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 80, duration: 450 } }">
          <span class="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
            aria-hidden="true">
            <Icon :icon="period.iconMdi" class="h-6 w-6" />
          </span>
          <p class="mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700">Replacement period</p>
          <h3 class="font-display mt-1 text-2xl font-extrabold text-slate-900">{{ period.window }}</h3>
          <p class="mt-2 text-sm font-medium text-slate-600">{{ period.support }}</p>
        </article>
      </div>

      <div class="mt-5 overflow-hidden rounded-[1.6rem] border border-slate-200/80 bg-slate-50/80 p-6 sm:p-7" v-motion
        :initial="{ opacity: 0, y: 14 }" :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 160, duration: 450 } }">
        <p class="text-sm leading-relaxed text-slate-700">{{ institutionsGuaranteeSection.appliesNote }}</p>
        <p class="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
          {{ institutionsGuaranteeSection.exclusionsTitle }}
        </p>
        <ul class="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3" role="list">
          <li v-for="item in institutionsGuaranteeSection.exclusions" :key="item"
            class="flex items-start gap-2.5 rounded-xl bg-white px-3 py-2.5 text-[13px] text-slate-700 ring-1 ring-slate-200/80">
            <Icon icon="mdi:close-circle-outline" class="mt-0.5 h-4 w-4 shrink-0 text-rose-500" aria-hidden="true" />
            {{ item }}
          </li>
        </ul>
        <p class="mt-5 flex items-start gap-2 text-sm font-medium text-slate-800">
          <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
          {{ institutionsGuaranteeSection.closing }}
        </p>
      </div>
    </div>
  </section>
</template>
