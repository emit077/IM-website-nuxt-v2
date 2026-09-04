<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { requirementsSection } from '~/data/institutions'
</script>

<template>
  <section id="academic-requirements" class="relative scroll-mt-24 overflow-hidden section-surface-muted section-py"
    aria-labelledby="requirements-heading">
    <div class="container-page relative">
      <CardHeader heading-id="requirements-heading" :badge="requirementsSection.badge"
        :title="requirementsSection.title" :description="requirementsSection.description"
        :classes="requirementsSection.classes" />

      <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
        <article
          v-for="(group, i) in requirementsSection.groups"
          :key="group.title"
          class="rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft sm:p-6"
          v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 380 } }"
        >
          <h3 class="font-display text-[15px] font-bold text-slate-900">{{ group.title }}</h3>
          <div class="mt-3 flex flex-wrap gap-1.5">
            <span
              v-for="item in group.items"
              :key="item"
              class="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600"
            >
              {{ item }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
