<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import {
  institutionsPricingPackages,
  institutionsPricingSection,
} from '~/data/institutions-pricing'

const accentClasses: Record<string, { chip: string; check: string }> = {
  emerald: { chip: 'bg-emerald-50 text-emerald-600 ring-emerald-100', check: 'text-emerald-600' },
  blue: { chip: 'bg-blue-50 text-blue-600 ring-blue-100', check: 'text-blue-600' },
  indigo: { chip: 'bg-indigo-50 text-indigo-600 ring-indigo-100', check: 'text-indigo-600' },
}
</script>

<template>
  <section id="institutional-pricing" class="relative scroll-mt-24 overflow-hidden bg-white section-py"
    aria-labelledby="institutional-pricing-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-emerald-200/20 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="institutional-pricing-heading" :badge="institutionsPricingSection.badge"
        :title="institutionsPricingSection.title" :description="institutionsPricingSection.description"
        :classes="institutionsPricingSection.classes" />

      <ul class="mx-auto mt-10 grid max-w-4xl grid-cols-1 items-stretch gap-5 lg:mt-12 lg:grid-cols-2" role="list">
        <li v-for="(plan, i) in institutionsPricingPackages" :key="plan.id" v-motion :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 50 + i * 80, duration: 480 } }">
          <article :class="[
            'relative flex h-full flex-col overflow-hidden rounded-[1.75rem] px-6 py-7 sm:px-7',
            plan.featured
              ? 'bg-blue-700 text-white shadow-[0_28px_60px_-20px_rgba(29,78,216,0.55)]'
              : 'border border-slate-200/80 bg-white text-slate-800 shadow-soft',
          ]">
            <span v-if="plan.badge" :class="[
              'absolute right-0 top-5 rounded-l-md px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide',
              plan.featured ? 'bg-amber-300 text-slate-900' : 'bg-slate-100 text-slate-700',
            ]">
              {{ plan.badge }}
            </span>

            <div class="flex items-center gap-3 pr-24">
              <h3 :class="[
                'font-display text-xl font-extrabold tracking-tight sm:text-2xl',
                plan.featured ? 'text-white' : 'text-slate-800',
              ]">
                {{ plan.name }}
              </h3>
            </div>

            <p class="mt-5 font-display text-[2.15rem] font-extrabold leading-none tracking-tight sm:text-[2.4rem]">
              {{ plan.price }}
            </p>
            <p :class="['mt-2 text-sm', plan.featured ? 'text-white/70' : 'text-slate-500']">
              {{ plan.priceNote }}
            </p>
            <p
              :class="['mt-3 line-clamp-2 min-h-[3.25em] text-[13.5px] leading-relaxed', plan.featured ? 'text-white/80' : 'text-slate-600']">
              {{ plan.tagline }}
            </p>

            <ul class="mt-6 flex-1 space-y-2.5" role="list">
              <li v-for="item in plan.includes.slice(0, 5)" :key="item" class="flex items-start gap-2.5 text-[13.5px] leading-snug">
                <span :class="[
                  'mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full',
                  plan.featured ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600',
                ]" aria-hidden="true">
                  <IconCheck class="h-2.5 w-2.5" />
                </span>
                <span>{{ item }}</span>
              </li>
            </ul>

            <NuxtLink :to="institutionsPricingSection.cta.href + '#' + plan.id" :class="[
              'mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5',
              plan.featured
                ? 'bg-white text-blue-700 hover:bg-cream-50'
                : 'bg-blue-600 text-white shadow-cta hover:bg-blue-700',
            ]">
              View {{ plan.name }} details
              <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
            </NuxtLink>
          </article>
        </li>
      </ul>

      <div class="mt-8 flex flex-col items-center gap-4 text-center sm:mt-10">
        <ActionBtn :href="institutionsPricingSection.cta.href" :label="institutionsPricingSection.cta.label"
          variant="primary" />
        <p class="max-w-2xl text-[12.5px] leading-relaxed text-slate-500">
          {{ institutionsPricingSection.note }}
        </p>
      </div>
    </div>
  </section>
</template>
