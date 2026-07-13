<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeader.vue'
import { benefitsSection, careerBenefits, type CareerBenefit } from '~/data/careers'

const accentClasses: Record<
  CareerBenefit['accent'],
  { tile: string; icon: string; glow: string; bar: string }
> = {
  blue: {
    tile: 'bg-blue-50 ring-blue-100 text-blue-600',
    icon: 'text-blue-600',
    glow: 'from-blue-400/20',
    bar: 'bg-gradient-to-r from-blue-500 to-indigo-500',
  },
  emerald: {
    tile: 'bg-emerald-50 ring-emerald-100 text-emerald-600',
    icon: 'text-emerald-600',
    glow: 'from-emerald-400/20',
    bar: 'bg-gradient-to-r from-emerald-500 to-teal-500',
  },
  amber: {
    tile: 'bg-amber-50 ring-amber-100 text-amber-600',
    icon: 'text-amber-600',
    glow: 'from-amber-400/20',
    bar: 'bg-gradient-to-r from-amber-500 to-orange-500',
  },
  violet: {
    tile: 'bg-violet-50 ring-violet-100 text-violet-600',
    icon: 'text-violet-600',
    glow: 'from-violet-400/20',
    bar: 'bg-gradient-to-r from-violet-500 to-purple-500',
  },
}
</script>

<template>
  <section id="benefits" class="relative overflow-hidden bg-white section-py"
    aria-labelledby="benefits-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="benefits-heading" :badge="benefitsSection.kicker" :title="benefitsSection.title"
        :description="benefitsSection.description" :classes="benefitsSection.classes" />

      <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
        <article v-for="(benefit, i) in careerBenefits" :key="benefit.id"
          class="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_48px_-18px_rgba(15,23,42,0.18)] sm:p-7"
          v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450, delay: i * 80 } }">
          <div aria-hidden="true" :class="[
            'pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br to-transparent opacity-0 blur-2xl transition duration-500 group-hover:opacity-100',
            accentClasses[benefit.accent].glow,
          ]" />

          <span :class="[
            'relative inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1 transition duration-300 group-hover:scale-105',
            accentClasses[benefit.accent].tile,
          ]">
            <Icon :icon="benefit.iconMdi" class="h-6 w-6" aria-hidden="true" />
          </span>

          <h3 class="font-display relative mt-5 text-base font-bold text-slate-900 sm:text-lg">
            {{ benefit.title }}
          </h3>
          <p class="relative mt-3 text-sm leading-relaxed text-slate-600">
            {{ benefit.description }}
          </p>

          <div aria-hidden="true" :class="[
            'relative mt-6 h-1 w-10 rounded-full transition-all duration-500 group-hover:w-full',
            accentClasses[benefit.accent].bar,
          ]" />
        </article>
      </div>
    </div>
  </section>
</template>
