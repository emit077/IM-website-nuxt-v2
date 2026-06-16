<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { reliabilityPillars } from '~/data/institutions'
</script>

<template>
  <section id="recruitment-reliability" class="relative bg-[#f8fafc] py-14 sm:py-16 lg:py-20"
    aria-labelledby="reliability-heading">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <span class="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Quality Assurance</span>
        <h2 id="reliability-heading"
          class="font-display mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          What makes our recruitment <span class="text-gradient-brand">reliable?</span>
        </h2>
        <p class="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          Our teacher recruitment services are built around quality assurance, verification, and efficiency.
        </p>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        <article v-for="(pillar, i) in reliabilityPillars" :key="pillar.id"
          :class="i === reliabilityPillars.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + (i % 3) * 60, duration: 450 } }">
          <div
            class="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-soft sm:p-7">
            <span
              class="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="pillar.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="font-display mt-4 text-base font-bold text-slate-900 sm:text-lg">
              {{ pillar.title }}
            </h3>
            <p class="mt-2 text-[13px] leading-relaxed text-slate-600">
              {{ pillar.description }}
            </p>
            <ul class="mt-3.5 flex-1 space-y-2" role="list">
              <li v-for="point in pillar.points" :key="point"
                class="flex items-start gap-2.5 text-[13px] text-slate-700">
                <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                {{ point }}
              </li>
            </ul>
            <p v-if="pillar.footnote" class="mt-4 border-t border-slate-100 pt-3.5 text-[12px] italic text-slate-500">
              {{ pillar.footnote }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
