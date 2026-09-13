<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { institutionsPricingChoose } from '~/data/institutions-pricing'
</script>

<template>
  <section id="which-model" class="relative scroll-mt-24 overflow-hidden section-surface-muted section-py"
    aria-labelledby="pricing-choose-heading">
    <div class="container-page relative">
      <CardHeader heading-id="pricing-choose-heading" :badge="institutionsPricingChoose.badge"
        :title="institutionsPricingChoose.title" :classes="institutionsPricingChoose.classes" />

      <div class="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
        <article v-for="(plan, i) in institutionsPricingChoose.plans" :key="plan.id" :class="[
          'flex flex-col rounded-[1.75rem] p-8 sm:p-10',
          plan.featured
            ? 'bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)]'
            : 'border border-slate-200/80 bg-white shadow-soft',
        ]" v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: i * 80, duration: 450 } }">
          <p :class="[
            'text-[11px] font-bold uppercase tracking-[0.16em]',
            plan.featured ? 'text-amber-200' : 'text-blue-600',
          ]">
            {{ plan.eyebrow }}
          </p>
          <h3 class="mt-2 font-display text-2xl font-extrabold">{{ plan.title }}</h3>

          <ul class="mt-6 flex-1 space-y-4" role="list">
            <li v-for="need in plan.needs" :key="need.title" class="flex items-start gap-3">
              <span :class="[
                'mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full',
                plan.featured ? 'bg-white/15 text-amber-300' : 'bg-emerald-50 text-emerald-600',
              ]" aria-hidden="true">
                <IconCheck class="h-3 w-3" />
              </span>
              <span>
                <span class="block text-[14px] font-bold">{{ need.title }}</span>
                <span :class="['mt-0.5 block text-[13.5px] leading-relaxed', plan.featured ? 'text-blue-50' : 'text-slate-600']">
                  {{ need.description }}
                </span>
              </span>
            </li>
          </ul>

          <div :class="[
            'mt-8 rounded-2xl px-4 py-3',
            plan.featured ? 'bg-white/10' : 'bg-slate-50 ring-1 ring-slate-200/80',
          ]">
            <p class="font-display text-lg font-extrabold">{{ plan.name }}</p>
            <p :class="['mt-0.5 text-sm font-medium', plan.featured ? 'text-blue-100' : 'text-slate-600']">
              {{ plan.price }}
            </p>
          </div>

          <a :href="plan.cta.href" :class="[
            'group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 sm:w-fit',
            plan.featured
              ? 'bg-white text-blue-700 hover:bg-cream-50'
              : 'bg-blue-600 text-white hover:bg-blue-700',
          ]">
            {{ plan.cta.label }}
            <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true" />
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
