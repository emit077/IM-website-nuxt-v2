<script setup lang="ts">
import CardHeader from '~/components/ui/cardheader.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import {
  enrollmentPlans,
  planComparisonRows,
  premiumWhyChoose,
} from '~/data/student-parent'
</script>

<template>
  <section id="enrollment-plans" class="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20"
    aria-labelledby="enrollment-plans-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#eef1ff] to-transparent" />

    <div class="container-page relative">
      <CardHeader variant="variant-1" badge="🎓 Student Enrollment Plans"
        title="Flexible Learning Plans <span class='text-gradient-brand'>Designed for Every Student</span>"
        description="Students and parents can begin with a Free Student Profile to try the platform and book demo sessions, or upgrade to a Premium Student Profile for advanced academic support, personalised tutor recommendations, and dedicated assistance."
        content-class="mx-auto max-w-3xl !text-center [&_[data-slot=card-badge]]:mx-auto [&_[data-slot=card-title]]:text-center [&_[data-slot=card-description]]:mx-auto" />

      <!-- Plan cards -->
      <div class="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        <article v-for="(plan, i) in enrollmentPlans" :key="plan.id" :class="[
          'relative flex flex-col overflow-hidden rounded-[1.5rem] border p-6 sm:p-8',
          plan.variant === 'featured'
            ? 'border-blue-300/80 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700 text-white shadow-[0_24px_60px_-20px_rgba(37,99,235,0.55)] ring-2 ring-blue-400/30'
            : 'border-slate-200/80 bg-white shadow-soft',
        ]" v-motion :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80 + i * 100, duration: 500 } }">
          <span v-if="plan.variant === 'featured'" aria-hidden="true"
            class="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

          <div class="relative">
            <span class="text-2xl" aria-hidden="true">{{ plan.emoji }}</span>
            <h3 :class="[
              'font-display mt-3 text-xl font-bold sm:text-2xl',
              plan.variant === 'featured' ? 'text-white' : 'text-slate-900',
            ]">
              {{ plan.name }}
            </h3>
            <p :class="[
              'mt-1 font-display text-2xl font-extrabold sm:text-3xl',
              plan.variant === 'featured' ? 'text-white' : 'text-blue-700',
            ]">
              {{ plan.price }}
              <span v-if="plan.priceNote" :class="[
                'block text-sm font-medium sm:inline sm:ml-2',
                plan.variant === 'featured' ? 'text-blue-100' : 'text-slate-500',
              ]">
                — {{ plan.priceNote }}
              </span>
            </p>
            <p :class="[
              'mt-3 text-sm leading-relaxed',
              plan.variant === 'featured' ? 'text-blue-50/90' : 'text-slate-600',
            ]">
              {{ plan.description }}
            </p>
          </div>

          <div class="relative mt-6 flex-1">
            <p :class="[
              'text-xs font-bold uppercase tracking-wide',
              plan.variant === 'featured' ? 'text-blue-100' : 'text-slate-500',
            ]">
              {{ plan.featuresLabel }}
            </p>
            <ul class="mt-3 space-y-2" role="list">
              <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-2.5 text-[13px]">
                <IconCheck :class="[
                  'mt-0.5 h-4 w-4 shrink-0',
                  plan.variant === 'featured' ? 'text-emerald-300' : 'text-emerald-600',
                ]" />
                <span :class="plan.variant === 'featured' ? 'text-blue-50/95' : 'text-slate-600'">{{ feature }}</span>
              </li>
            </ul>
          </div>

          <div class="relative mt-6">
            <p :class="[
              'text-xs font-bold uppercase tracking-wide',
              plan.variant === 'featured' ? 'text-blue-100' : 'text-slate-500',
            ]">
              Best For
            </p>
            <ul class="mt-2 space-y-1" role="list">
              <li v-for="item in plan.bestFor" :key="item" :class="[
                'text-[13px] before:mr-2 before:content-[\'•\']',
                plan.variant === 'featured' ? 'text-blue-50/90' : 'text-slate-600',
              ]">
                {{ item }}
              </li>
            </ul>
          </div>

          <a :href="plan.cta.href" :class="[
            'relative mt-8 inline-flex w-full items-center justify-center rounded-2xl px-6 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5',
            plan.variant === 'featured'
              ? 'bg-white text-blue-700 shadow-lg hover:bg-blue-50'
              : 'bg-blue-600 text-white shadow-cta hover:bg-blue-700',
          ]">
            {{ plan.cta.label }}
          </a>
        </article>
      </div>

      <!-- Comparison table -->
      <div class="mt-14 overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-soft"
        v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }">
        <div class="border-b border-slate-200/80 bg-slate-50/80 px-5 py-4 sm:px-6">
          <h3 class="font-display text-lg font-bold text-slate-900 sm:text-xl">
            📊 Plan Comparison — Free vs Premium Student Profile
          </h3>
        </div>

        <!-- Desktop table -->
        <div class="hidden overflow-x-auto sm:block">
          <table class="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr class="border-b border-slate-200/80 bg-white">
                <th class="px-5 py-4 font-semibold text-slate-900 sm:px-6">Feature</th>
                <th class="px-5 py-4 font-semibold text-slate-600 sm:px-6">Free Profile</th>
                <th class="px-5 py-4 font-semibold text-blue-700 sm:px-6">Premium Profile</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, ri) in planComparisonRows" :key="row.feature"
                :class="ri % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'"
                class="border-b border-slate-100 last:border-0">
                <td class="px-5 py-3.5 font-medium text-slate-800 sm:px-6">{{ row.feature }}</td>
                <td class="px-5 py-3.5 text-slate-600 sm:px-6">{{ row.free }}</td>
                <td class="px-5 py-3.5 font-medium text-blue-700 sm:px-6">{{ row.premium }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Mobile cards -->
        <ul class="divide-y divide-slate-200/80 sm:hidden" role="list">
          <li v-for="row in planComparisonRows" :key="row.feature" class="px-4 py-4">
            <p class="font-semibold text-slate-900">{{ row.feature }}</p>
            <div class="mt-2 grid grid-cols-2 gap-3 text-[13px]">
              <div>
                <span class="text-xs font-medium text-slate-500">Free</span>
                <p class="mt-0.5 text-slate-600">{{ row.free }}</p>
              </div>
              <div>
                <span class="text-xs font-medium text-blue-600">Premium</span>
                <p class="mt-0.5 font-medium text-blue-700">{{ row.premium }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Why Premium -->
      <div class="mt-10 rounded-[1.5rem] border border-amber-200/80 bg-gradient-to-br from-amber-50 to-orange-50/50 p-6 sm:p-8"
        v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 280 } }">
        <h3 class="font-display text-lg font-bold text-slate-900 sm:text-xl">
          💡 Why Choose the Premium Plan?
        </h3>
        <p class="mt-2 text-sm text-slate-600">
          Students enrolled under the Premium Student Profile receive a fully structured personalised learning experience.
        </p>
        <ul class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2" role="list">
          <li v-for="point in premiumWhyChoose" :key="point" class="flex items-start gap-2 text-[13px] text-slate-700">
            <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
            {{ point }}
          </li>
        </ul>
      </div>

      <!-- Premium value strip -->
      <div
        class="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-blue-200/80 bg-blue-50/60 px-6 py-5 text-center sm:flex-row sm:text-left"
        v-motion :initial="{ opacity: 0 }" :visibleOnce="{ opacity: 1, transition: { delay: 320 } }">
        <div>
          <p class="font-display font-bold text-slate-900">💰 Premium Value</p>
          <p class="mt-1 text-sm text-slate-600">
            For just ₹100 per month: unlimited tutor access, detailed progress reports, personalised recommendations, and 24/7 support.
          </p>
        </div>
        <div class="flex shrink-0 flex-col gap-2 sm:flex-row">
          <a href="#book-demo" class="btn-primary !px-5 !py-2.5 text-sm">Create Free Student Profile</a>
          <a href="#book-demo"
            class="inline-flex items-center justify-center rounded-2xl border-2 border-blue-600 bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50">
            Upgrade to Premium
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
