<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { ecosystemSection, matchingSection, techFeatures, techSection } from '~/data/institutions'
</script>

<template>
  <section id="technology" class="relative scroll-mt-24 overflow-hidden section-surface-muted section-py"
    aria-labelledby="tech-heading">
    <div class="container-page relative">
      <CardHeader heading-id="tech-heading" :badge="techSection.badge" :title="techSection.title"
        :description="techSection.description" :classes="techSection.classes" />


      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li v-for="(feature, i) in techFeatures" :key="feature.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + (i % 6) * 40, duration: 380 } }">
          <article
            class="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-6">
            <span
              class="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="feature.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-4 font-display text-[15px] font-bold text-slate-900">{{ feature.title }}</h3>
            <p class="mt-1.5 text-[13px] leading-relaxed text-slate-600">{{ feature.description }}</p>
          </article>
        </li>
      </ul>

      <div class="mt-10 rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-soft sm:p-8" v-motion
        :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
        <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">{{ matchingSection.badge }}</p>
        <h3 class="font-display mt-2 text-xl font-bold text-slate-900 sm:text-2xl" v-html="matchingSection.title" />
        <p class="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">{{ matchingSection.description }}</p>
        <ol class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5" role="list">
          <li v-for="(step, i) in matchingSection.steps" :key="step.title"
            class="rounded-2xl border border-slate-100 bg-cream-50/70 p-4">
            <span class="font-display text-lg font-black text-blue-500/30">0{{ i + 1 }}</span>
            <h4 class="mt-1 font-display text-sm font-bold text-slate-900">{{ step.title }}</h4>
            <p class="mt-1 text-[12.5px] leading-relaxed text-slate-600">{{ step.detail }}</p>
          </li>
        </ol>
      </div>

      <div class="mt-6" v-motion :initial="{ opacity: 0, y: 14 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
        <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">{{ ecosystemSection.badge }}</p>
        <h3 class="font-display mt-2 text-xl font-bold text-slate-900 sm:text-2xl" v-html="ecosystemSection.title" />
        <p class="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">{{ ecosystemSection.description }}</p>
        <ul class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3" role="list">
          <li v-for="party in ecosystemSection.parties" :key="party.title"
            class="rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft">
            <span class="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
              aria-hidden="true">
              <Icon :icon="party.iconMdi" class="h-5 w-5" />
            </span>
            <h4 class="mt-4 font-display text-base font-bold text-slate-900">{{ party.title }}</h4>
            <p class="mt-2 text-[13px] text-slate-600"><span class="font-semibold text-slate-800">Need:</span> {{
              party.need }}</p>
            <p class="mt-1 text-[13px] text-slate-600"><span class="font-semibold text-slate-800">We provide:</span> {{
              party.provide }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
