<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import SubscriptionPlanCard from '~/components/student-parent/subscription/SubscriptionPlanCard.vue'
import { spFamilyPlans, spPlansPreview } from '~/data/student-parent'
</script>

<template>
  <section id="subscription-plans" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="plans-preview-heading">
    <div class="container-page relative">
      <CardHeader heading-id="plans-preview-heading" :badge="spPlansPreview.badge" :title="spPlansPreview.title"
        :description="spPlansPreview.description" :classes="spPlansPreview.classes" />

      <ul class="mt-14 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3 lg:gap-6" role="list">
        <li v-for="(plan, i) in spFamilyPlans.items" :key="plan.id"
          :class="plan.popular ? 'lg:z-10' : ''"
          v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 50 + i * 70, duration: 450 } }">
          <SubscriptionPlanCard :plan="plan" />
        </li>
      </ul>

      <div class="mt-10 flex justify-center">
        <a :href="spPlansPreview.cta.href"
          class="inline-flex items-center justify-center gap-2 rounded-full border border-blue-600 bg-white px-7 py-3 text-sm font-semibold text-blue-700 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50">
          {{ spPlansPreview.cta.label }}
          <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>
