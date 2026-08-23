<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { enrollmentPlans, enrollmentStart } from '~/data/student-parent'
</script>

<template>
  <section id="enrollment-plans" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="profiles-heading">
    <div class="container-page relative">
      <CardHeader heading-id="profiles-heading" :badge="enrollmentStart.badge" :title="enrollmentStart.title"
        :description="enrollmentStart.description" :classes="enrollmentStart.classes" />

      <ul class="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6" role="list">
        <li v-for="(plan, i) in enrollmentPlans" :key="plan.id" v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 80, duration: 450 } }">
          <article :class="[
            'relative flex h-full flex-col overflow-hidden rounded-[1.5rem] p-7 shadow-soft sm:p-8',
            plan.variant === 'featured'
              ? 'bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)]'
              : 'border border-slate-200/80 bg-white',
          ]">
            <span v-if="plan.badge"
              class="absolute right-5 top-5 rounded-full bg-amber-300 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-900">
              {{ plan.badge }}
            </span>

            <p :class="[
              'text-[11px] font-bold uppercase tracking-[0.16em]',
              plan.variant === 'featured' ? 'text-blue-100' : 'text-blue-600',
            ]">
              {{ plan.name }}
            </p>
            <p class="mt-4 font-display text-4xl font-extrabold tracking-tight">
              {{ plan.price }}
              <span v-if="plan.priceNote" class="text-lg font-semibold opacity-80">{{ plan.priceNote }}</span>
              <span v-else class="text-lg font-bold opacity-80 line-through">&nbsp;&nbsp;₹ 1200 / Year&nbsp;</span>
            </p>
            <p class="mt-4 font-display text-lg font-bold">{{ plan.tagline }}</p>
            <p
              :class="['mt-3 text-sm leading-relaxed', plan.variant === 'featured' ? 'text-blue-50' : 'text-slate-600']">
              {{ plan.description }}
            </p>

            <p :class="[
              'mt-6 text-[11px] font-bold uppercase tracking-[0.14em]',
              plan.variant === 'featured' ? 'text-amber-200' : 'text-slate-400',
            ]">
              {{ plan.featuresLabel }}
            </p>
            <ul class="mt-3 flex-1 space-y-2.5" role="list">
              <li v-for="item in plan.bestFor" :key="item" class="flex items-start gap-2.5 text-[14px] font-medium">
                <span :class="[
                  'mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full',
                  plan.variant === 'featured' ? 'bg-white/15 text-amber-300' : 'bg-emerald-50 text-emerald-600',
                ]" aria-hidden="true">
                  <IconCheck class="h-3 w-3" />
                </span>
                <span>{{ item }}</span>
              </li>
            </ul>

            <a :href="plan.cta.href" :class="[
              'mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5',
              plan.variant === 'featured'
                ? 'bg-white text-blue-700 hover:bg-blue-50'
                : 'bg-blue-600 text-white hover:bg-blue-700',
            ]">
              {{ plan.cta.label }}
              <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
            </a>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
