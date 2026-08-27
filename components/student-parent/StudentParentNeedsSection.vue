<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { spNeeds, spRoadmap } from '~/data/student-parent'

const needNumber = (groupIndex: number, itemIndex: number) =>
  String(groupIndex * 4 + itemIndex + 1).padStart(2, '0')
</script>

<template>
  <section id="learning-needs" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="learning-needs-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-16 bottom-8 h-64 w-64 rounded-full bg-indigo-200/25 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="learning-needs-heading" :badge="spNeeds.badge" :title="spNeeds.title"
        :description="spNeeds.description" :classes="spNeeds.classes" />

      <div
        class="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-stretch lg:gap-6 needs-panel flex h-full flex-col overflow-hidden rounded-[1.75rem] border shadow-soft border-blue-200/70 bg-gradient-to-br from-blue-50 via-white to-white py-4">
        <article v-for="(group, gi) in spNeeds.groups" :key="group.id" :class="[]" v-motion
          :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80 + gi * 90, duration: 480 } }">

          <ol class="flex flex-1 flex-col p-2 sm:p-3" role="list">
            <li v-for="(item, i) in group.items" :key="item.title">
              <div class="needs-row group flex items-start gap-3.5 rounded-2xl px-3.5 py-3.5 sm:gap-4 sm:px-4">
                <span
                  class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
                  aria-hidden="true">
                  <!-- <span class="mt-0.5 font-display text-[13px] font-black tabular-nums text-blue-500/70"
                    aria-hidden="true">
                    {{ needNumber(gi, i) }}
                  </span> -->
                  <Icon :icon="item.iconMdi" class="h-5 w-5" />
                </span>
                <div class="min-w-0 flex-1">
                  <h3 class="font-display text-[15px] font-bold leading-snug text-slate-900" v-html="item.title"></h3>
                  <p class="mt-1 text-[13px] leading-relaxed text-slate-600">{{ item.question }}</p>
                </div>
              </div>
            </li>
          </ol>
        </article>
      </div>

      <p class="mx-auto mt-8 flex max-w-2xl items-start justify-center gap-2.5 rounded-2xl border border-blue-100 bg-blue-50/80 px-5 py-4 text-center text-sm font-medium leading-relaxed text-blue-800 sm:items-center sm:text-[15px]"
        v-motion :initial="{ opacity: 0, y: 10 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 420 } }">
        <Icon icon="mdi:check-decagram-outline" class="mt-0.5 h-5 w-5 shrink-0 text-blue-600 sm:mt-0"
          aria-hidden="true" />
        {{ spNeeds.outcome }}
      </p>
    </div>
  </section>
  <!-- Learning Roadmap -->
  <section id="learning-roadmap" class="relative scroll-mt-28 overflow-hidden section-surface-white section-py"
    aria-labelledby="roadmap-heading">
    <div class="container-page relative">
      <CardHeader heading-id="roadmap-heading" :badge="spRoadmap.badge" :title="spRoadmap.title"
        :description="spRoadmap.description" :classes="spRoadmap.classes" />

      <ol class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" role="list">
        <li v-for="(step, i) in spRoadmap.steps" :key="step.no" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 40, duration: 400 } }">
          <article
            class="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-cream-50/60 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-card sm:p-6">
            <span class="font-display text-3xl font-black tabular-nums leading-none text-blue-500/20">{{ step.no
              }}</span>
            <h3 class="mt-3 font-display text-lg font-bold text-slate-900">{{ step.title }}</h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ step.description }}</p>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.needs-row {
  transition: background-color 0.3s ease;
}

.needs-row:hover {
  background-color: rgb(239 246 255 / 0.85);
}

@media (prefers-reduced-motion: reduce) {
  .needs-row {
    transition: none;
  }
}
</style>
