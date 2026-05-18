<script setup lang="ts">
import CardHeader from '~/components/ui/cardheader.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import {
  commonPlanBenefits,
  paymentOptions,
  subscriptionPlans,
} from '~/data/student-parent'

const accentStyles = {
  amber: {
    border: 'border-amber-200/80',
    badge: 'bg-amber-100 text-amber-800',
    glow: 'hover:shadow-[0_20px_48px_-16px_rgba(245,158,11,0.25)]',
    icon: 'bg-amber-50 text-amber-700 ring-amber-100',
  },
  blue: {
    border: 'border-blue-400/80 ring-2 ring-blue-400/40',
    badge: 'bg-blue-600 text-white',
    glow: 'scale-[1.02] shadow-[0_24px_56px_-16px_rgba(37,99,235,0.35)] hover:shadow-[0_28px_64px_-14px_rgba(37,99,235,0.45)]',
    icon: 'bg-blue-600 text-white ring-blue-500/30',
  },
  violet: {
    border: 'border-violet-200/80',
    badge: 'bg-violet-100 text-violet-800',
    glow: 'hover:shadow-[0_20px_48px_-16px_rgba(139,92,246,0.25)]',
    icon: 'bg-violet-50 text-violet-700 ring-violet-100',
  },
}
</script>

<template>
  <section id="subscription-plans" class="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20"
    aria-labelledby="subscription-plans-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#eef1ff] to-transparent" />

    <div class="container-page relative">
      <CardHeader variant="variant-1" badge="SUBSCRIPTION PLANS PREVIEW"
        title="Flexible Learning Plans <span class='text-gradient-brand'>for Every Academic Goal</span>"
        description="Structured Time. Structured Learning. Structured Results. Whether your child needs daily homework assistance or intensive competitive exam preparation, our flexible subscription plans deliver measurable academic growth with complete transparency."
        content-class="mx-auto max-w-3xl !text-center [&_[data-slot=card-badge]]:mx-auto [&_[data-slot=card-title]]:text-center [&_[data-slot=card-description]]:mx-auto" />

      <p class="mx-auto mt-3 max-w-xl text-center text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">
        INDIAN MENTORS – Choose the Plan That Matches Your Child's Academic Journey
      </p>

      <!-- Plan cards -->
      <div class="mt-10 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3 lg:gap-5">
        <article v-for="(plan, i) in subscriptionPlans" :key="plan.id" :class="[
          'relative flex flex-col overflow-hidden rounded-[1.5rem] border bg-white p-6 transition duration-500 hover:-translate-y-1.5 sm:p-7',
          accentStyles[plan.accent].border,
          accentStyles[plan.accent].glow,
          plan.popular ? 'z-[1] lg:-mt-2 lg:mb-2' : '',
        ]" v-motion :initial="{ opacity: 0, y: 24 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 60 + i * 80, duration: 500 } }">
          <span v-if="plan.popular"
            class="absolute right-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
            :class="accentStyles[plan.accent].badge">
            ⭐ Most Popular
          </span>

          <div class="flex items-center gap-3">
            <span :class="[
              'grid h-12 w-12 place-items-center rounded-2xl text-2xl ring-1',
              accentStyles[plan.accent].icon,
            ]" aria-hidden="true">
              {{ plan.emoji }}
            </span>
            <div>
              <h3 class="font-display text-lg font-bold text-slate-900">{{ plan.name }}</h3>
              <p class="text-sm font-semibold text-slate-500">{{ plan.duration }}</p>
            </div>
          </div>

          <p class="mt-2 text-sm font-medium text-blue-700">{{ plan.subtitle }}</p>

          <dl class="mt-5 space-y-3 text-[13px]">
            <div>
              <dt class="font-semibold text-slate-800">🎯 Best For</dt>
              <dd class="mt-0.5 text-slate-600">{{ plan.bestFor }}</dd>
            </div>
            <div>
              <dt class="font-semibold text-slate-800">📘 Focus</dt>
              <dd class="mt-0.5 text-slate-600">{{ plan.focus }}</dd>
            </div>
            <div>
              <dt class="font-semibold text-slate-800">⭐ Ideal For</dt>
              <dd class="mt-1">
                <ul class="space-y-0.5 text-slate-600" role="list">
                  <li v-for="item in plan.idealFor" :key="item" class="before:mr-1.5 before:content-['•']">
                    {{ item }}
                  </li>
                </ul>
              </dd>
            </div>
            <div>
              <dt class="font-semibold text-slate-800">✔ Learning Outcome</dt>
              <dd class="mt-0.5 text-slate-600">{{ plan.learningOutcome }}</dd>
            </div>
            <div>
              <dt class="font-semibold text-slate-800">💬 Reports</dt>
              <dd class="mt-0.5 text-slate-600">{{ plan.reports }}</dd>
            </div>
            <div>
              <dt class="font-semibold text-slate-800">👨‍👩‍👧 Parent Engagement</dt>
              <dd class="mt-0.5 text-slate-600">{{ plan.parentEngagement }}</dd>
            </div>
            <div class="flex flex-wrap gap-3 pt-1">
              <span class="rounded-lg bg-slate-100 px-2.5 py-1 font-semibold text-slate-700">
                💰 {{ plan.priceRange }}
              </span>
              <span class="rounded-lg bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-700">
                🎁 {{ plan.discount }}
              </span>
            </div>
          </dl>

          <div class="mt-5 flex-1 border-t border-slate-100 pt-5">
            <p class="text-xs font-bold uppercase tracking-wide text-slate-500">⚡ Features</p>
            <ul class="mt-2 space-y-1.5" role="list">
              <li v-for="feat in plan.features" :key="feat" class="flex items-start gap-2 text-[12.5px] text-slate-600">
                <IconCheck class="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                {{ feat }}
              </li>
            </ul>
          </div>

          <a :href="plan.cta.href"
            :class="[
              'mt-6 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5',
              plan.popular
                ? 'bg-blue-600 text-white shadow-cta hover:bg-blue-700'
                : 'border-2 border-slate-200 bg-white text-slate-800 hover:border-blue-300 hover:text-blue-700',
            ]">
            {{ plan.cta.label }}
          </a>
        </article>
      </div>

      <!-- Common benefits -->
      <div class="mt-10 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6 sm:p-7"
        v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
        <h3 class="font-display text-base font-bold text-slate-900 sm:text-lg">
          🔄 Common Benefits Across All Plans
        </h3>
        <ul class="mt-4 flex flex-wrap gap-2" role="list">
          <li v-for="benefit in commonPlanBenefits" :key="benefit"
            class="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[13px] font-medium text-slate-700 shadow-sm ring-1 ring-slate-200/80">
            <IconCheck class="h-3.5 w-3.5 text-emerald-600" />
            {{ benefit }}
          </li>
        </ul>
      </div>

      <!-- Payment options -->
      <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div class="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-soft">
          <h4 class="font-display font-bold text-slate-900">💳 Payment Frequencies</h4>
          <ul class="mt-3 space-y-1.5" role="list">
            <li v-for="freq in paymentOptions.frequencies" :key="freq" class="text-sm text-slate-600">
              • {{ freq }}
            </li>
          </ul>
        </div>
        <div class="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-soft">
          <h4 class="font-display font-bold text-slate-900">Payment Methods</h4>
          <p class="mt-3 text-sm text-slate-600">
            {{ paymentOptions.methods.join(' | ') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
