<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { erpFeatures, erpSection } from '~/data/tutors'

const frameworkSteps = ['Teach', 'Track', 'Earn', 'Grow']
</script>

<template>
  <section id="tutor-erp" class="relative scroll-mt-20 section-surface-white section-py"
    aria-labelledby="tutor-erp-heading">
    <div class="container-page">
      <CardHeader heading-id="tutor-erp-heading" :badge="erpSection.badge" :title="erpSection.title"
        :description="erpSection.description" :classes="erpSection.classes" />
      <div class="mx-auto mt-8 flex flex-wrap items-center justify-center gap-2" v-motion
        :initial="{ opacity: 0, y: 10 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
        <template v-for="(step, i) in frameworkSteps" :key="step">
          <span
            class="rounded-full border border-slate-200/80 bg-white px-4 py-1.5 text-[13px] font-semibold text-slate-700">
            {{ step }}
          </span>
          <Icon v-if="i < frameworkSteps.length - 1" icon="mdi:arrow-right" class="h-3.5 w-3.5 text-slate-400"
            aria-hidden="true" />
        </template>
      </div>

      <ul class="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3" role="list">
        <li v-for="(feature, i) in erpFeatures" :key="feature.title" v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + (i % 6) * 40, duration: 400 } }">
          <article
            class="group flex h-full items-start gap-3.5 rounded-2xl border border-slate-200/70 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-soft sm:p-5">
            <span
              class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="feature.iconMdi" class="h-5 w-5" />
            </span>
            <div>
              <h3 class="font-display text-[15px] font-bold text-slate-900">{{ feature.title }}</h3>
              <p class="mt-1 text-[13px] leading-relaxed text-slate-500">{{ feature.description }}</p>
            </div>
          </article>
        </li>
      </ul>

      <div class="mt-10 text-center" v-motion :initial="{ opacity: 0, y: 10 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450, delay: 150 } }">
        <a href="#tutor-register"
          class="inline-flex items-center gap-2 rounded-2xl border border-blue-200 bg-blue-50/70 px-6 py-3 text-sm font-semibold text-blue-700 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white">
          <Icon icon="mdi:view-dashboard-outline" class="h-4 w-4" aria-hidden="true" />
          Explore Tutor Dashboard Features
        </a>
      </div>
    </div>
  </section>
</template>
