<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeader.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import {
  commonPlanBenefits,
  paymentOptions,
  subscriptionPlans,
  subscriptionPlansSection,
} from '~/data/student-parent'

const accentStyles = {
  amber: { bar: 'bg-amber-400', icon: 'bg-amber-50 text-amber-600 ring-amber-100' },
  blue: { bar: 'bg-blue-600', icon: 'bg-blue-600 text-white ring-blue-500/30' },
  violet: { bar: 'bg-violet-500', icon: 'bg-violet-50 text-violet-600 ring-violet-100' },
} as const
</script>

<template>
  <section id="subscription-plans" class="relative bg-white section-py"
    aria-labelledby="subscription-plans-heading">
    <div class="container-page">
      <CardHeader heading-id="subscription-plans-heading" :badge="subscriptionPlansSection.badge"
        :title="subscriptionPlansSection.title" :description="subscriptionPlansSection.description"
        :classes="subscriptionPlansSection.classes" />
      <div class="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <article v-for="(plan, i) in subscriptionPlans" :key="plan.id" :class="[
          'relative flex flex-col overflow-hidden rounded-3xl border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-card',
          plan.popular ? 'border-blue-600 shadow-[0_20px_50px_-20px_rgba(37,99,235,0.35)]' : 'border-slate-200/80 shadow-soft',
        ]" v-motion :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 60 + i * 80, duration: 500 } }">
          <span :class="['h-1.5 w-full', accentStyles[plan.accent].bar]" aria-hidden="true" />

          <div class="flex flex-1 flex-col p-6 sm:p-7">
            <div class="flex items-start justify-between gap-3">
              <div class="flex items-center gap-3">
                <span :class="[
                  'grid h-11 w-11 shrink-0 place-items-center rounded-xl ring-1',
                  accentStyles[plan.accent].icon,
                ]" aria-hidden="true">
                  <Icon :icon="plan.iconMdi" class="h-5 w-5" />
                </span>
                <div>
                  <h3 class="font-display text-lg font-bold text-slate-900">{{ plan.name }}</h3>
                  <p class="text-[13px] font-medium text-slate-500">{{ plan.duration }}</p>
                </div>
              </div>
              <span v-if="plan.popular"
                class="rounded-full bg-blue-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                Popular
              </span>
            </div>

            <p class="mt-4 text-sm leading-relaxed text-slate-600">{{ plan.focus }}</p>

            <dl class="mt-5 space-y-3 border-t border-slate-100 pt-5 text-[13px]">
              <div class="flex gap-2">
                <dt class="w-24 shrink-0 font-semibold text-slate-500">Best for</dt>
                <dd class="text-slate-700">{{ plan.bestFor }}</dd>
              </div>
              <div class="flex gap-2">
                <dt class="w-24 shrink-0 font-semibold text-slate-500">Reports</dt>
                <dd class="text-slate-700">{{ plan.reports }}</dd>
              </div>
              <div class="flex gap-2">
                <dt class="w-24 shrink-0 font-semibold text-slate-500">Parents</dt>
                <dd class="text-slate-700">{{ plan.parentEngagement }}</dd>
              </div>
              <div class="flex gap-2">
                <dt class="w-24 shrink-0 font-semibold text-slate-500">Discount</dt>
                <dd class="text-slate-700">{{ plan.discount }}</dd>
              </div>
            </dl>

            <div class="mt-5 flex-1 border-t border-slate-100 pt-5">
              <p class="text-xs font-bold uppercase tracking-wide text-slate-500">Includes</p>
              <ul class="mt-2.5 space-y-2" role="list">
                <li v-for="feat in plan.features" :key="feat"
                  class="flex items-start gap-2.5 text-[13px] text-slate-600">
                  <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  {{ feat }}
                </li>
              </ul>
            </div>

            <a :href="plan.cta.href" :class="[
              'mt-6 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5',
              plan.popular
                ? 'bg-blue-600 text-white shadow-cta hover:bg-blue-700'
                : 'border border-slate-300 bg-white text-slate-800 hover:border-blue-400 hover:text-blue-700',
            ]">
              {{ plan.cta.label }}
            </a>
          </div>
        </article>
      </div>
      <div class="mt-10 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2">
        <div class="rounded-3xl border border-slate-200/80 bg-cream-50/70 p-6 sm:p-7" v-motion
          :initial="{ opacity: 0, y: 12 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
          <h3 class="font-display text-base font-bold text-slate-900">Included in every plan</h3>
          <ul class="mt-4 space-y-2.5" role="list">
            <li v-for="benefit in commonPlanBenefits" :key="benefit"
              class="flex items-start gap-2.5 text-[13px] text-slate-700">
              <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              {{ benefit }}
            </li>
          </ul>
        </div>

        <div class="rounded-3xl border border-slate-200/80 bg-cream-50/70 p-6 sm:p-7" v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450, delay: 80 } }">
          <h3 class="font-display text-base font-bold text-slate-900">Flexible payments</h3>
          <ul class="mt-4 space-y-2.5" role="list">
            <li v-for="freq in paymentOptions.frequencies" :key="freq"
              class="flex items-start gap-2.5 text-[13px] text-slate-700">
              <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
              {{ freq }}
            </li>
          </ul>
          <p class="mt-4 border-t border-slate-200/80 pt-4 text-[13px] text-slate-500">
            Pay via {{ paymentOptions.methods.join(', ') }} — all through a secure gateway.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
