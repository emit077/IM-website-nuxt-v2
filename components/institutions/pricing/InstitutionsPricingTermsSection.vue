<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { institutionsPricingTerms } from '~/data/institutions-pricing'
</script>

<template>
  <section id="transparent-terms" class="relative scroll-mt-24 overflow-hidden bg-white section-py"
    aria-labelledby="pricing-terms-heading">
    <div class="container-page relative">
      <CardHeader heading-id="pricing-terms-heading" :badge="institutionsPricingTerms.badge"
        :title="institutionsPricingTerms.title" :description="institutionsPricingTerms.description"
        :classes="institutionsPricingTerms.classes" />

      <ol class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3" role="list">
        <li v-for="(item, i) in institutionsPricingTerms.items" :key="item.no" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 50, duration: 400 } }">
          <article
            class="group relative flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-slate-200/80 bg-cream-50/50 p-5 sm:p-6">
            <span
              class="pointer-events-none absolute -right-1 -top-3 font-display text-6xl font-extrabold leading-none text-blue-600/[0.08]"
              aria-hidden="true">
              {{ item.no }}
            </span>
            <p class="relative font-display text-sm font-extrabold text-blue-700">{{ item.no }}</p>
            <h3 class="relative mt-3 font-display text-base font-bold text-slate-900 sm:text-lg">
              {{ item.title }}
            </h3>
            <p class="relative mt-2 text-[13.5px] leading-relaxed text-slate-600">
              {{ item.description }}
            </p>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>
