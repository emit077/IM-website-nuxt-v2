<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { tutorPlans, tutorPlansSection } from '~/data/tutors'
</script>

<template>
  <section id="tutor-plans" class="relative scroll-mt-20 section-surface-muted section-py"
    aria-labelledby="tutor-plans-heading">
    <div class="container-page">
      <CardHeader heading-id="tutor-plans-heading" :badge="tutorPlansSection.badge" :title="tutorPlansSection.title"
        :description="tutorPlansSection.description" :classes="tutorPlansSection.classes" />

      <div class="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 lg:grid-cols-2">
        <article v-for="(plan, i) in tutorPlans" :key="plan.id">

          <div :class="[
            'relative flex flex-col rounded-3xl border bg-white p-6 sm:p-7',
            plan.variant === 'featured'
              ? 'border-blue-600 shadow-[0_20px_50px_-20px_rgba(37,99,235,0.35)]'
              : 'border-slate-200/80 shadow-soft',
          ]" v-motion :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80 + i * 100, duration: 500 } }">
            <span v-if="plan.variant === 'featured'"
              class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
              Premium
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
          </div>
        </article>
      </div>
      <div class="mt-8 flex justify-center">
        <NuxtLink :to="tutorPlansSection.cta.href"
          class="group inline-flex items-center gap-2 text-[13.5px] font-semibold text-blue-700 transition hover:text-blue-800">
          {{ tutorPlansSection.cta.label }}
          <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true" />
        </NuxtLink>
      </div>

      <p class="mx-auto mt-6 max-w-2xl text-center text-[12.5px] leading-relaxed text-slate-500">
        {{ tutorPlansSection.footnote }}
      </p>
    </div>
  </section>
</template>
