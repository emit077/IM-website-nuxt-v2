<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import { aboutTeamStructure } from '~/data/about'

const headerTitle = computed(
  () =>
    `${aboutTeamStructure.title} <span class="text-gradient-brand">${aboutTeamStructure.titleHighlight}</span> ${aboutTeamStructure.titleSuffix}`,
)
</script>

<template>
  <section id="team-structure" class="bg-[#f8fafc] py-14 sm:py-16 lg:py-20" aria-labelledby="team-structure-heading">
    <div class="container-page">
      <CardHeader variant="section" heading-id="team-structure-heading" content-class="!px-0 !py-0"
        :badge="aboutTeamStructure.badge" :title="headerTitle" :description="aboutTeamStructure.subtitle" />

      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <article v-for="(unit, i) in aboutTeamStructure.units" :key="unit.title"
          class="group flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_42px_-28px_rgba(15,23,42,0.45)]"
          v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 440, delay: 50 + i * 60 } }">
          <span
            class="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-hover:scale-105">
            <Icon :icon="unit.icon" class="h-6 w-6" aria-hidden="true" />
          </span>

          <h3 class="font-display mt-4 text-base font-bold leading-snug text-slate-900">
            {{ unit.title }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-slate-500">
            {{ unit.description }}
          </p>

          <div class="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
            <span v-for="role in unit.roles" :key="role"
              class="rounded-md bg-blue-50/70 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
              {{ role }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
