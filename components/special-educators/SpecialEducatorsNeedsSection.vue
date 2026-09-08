<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import SpecialEducatorsNeedCard from '~/components/special-educators/SpecialEducatorsNeedCard.vue'
import { seNeeds } from '~/data/special-educators'
</script>

<template>
  <section
    id="learning-needs"
    class="relative scroll-mt-24 overflow-hidden bg-white section-py"
    aria-labelledby="se-needs-heading"
  >
    <div class="container-page">
      <CardHeader
        heading-id="se-needs-heading"
        :badge="seNeeds.badge"
        :title="seNeeds.title"
        :description="seNeeds.description"
        :classes="seNeeds.classes"
      />

      <ul class="mt-10 space-y-5 lg:mt-12 lg:space-y-6" role="list">
        <li
          v-for="(cat, i) in seNeeds.items"
          :key="cat.id"
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + (i % 2) * 40, duration: 420 } }"
        >
          <SpecialEducatorsNeedCard
            :id="cat.id"
            :index="i"
            :reversed="i % 2 === 1"
            :short-title="cat.shortTitle"
            :title="cat.title"
            :description="cat.description"
            :image="cat.image"
            :icon-mdi="cat.iconMdi"
            :support="cat.support"
            :goals="cat.goals"
            :note="cat.note"
          />
        </li>
      </ul>

      <p class="needs-note mx-auto mt-8 max-w-3xl text-center text-[13px] leading-relaxed text-slate-500">
        {{ seNeeds.note }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.needs-note {
  text-wrap: pretty;
}
</style>
