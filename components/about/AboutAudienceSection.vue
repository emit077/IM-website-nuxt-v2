<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeader.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import { aboutAudience } from '~/data/about'

type CardTheme = {
  lead: string
  accent: string
  soft: string
  border: string
  glow: string
  ring: string
}

const cardThemes: CardTheme[] = [
  {
    lead: 'Want',
    accent: 'text-blue-600',
    soft: 'bg-blue-50',
    border: 'border-blue-100',
    glow: 'from-blue-400/20',
    ring: 'ring-blue-100',
  },
  {
    lead: 'Need',
    accent: 'text-violet-600',
    soft: 'bg-violet-50',
    border: 'border-violet-100',
    glow: 'from-violet-400/20',
    ring: 'ring-violet-100',
  },
  {
    lead: 'Value',
    accent: 'text-emerald-600',
    soft: 'bg-emerald-50',
    border: 'border-emerald-100',
    glow: 'from-emerald-400/20',
    ring: 'ring-emerald-100',
  },
  {
    lead: 'Aim for',
    accent: 'text-amber-600',
    soft: 'bg-amber-50',
    border: 'border-amber-100',
    glow: 'from-amber-400/20',
    ring: 'ring-amber-100',
  },
]

const audienceCards = computed(() =>
  aboutAudience.cards.map((card, i) => {
    const theme = cardThemes[i] ?? cardThemes[0]!
    const body = card.text.startsWith(theme.lead)
      ? card.text.slice(theme.lead.length).trim().replace(/^\w/, (c) => c.toLowerCase())
      : card.text

    return { ...card, theme, body }
  }),
)
</script>

<template>
  <section id="audience" class="relative overflow-hidden bg-white section-py"
    aria-labelledby="audience-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-16 top-16 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-violet-100/30 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="audience-heading" :badge="aboutAudience.badge" :title="aboutAudience.title"
        :description="aboutAudience.description" :classes="aboutAudience.classes" />

      <div class="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
        <article v-for="(card, i) in audienceCards" :key="card.text" :class="[
          'group relative overflow-hidden rounded-[1.5rem] border bg-white p-6 transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_48px_-18px_rgba(37,99,235,0.18)] sm:p-7',
          card.theme.border,
        ]" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450, delay: i * 80 } }">
          <div aria-hidden="true" :class="[
            'pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br to-transparent opacity-60 blur-2xl transition duration-500 group-hover:opacity-100',
            card.theme.glow,
          ]" />

          <div class="relative flex items-start justify-between gap-3">
            <span :class="[
              'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1',
              card.theme.soft,
              card.theme.accent,
              card.theme.ring,
            ]">
              <Icon :icon="card.icon" class="h-6 w-6" aria-hidden="true" />
            </span>
            <span class="text-[11px] font-bold tabular-nums tracking-widest text-slate-300">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
          </div>

          <p class="relative mt-5 text-base leading-relaxed text-slate-700 sm:text-[17px]">
            <span :class="['font-display font-bold', card.theme.accent]">
              {{ card.theme.lead }}
            </span>
            {{ ' ' }}{{ card.body }}
          </p>

          <div aria-hidden="true" :class="[
            'absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-700 ease-out group-hover:w-full',
            card.theme.accent.replace('text-', 'bg-'),
          ]" />
        </article>
      </div>

      <div
        class="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-cream-50/70 px-5 py-5 sm:flex-row sm:px-8 sm:py-6"
        v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }">
        <div class="text-center sm:text-left">
          <p class="font-display text-base font-bold text-slate-900 sm:text-lg">
            Sound like your family?
          </p>
          <p class="mt-1 text-sm text-slate-600">
            Explore plans built for students and parents across India.
          </p>
        </div>
        <NuxtLink to="/student-parent" class="btn-secondary group shrink-0">
          View student plans
          <IconArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
