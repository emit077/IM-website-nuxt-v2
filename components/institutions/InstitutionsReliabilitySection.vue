<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeader.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { reliabilityPillars, reliabilitySection } from '~/data/institutions'
</script>

<template>
  <section id="recruitment-reliability" class="relative section-surface-muted section-py"
    aria-labelledby="reliability-heading">
    <div class="container-page">
      <CardHeader heading-id="reliability-heading" :badge="reliabilitySection.badge" :title="reliabilitySection.title"
        :description="reliabilitySection.description" :classes="reliabilitySection.classes" />

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
