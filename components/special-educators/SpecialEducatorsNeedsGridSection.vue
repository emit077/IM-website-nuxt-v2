<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import SpecialEducatorsNeedGridCard from '~/components/special-educators/SpecialEducatorsNeedGridCard.vue'
import { seNeeds } from '~/data/special-educators'
</script>

<template>
  <section
    id="learning-needs-grid"
    class="relative scroll-mt-24 overflow-hidden section-surface-muted section-py"
    aria-labelledby="se-needs-grid-heading"
  >
    <div class="container-page">
      <CardHeader
        heading-id="se-needs-grid-heading"
        :badge="seNeeds.grid.badge"
        :title="seNeeds.grid.title"
        :description="seNeeds.grid.description"
        :classes="seNeeds.classes"
      />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5" role="list">
        <li
          v-for="(cat, i) in seNeeds.items"
          :key="cat.id"
          v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + (i % 4) * 40, duration: 400 } }"
        >
          <SpecialEducatorsNeedGridCard
            :id="cat.id"
            :index="i"
            :short-title="cat.shortTitle"
            :title="cat.title"
            :description="cat.description"
            :image="cat.image"
            :icon-mdi="cat.iconMdi"
            :goals="cat.goals"
          />
        </li>
      </ul>
    </div>
  </section>
</template>
