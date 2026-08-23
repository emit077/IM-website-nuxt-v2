<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import SubscriptionPricingCard from './SubscriptionPricingCard.vue'
import { spSubscriptionPricing } from '~/data/student-parent'

defineProps<{
  mini: boolean
}>()

function planHref(planId: string) {
  return `/student-parent/subscription?plan=${planId}&tenure=monthly#tenures`
}
</script>

<template>
  <section id="learning-plans" class="relative scroll-mt-36 overflow-hidden bg-[#F7F8FB] section-py lg:scroll-mt-44"
    aria-labelledby="family-plans-heading">
    <div class="container-page relative">
      <CardHeader heading-id="family-plans-heading" :badge="spSubscriptionPricing.badge"
        :title="spSubscriptionPricing.title" :description="spSubscriptionPricing.description"
        :classes="spSubscriptionPricing.classes" />

      <ul class="relative z-10 mt-12 grid grid-cols-1 items-stretch gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-5" role="list">
        <li v-for="(plan, i) in spSubscriptionPricing.items" :key="plan.id"
          :class="plan.featured ? 'lg:z-10' : 'lg:mt-4'" v-motion :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 50 + i * 80, duration: 480 } }">
          <div :class="[plan.featured ? '-mt-6' : '']">
            <SubscriptionPricingCard :plan="plan" :href="planHref(plan.id)" :mini="mini" />
          </div>
        </li>
      </ul>
      <div class="relative z-10 mt-6 flex flex-col items-center text-center lg:mt-10" v-if="mini">
        <p class="max-w-xl text-sm leading-relaxed text-slate-500">
          {{ spSubscriptionPricing.footnote }}
        </p>
        <a :href="spSubscriptionPricing.cta.href"
          class="mt-2 inline-flex min-w-[16rem] items-center justify-center rounded-xl bg-blue-700 px-10 py-2 text-base font-semibold text-white shadow-[0_18px_40px_-18px_rgba(29,78,216,0.65)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-800">
          {{ spSubscriptionPricing.cta.label }}
        </a>
      </div>
    </div>
  </section>
</template>
