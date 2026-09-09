<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { institutionsPartnershipSection } from '~/data/institutions-pricing'
</script>

<template>
  <section id="staffing-partnership" class="relative scroll-mt-24 overflow-hidden bg-white section-py"
    aria-labelledby="staffing-partnership-heading">
    <div class="container-page relative">
      <div
        class="overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-6 text-white shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)] sm:p-8 lg:p-10"
        v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
        <CardHeader theme="dark" align="left" heading-id="staffing-partnership-heading"
          :badge="institutionsPartnershipSection.badge" :title="institutionsPartnershipSection.title"
          :classes="institutionsPartnershipSection.classes" />
        <p class="mt-3 max-w-3xl text-sm leading-relaxed text-blue-100 sm:text-[15px]">
          {{ institutionsPartnershipSection.description }}
        </p>

        <ol class="mt-7 flex flex-wrap items-center gap-x-2 gap-y-2.5" role="list">
          <li v-for="(step, i) in institutionsPartnershipSection.flow" :key="step" class="flex items-center gap-2">
            <span
              class="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[13px] font-semibold text-white">
              {{ step }}
            </span>
            <Icon v-if="i < institutionsPartnershipSection.flow.length - 1" icon="mdi:arrow-right"
              class="h-4 w-4 text-blue-200" aria-hidden="true" />
          </li>
        </ol>

        <p class="mt-6 max-w-3xl text-sm leading-relaxed text-blue-50 sm:text-[15px]">
          {{ institutionsPartnershipSection.body }}
        </p>
        <p class="mt-3 max-w-3xl text-sm font-medium leading-relaxed text-white sm:text-[15px]">
          {{ institutionsPartnershipSection.outcome }}
        </p>

        <a :href="institutionsPartnershipSection.cta.href"
          class="group mt-7 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition duration-300 hover:-translate-y-0.5 hover:bg-cream-50">
          {{ institutionsPartnershipSection.cta.label }}
          <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>
