<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { premiumPlanSection } from '~/data/tutor-registration-plans'
</script>

<template>
  <section id="premium-plan"
    class="relative scroll-mt-28 overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-800 section-py"
    aria-labelledby="premium-plan-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -bottom-28 -left-20 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />

    <div class="container-page relative">
      <CardHeader theme="dark" heading-id="premium-plan-heading" :badge="premiumPlanSection.badge"
        :title="premiumPlanSection.title" :description="premiumPlanSection.description"
        :classes="premiumPlanSection.classes" />

      <p class="mt-7 text-center font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl" v-motion
        :initial="{ opacity: 0, y: 14 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
        {{ premiumPlanSection.price }}
        <span class="ml-1 text-xl font-semibold text-blue-100">{{ premiumPlanSection.priceNote }}</span>
      </p>

      <p class="mt-8 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-amber-200">
        {{ premiumPlanSection.featuresLabel }}
      </p>

      <ul class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3" role="list">
        <li v-for="(feature, i) in premiumPlanSection.features" :key="feature.title" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 400 } }">
          <article
            class="group flex h-full flex-col rounded-[1.5rem] border border-white/15 bg-white/[0.07] p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.12] sm:p-6">
            <span
              class="grid h-11 w-11 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20 transition group-hover:bg-white group-hover:text-blue-700"
              aria-hidden="true">
              <Icon :icon="feature.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-4 font-display text-base font-bold text-white">{{ feature.title }}</h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-blue-100">{{ feature.description }}</p>
          </article>
        </li>
      </ul>

      <div class="mt-10 grid gap-6 rounded-[1.75rem] border border-white/15 bg-white/[0.07] p-6 sm:p-8 lg:grid-cols-12 lg:items-center"
        v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
        <div class="lg:col-span-8">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-amber-200">
            {{ premiumPlanSection.bestSuitedLabel }}
          </p>
          <ul class="mt-4 grid gap-2.5 sm:grid-cols-2" role="list">
            <li v-for="item in premiumPlanSection.bestSuitedFor" :key="item"
              class="flex items-start gap-2.5 text-[13.5px] font-medium text-white">
              <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/15 text-amber-300"
                aria-hidden="true">
                <IconCheck class="h-3 w-3" />
              </span>
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="lg:col-span-4">
          <a :href="premiumPlanSection.cta.href"
            class="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-blue-700 transition duration-300 hover:-translate-y-0.5 hover:bg-cream-50">
            <Icon icon="mdi:star-four-points-outline" class="h-4 w-4" aria-hidden="true" />
            {{ premiumPlanSection.cta.label }}
            <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
