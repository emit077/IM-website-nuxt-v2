<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { aboutPhilosophy } from '~/data/about'

type PhilosophyTheme = {
  iconBg: string
  iconText: string
  ring: string
  number: string
  glow: string
  bar: string
}

const themes: PhilosophyTheme[] = [
  {
    iconBg: 'bg-blue-50',
    iconText: 'text-blue-600',
    ring: 'ring-blue-100',
    number: 'text-blue-600/80',
    glow: 'from-blue-400/20',
    bar: 'bg-gradient-to-r from-blue-500 to-indigo-500',
  },
  {
    iconBg: 'bg-rose-50',
    iconText: 'text-rose-600',
    ring: 'ring-rose-100',
    number: 'text-rose-600/80',
    glow: 'from-rose-400/20',
    bar: 'bg-gradient-to-r from-rose-500 to-pink-500',
  },
  {
    iconBg: 'bg-emerald-50',
    iconText: 'text-emerald-600',
    ring: 'ring-emerald-100',
    number: 'text-emerald-600/80',
    glow: 'from-emerald-400/20',
    bar: 'bg-gradient-to-r from-emerald-500 to-teal-500',
  },
]

const values = computed(() =>
  aboutPhilosophy.values.map((value, i) => ({
    ...value,
    theme: themes[i] ?? themes[0]!,
  })),
)
</script>

<template>
  <section
    id="philosophy"
    class="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    aria-labelledby="philosophy-heading"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-emerald-100/30 blur-3xl"
    />

    <div class="container-page relative">
      <div class="mx-auto max-w-2xl text-center">
        <span class="badge-pill mb-5">
          <span class="grid h-5 w-5 place-items-center rounded-full bg-blue-600 text-white">
            <Icon icon="mdi:compass-outline" class="h-3 w-3" aria-hidden="true" />
          </span>
          <span>What we stand for</span>
        </span>
        <h2
          id="philosophy-heading"
          class="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
        >
          Our <span class="text-gradient-brand">Philosophy</span>
        </h2>
        <p class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          {{ aboutPhilosophy.subtitle }}
        </p>
      </div>

      <div class="mt-12 grid gap-6 sm:grid-cols-3 sm:gap-5 lg:gap-6">
        <article
          v-for="(value, i) in values"
          :key="value.title"
          class="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_48px_-18px_rgba(15,23,42,0.18)] sm:p-7"
          v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450, delay: i * 80 } }"
        >
          <div
            aria-hidden="true"
            :class="[
              'pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br to-transparent opacity-0 blur-2xl transition duration-500 group-hover:opacity-100',
              value.theme.glow,
            ]"
          />

          <div class="relative flex items-center justify-between">
            <span
              :class="[
                'inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1 transition duration-300 group-hover:scale-105',
                value.theme.iconBg,
                value.theme.iconText,
                value.theme.ring,
              ]"
            >
              <Icon :icon="value.icon" class="h-6 w-6" aria-hidden="true" />
            </span>
            <span
              :class="['font-display text-2xl font-extrabold tabular-nums', value.theme.number]"
              aria-hidden="true"
            >
              {{ String(i + 1).padStart(2, '0') }}
            </span>
          </div>

          <h3 class="font-display relative mt-5 text-base font-bold text-slate-900 sm:text-lg">
            {{ value.title }}
          </h3>
          <p class="relative mt-3 text-sm leading-relaxed text-slate-600">
            {{ value.description }}
          </p>

          <div
            aria-hidden="true"
            :class="[
              'mt-6 h-1 w-10 rounded-full transition-all duration-500 group-hover:w-full',
              value.theme.bar,
            ]"
          />
        </article>
      </div>
    </div>
  </section>
</template>
