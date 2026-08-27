<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { journeySection } from '~/data/tutor-registration-plans'
</script>

<template>
  <section id="tutor-journey" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="tutor-journey-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="tutor-journey-heading" :badge="journeySection.badge" :title="journeySection.title"
        :classes="journeySection.classes" />

      <ol class="relative mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4" role="list">
        <li v-for="(step, i) in journeySection.steps" :key="step.no" class="relative" v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 60, duration: 420 } }">
          <span
            class="pointer-events-none absolute right-[-1rem] top-1/2 hidden h-px w-4 -translate-y-1/2 bg-slate-200 xl:block"
            :class="(i + 1) % 4 === 0 ? 'xl:hidden' : ''" aria-hidden="true" />
          <article
            class="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-cream-50/60 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-card sm:p-6">
            <div class="flex items-center justify-between gap-3">
              <span
                class="grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
                aria-hidden="true">
                <Icon :icon="step.iconMdi" class="h-5 w-5" />
              </span>
              <span class="font-display text-2xl font-extrabold text-blue-600/20">{{ step.no }}</span>
            </div>
            <h3 class="mt-4 font-display text-base font-bold text-slate-900">{{ step.title }}</h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ step.description }}</p>
          </article>
        </li>
      </ol>

      <p
        class="mx-auto mt-8 max-w-4xl rounded-2xl border border-blue-100 bg-blue-50/70 px-5 py-4 text-center font-display text-[14px] font-bold leading-relaxed text-blue-900 sm:text-[15px]">
        {{ journeySection.summary }}
      </p>
    </div>
  </section>
</template>
