<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { erpFeatures, erpSection } from '~/data/institutions'
</script>

<template>
  <section id="institution-erp" class="relative scroll-mt-24 overflow-hidden section-surface-muted section-py"
    aria-labelledby="erp-heading">
    <div class="container-page relative">
      <CardHeader heading-id="erp-heading" :badge="erpSection.badge" :title="erpSection.title"
        :description="erpSection.description" :classes="erpSection.classes" />

      <p class="mt-3 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">
        {{ erpSection.tagline }}
      </p>

      <div class="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-2" role="list"
        :aria-label="erpSection.workflowLabel">
        <template v-for="(step, i) in erpSection.workflow" :key="step">
          <span
            class="rounded-full border border-blue-200 bg-white px-3.5 py-1.5 text-[12.5px] font-semibold text-blue-800 shadow-sm"
          >
            {{ step }}
          </span>
          <Icon
            v-if="i < erpSection.workflow.length - 1"
            icon="mdi:arrow-right"
            class="hidden h-4 w-4 text-blue-300 sm:block"
            aria-hidden="true"
          />
        </template>
      </div>

      <div
        class="mt-10 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 p-6 text-white sm:p-8"
        v-motion
        :initial="{ opacity: 0, y: 18 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }"
      >
        <h3 class="font-display text-xl font-bold sm:text-2xl">{{ erpSection.showcaseTitle }}</h3>
        <p class="mt-2 max-w-2xl text-sm leading-relaxed text-blue-100">{{ erpSection.showcaseDescription }}</p>
      </div>

      <ul class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li
          v-for="(feature, i) in erpFeatures"
          :key="feature.title"
          v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + (i % 6) * 40, duration: 380 } }"
        >
          <article
            class="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-6"
          >
            <span
              class="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true"
            >
              <Icon :icon="feature.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-4 font-display text-[15px] font-bold text-slate-900">{{ feature.title }}</h3>
            <p class="mt-1.5 text-[13px] leading-relaxed text-slate-600">{{ feature.description }}</p>
            <ul class="mt-3.5 flex-1 space-y-1.5" role="list">
              <li v-for="item in feature.features" :key="item" class="flex items-start gap-2 text-[12.5px] text-slate-600">
                <IconCheck class="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                {{ item }}
              </li>
            </ul>
            <p class="mt-4 border-t border-slate-100 pt-3 text-[12px] font-medium italic text-slate-500">
              {{ feature.benefit }}
            </p>
          </article>
        </li>
      </ul>

      <div class="mt-8 grid gap-4 lg:grid-cols-2" v-motion :initial="{ opacity: 0, y: 14 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
        <article class="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-soft sm:p-7">
          <h3 class="font-display text-lg font-bold text-slate-900">{{ erpSection.securityTitle }}</h3>
          <ul class="mt-4 space-y-2.5" role="list">
            <li v-for="item in erpSection.securityItems" :key="item" class="flex items-start gap-2.5 text-[13.5px] text-slate-700">
              <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              {{ item }}
            </li>
          </ul>
        </article>
        <article class="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-soft sm:p-7">
          <h3 class="font-display text-lg font-bold text-slate-900">{{ erpSection.visibilityLabel }}</h3>
          <ul class="mt-4 space-y-2.5" role="list">
            <li v-for="item in erpSection.visibility" :key="item" class="flex items-start gap-2.5 text-[13.5px] text-slate-700">
              <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
              {{ item }}
            </li>
          </ul>
        </article>
      </div>

      <p class="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-[15px]">
        {{ erpSection.closing }}
      </p>
    </div>
  </section>
</template>
