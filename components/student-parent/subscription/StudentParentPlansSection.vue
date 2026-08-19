<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import SubscriptionPlanCard from './SubscriptionPlanCard.vue'
import { spFamilyPlans } from '~/data/student-parent'
</script>

<template>
  <section id="learning-plans" class="relative scroll-mt-36 overflow-hidden section-surface-muted section-py lg:scroll-mt-44"
    aria-labelledby="family-plans-heading">
    <div class="container-page relative">
      <CardHeader heading-id="family-plans-heading" :badge="spFamilyPlans.badge" :title="spFamilyPlans.title"
        :description="spFamilyPlans.description" :classes="spFamilyPlans.classes" />

      <ul class="mt-14 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3 lg:gap-6" role="list">
        <li v-for="(plan, i) in spFamilyPlans.items" :key="plan.id"
          :class="plan.popular ? 'lg:z-10' : ''"
          v-motion :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 50 + i * 80, duration: 480 } }">
          <SubscriptionPlanCard :plan="plan" />
        </li>
      </ul>

      <div class="mt-10 flex justify-center">
        <ActionBtn variant="theme-secondary" :label="spFamilyPlans.cta.label" :href="spFamilyPlans.cta.href"
          icon="mdi:scale-balance" />
      </div>
    </div>
  </section>
</template>
