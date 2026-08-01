<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { courseMatchingSection } from '~/data/academic-coverage'

const activeStep = ref(0)
const steps = courseMatchingSection.flow
const criteria = courseMatchingSection.criteria

function selectStep(index: number) {
  activeStep.value = index
}
</script>

<template>
  <section id="course-matching" class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py"
    aria-labelledby="course-matching-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-28 -top-24 h-96 w-96 rounded-full bg-blue-200/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-sky-200/20 blur-3xl" />

    <div class="container-page relative z-[1]">
      <div class="mx-auto max-w-3xl text-center">
        <CardHeader heading-id="course-matching-heading" :badge="courseMatchingSection.kicker"
          :title="courseMatchingSection.title" :description="courseMatchingSection.description"
          :classes="courseMatchingSection.classes" />
      </div>

      <!-- Match journey: interactive steps -->
      <div class="mt-12 lg:mt-14" v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <div class="grid gap-3 sm:grid-cols-3 sm:gap-4">
          <button v-for="(step, i) in steps" :key="step.step" type="button" :class="[
            'group relative overflow-hidden rounded-[24px] border p-5 text-left transition duration-300 sm:p-6',
            activeStep === i
              ? 'border-blue-300 bg-white shadow-[0_18px_40px_-22px_rgba(37,99,235,0.45)] ring-1 ring-blue-100'
              : 'border-slate-200/80 bg-white/70 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-soft',
          ]" :aria-pressed="activeStep === i" @click="selectStep(i)">
            <span aria-hidden="true" :class="[
              'pointer-events-none absolute -right-1 -top-3 select-none font-display text-[5.5rem] font-black leading-none transition',
              activeStep === i ? 'text-blue-100' : 'text-slate-100',
            ]">
              {{ step.step }}
            </span>

            <span :class="[
              'relative grid h-11 w-11 place-items-center rounded-2xl transition',
              activeStep === i
                ? 'bg-blue-600 text-white shadow-[0_10px_24px_-12px_rgba(37,99,235,0.7)]'
                : 'bg-slate-100 text-slate-600 ring-1 ring-slate-200',
            ]">
              <Icon :icon="step.iconMdi" class="h-5 w-5" />
            </span>

            <p class="relative mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
              Step {{ step.step }}
            </p>
            <h3 class="relative mt-1.5 font-display text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
              {{ step.title }}
            </h3>
            <p class="relative mt-2 text-[13px] leading-relaxed text-slate-500">
              {{ step.description }}
            </p>
          </button>
        </div>

        <!-- Active step detail -->
        <div
          class="relative mt-4 overflow-hidden rounded-[24px] border border-slate-200/80 bg-white px-5 py-5 shadow-soft sm:px-7 sm:py-6">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <span
              class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100"
              aria-hidden="true">
              <Icon :icon="steps[activeStep]!.iconMdi" class="h-6 w-6" />
            </span>
            <div class="min-w-0 flex-1">
              <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                How step {{ steps[activeStep]!.step }} works
              </p>
              <p class="mt-1 text-[15px] leading-relaxed text-slate-600">
                {{ steps[activeStep]!.detail }}
              </p>
            </div>
            <div class="flex shrink-0 gap-2">
              <button v-for="(_, i) in steps" :key="`dot-${i}`" type="button" :class="[
                'h-2.5 rounded-full transition',
                activeStep === i ? 'w-7 bg-blue-600' : 'w-2.5 bg-slate-200 hover:bg-slate-300',
              ]" :aria-label="`Show step ${i + 1}`" @click="selectStep(i)" />
            </div>
          </div>
        </div>
      </div>

      <!-- Matching factors -->
      <div class="mt-12 lg:mt-14">
        <div class="mx-auto max-w-2xl text-center">
          <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
            {{ courseMatchingSection.factorsTitle }}
          </p>
          <p class="mt-2 text-sm text-slate-500 sm:text-base">
            {{ courseMatchingSection.factorsDescription }}
          </p>
        </div>

        <ul class="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5" role="list">
          <li v-for="(item, i) in criteria" :key="item.label"
            class="group relative overflow-hidden rounded-[22px] border border-slate-200/80 bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-card sm:p-5"
            v-motion :initial="{ opacity: 0, y: 12 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 50 + i * 50, duration: 400 } }">
            <span aria-hidden="true"
              class="pointer-events-none absolute -bottom-3 -right-3 text-slate-900/[0.04] transition group-hover:scale-105">
              <Icon :icon="item.iconMdi" class="h-20 w-20" />
            </span>
            <span
              class="relative grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-100"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <p class="relative mt-3 font-display text-[15px] font-bold text-slate-900">
              {{ item.label }}
            </p>
            <p class="relative mt-1 text-[12.5px] leading-relaxed text-slate-500">
              {{ item.description }}
            </p>
          </li>
        </ul>
      </div>

      <!-- CTA strip -->
      <div
        class="mt-10 overflow-hidden rounded-[24px] border border-blue-200/70 bg-gradient-to-br from-blue-700 via-blue-600 to-sky-600 px-5 py-6 shadow-[0_18px_40px_-24px_rgba(37,99,235,0.55)] sm:mt-12 sm:px-8 sm:py-7"
        v-motion :initial="{ opacity: 0, y: 12 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
        <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div class="min-w-0">
            <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-100">
              Ready to get matched?
            </p>
            <p class="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
              Start with a free demo — we’ll handle the matching.
            </p>
            <p class="mt-1.5 text-sm text-blue-100/90">
              {{ courseMatchingSection.supporting }}
            </p>
          </div>
          <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a :href="courseMatchingSection.ctaHref" class="ac-btn-lime">
              {{ courseMatchingSection.ctaLabel }}
              <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
            </a>
            <a :href="courseMatchingSection.secondaryCtaHref"
              class="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10">
              <Icon icon="mdi:calendar-account-outline" class="h-4 w-4" aria-hidden="true" />
              {{ courseMatchingSection.secondaryCtaLabel }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
