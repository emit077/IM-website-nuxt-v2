<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { freePlanSection } from '~/data/tutor-registration-plans'
</script>

<template>
  <section id="free-plan" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="free-plan-heading">
    <div class="container-page relative">
      <div class="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <div class="lg:col-span-5">
          <CardHeader align="left" heading-id="free-plan-heading" :badge="freePlanSection.badge"
            :title="freePlanSection.title" :description="freePlanSection.description"
            :classes="freePlanSection.classes" />

          <p class="mt-5 font-display text-lg font-bold text-slate-800">{{ freePlanSection.subtitle }}</p>

          <div class="mt-7 rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft sm:p-6">
            <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
              {{ freePlanSection.bestSuitedLabel }}
            </p>
            <ul class="mt-3 space-y-2.5" role="list">
              <li v-for="item in freePlanSection.bestSuitedFor" :key="item"
                class="flex items-start gap-2.5 text-[13.5px] font-medium text-slate-700">
                <span
                  class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600"
                  aria-hidden="true">
                  <IconCheck class="h-3 w-3" />
                </span>
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="mt-7" v-motion :initial="{ opacity: 0, y: 12 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }">
            <ActionBtn variant="primary" :label="freePlanSection.cta.label" :href="freePlanSection.cta.href"
              icon="mdi:account-plus-outline" />
          </div>
        </div>

        <div class="lg:col-span-7" v-motion :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
          <div class="overflow-hidden rounded-[1.25rem] border border-slate-200/90 bg-white shadow-soft">
            <div class="flex items-center justify-between gap-4 bg-blue-800 px-5 py-4">
              <p class="text-[13px] font-semibold tracking-wide text-white">{{ freePlanSection.featuresLabel }}</p>
              <p class="text-[13px] font-semibold tracking-wide text-white">Access</p>
            </div>
            <ul role="list">
              <li v-for="(feature, i) in freePlanSection.features" :key="feature.label" :class="[
                'flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-3.5 last:border-0',
                i % 2 === 1 ? 'bg-blue-50/60' : 'bg-white',
              ]">
                <span class="font-display text-[14.5px] font-bold text-slate-900">{{ feature.label }}</span>
                <span v-if="feature.access === '✓'" class="inline-flex text-emerald-600">
                  <IconCheck class="h-4 w-4" />
                  <span class="sr-only">Included</span>
                </span>
                <span v-else
                  class="shrink-0 rounded-lg bg-amber-50 px-2.5 py-1 text-[12px] font-semibold text-amber-700 ring-1 ring-amber-100">
                  {{ feature.access }}
                </span>
              </li>
            </ul>
            <p class="flex items-start gap-2.5 border-t border-slate-100 bg-slate-50/80 px-5 py-4 text-[13px] leading-relaxed text-slate-600">
              <Icon icon="mdi:information-outline" class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
              No upfront registration fee. Opportunity access remains subject to verification and current platform
              terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
