<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeader.vue'
import { aboutTeamStructure } from '~/data/about'

type IconTheme = {
  bg: string
  text: string
  ring: string
}

const iconThemes: IconTheme[] = [
  { bg: 'bg-blue-50', text: 'text-blue-600', ring: 'ring-blue-100' },
  { bg: 'bg-indigo-50', text: 'text-indigo-600', ring: 'ring-indigo-100' },
  { bg: 'bg-violet-50', text: 'text-violet-600', ring: 'ring-violet-100' },
  { bg: 'bg-emerald-50', text: 'text-emerald-600', ring: 'ring-emerald-100' },
  { bg: 'bg-amber-50', text: 'text-amber-600', ring: 'ring-amber-100' },
  { bg: 'bg-cyan-50', text: 'text-cyan-600', ring: 'ring-cyan-100' },
  { bg: 'bg-rose-50', text: 'text-rose-600', ring: 'ring-rose-100' },
  { bg: 'bg-teal-50', text: 'text-teal-600', ring: 'ring-teal-100' },
]

const units = computed(() =>
  aboutTeamStructure.units.map((unit, i) => ({
    ...unit,
    theme: iconThemes[i % iconThemes.length]!,
  })),
)
</script>

<template>
  <section id="team-structure" class="section-surface-muted section-py" aria-labelledby="team-structure-heading">
    <div class="container-page">
      <CardHeader heading-id="team-structure-heading" :badge="aboutTeamStructure.badge"
        :title="aboutTeamStructure.title" :description="aboutTeamStructure.description"
        :classes="aboutTeamStructure.classes" />

      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <article v-for="(unit, i) in units" :key="unit.title"
          class="group flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-600 hover:bg-gradient-to-br hover:from-blue-700 hover:via-indigo-700 hover:to-indigo-800 hover:shadow-[0_18px_42px_-28px_rgba(29,78,216,0.5)]"
          v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 440, delay: 50 + i * 60 } }">
          <span :class="[
            'inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 transition duration-300 group-hover:scale-105 group-hover:bg-white/15 group-hover:text-white group-hover:ring-white/25',
            unit.theme.bg,
            unit.theme.text,
            unit.theme.ring,
          ]">
            <Icon :icon="unit.icon" class="h-6 w-6" aria-hidden="true" />
          </span>

          <h3
            class="font-display mt-4 text-base font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-white">
            {{ unit.title }}
          </h3>
          <p
            class="mt-2 text-sm leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-blue-100/90">
            {{ unit.description }}
          </p>

          <div
            class="mt-4 flex flex-col items-start gap-2 border-t border-slate-100 pt-4 transition-colors duration-300 group-hover:border-white/20">
            <span v-for="role in unit.roles" :key="role"
              class="rounded-md bg-blue-50/70 px-2.5 py-1 text-[11px] font-semibold text-blue-700 transition-colors duration-300 group-hover:bg-white/15 group-hover:text-white">
              {{ role }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
