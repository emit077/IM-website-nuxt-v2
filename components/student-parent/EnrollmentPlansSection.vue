<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import {
  enrollmentPlans,
  planComparisonRows,
  premiumWhyChoose,
} from '~/data/student-parent'
</script>

<template>
  <section id="enrollment-plans" class="relative bg-white py-14 sm:py-16 lg:py-20"
    aria-labelledby="enrollment-plans-heading">
    <div class="container-page">
      <!-- Section header -->
      <div class="mx-auto max-w-2xl text-center">
        <span class="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Enrollment Plans</span>
        <h2 id="enrollment-plans-heading"
          class="font-display mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Start free, upgrade <span class="text-gradient-brand">when you're ready</span>
        </h2>
        <p class="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          Try the platform with a Free Student Profile, or unlock priority matching,
          detailed reports, and dedicated support with Premium.
        </p>
      </div>

      <!-- Plan cards -->
      <div class="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 lg:grid-cols-2">
        <article v-for="(plan, i) in enrollmentPlans" :key="plan.id" :class="[
          'relative flex flex-col rounded-3xl border bg-white p-6 sm:p-7',
          plan.variant === 'featured'
            ? 'border-blue-600 shadow-[0_20px_50px_-20px_rgba(37,99,235,0.35)]'
            : 'border-slate-200/80 shadow-soft',
        ]" v-motion :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80 + i * 100, duration: 500 } }">
          <span v-if="plan.variant === 'featured'"
            class="absolute -top-3 left-6 rounded-full bg-blue-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            Recommended
          </span>

          <div class="flex items-center gap-3">
            <span :class="[
              'grid h-11 w-11 shrink-0 place-items-center rounded-xl ring-1',
              plan.variant === 'featured'
                ? 'bg-blue-600 text-white ring-blue-500/30'
                : 'bg-slate-100 text-slate-600 ring-slate-200',
            ]">
              <Icon :icon="plan.iconMdi" class="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 class="font-display text-lg font-bold text-slate-900">{{ plan.name }}</h3>
              <p class="text-[13px] text-slate-500">{{ plan.tagline }}</p>
            </div>
          </div>

          <p class="mt-5 font-display text-3xl font-extrabold text-slate-900">
            {{ plan.price }}
            <span v-if="plan.priceNote" class="ml-1 text-sm font-medium text-slate-500">{{ plan.priceNote }}</span>
          </p>

          <p class="mt-3 text-sm leading-relaxed text-slate-600">{{ plan.description }}</p>

          <div class="mt-6 flex-1 border-t border-slate-100 pt-5">
            <p class="text-xs font-bold uppercase tracking-wide text-slate-500">{{ plan.featuresLabel }}</p>
            <ul class="mt-3 space-y-2" role="list">
              <li v-for="feature in plan.features" :key="feature"
                class="flex items-start gap-2.5 text-[13px] text-slate-600">
                <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                {{ feature }}
              </li>
            </ul>
          </div>

          <a :href="plan.cta.href" :class="[
            'mt-7 inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5',
            plan.variant === 'featured'
              ? 'bg-blue-600 text-white shadow-cta hover:bg-blue-700'
              : 'border border-slate-300 bg-white text-slate-800 hover:border-blue-400 hover:text-blue-700',
          ]">
            {{ plan.cta.label }}
          </a>
        </article>
      </div>

      <!-- Comparison table -->
      <div class="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-soft"
        v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
        <div class="border-b border-slate-200/80 px-5 py-4 sm:px-6">
          <h3 class="font-display text-base font-bold text-slate-900 sm:text-lg">Free vs Premium at a glance</h3>
        </div>

        <!-- Desktop table -->
        <div class="hidden sm:block">
          <table class="w-full text-left text-sm">
            <thead>
              <tr class="border-b border-slate-200/80 bg-slate-50/60 text-xs uppercase tracking-wide">
                <th class="px-6 py-3 font-semibold text-slate-500">Feature</th>
                <th class="px-6 py-3 font-semibold text-slate-500">Free</th>
                <th class="px-6 py-3 font-semibold text-blue-700">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in planComparisonRows" :key="row.feature"
                class="border-b border-slate-100 last:border-0">
                <td class="px-6 py-3 font-medium text-slate-800">{{ row.feature }}</td>
                <td class="px-6 py-3 text-slate-500">{{ row.free }}</td>
                <td class="px-6 py-3 font-medium text-blue-700">{{ row.premium }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Mobile stacked rows -->
        <ul class="divide-y divide-slate-100 sm:hidden" role="list">
          <li v-for="row in planComparisonRows" :key="row.feature" class="px-5 py-3.5">
            <p class="text-[13px] font-semibold text-slate-900">{{ row.feature }}</p>
            <div class="mt-1.5 grid grid-cols-2 gap-3 text-[12px]">
              <p class="text-slate-500"><span class="font-medium text-slate-400">Free: </span>{{ row.free }}</p>
              <p class="font-medium text-blue-700"><span class="text-blue-400">Premium: </span>{{ row.premium }}</p>
            </div>
          </li>
        </ul>
      </div>

      <!-- Why premium -->
      <div class="mx-auto mt-8 max-w-4xl rounded-3xl border border-slate-200/80 bg-slate-50/70 p-6 sm:p-7" v-motion
        :initial="{ opacity: 0, y: 12 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
        <h3 class="font-display text-base font-bold text-slate-900 sm:text-lg">Why families choose Premium</h3>
        <ul class="mt-4 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2" role="list">
          <li v-for="point in premiumWhyChoose" :key="point"
            class="flex items-start gap-2.5 text-[13px] text-slate-700">
            <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
            {{ point }}
          </li>
        </ul>
        <p class="mt-5 text-sm text-slate-600">
          At roughly <span class="font-semibold text-slate-900">₹100 per month</span>, Premium includes unlimited
          tutor access, progress reports, personalised recommendations, and 24/7 support.
        </p>
      </div>
    </div>
  </section>
</template>
