<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { whyPartnerSection, whyPartnerReasons } from '~/data/channel-partner'

const accentClasses: Record<string, { tile: string; chip: string; bar: string; num: string; glow: string }> = {
  emerald: {
    tile: 'bg-emerald-50 text-emerald-600 ring-emerald-100 group-hover:bg-emerald-600 group-hover:text-white group-hover:ring-emerald-600',
    chip: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    bar: 'from-emerald-500 to-teal-500',
    num: 'text-emerald-500/15 group-hover:text-emerald-500/25',
    glow: 'from-emerald-400/20',
  },
  blue: {
    tile: 'bg-blue-50 text-blue-600 ring-blue-100 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600',
    chip: 'bg-blue-50 text-blue-700 ring-blue-100',
    bar: 'from-blue-500 to-indigo-500',
    num: 'text-blue-500/15 group-hover:text-blue-500/25',
    glow: 'from-blue-400/20',
  },
  violet: {
    tile: 'bg-violet-50 text-violet-600 ring-violet-100 group-hover:bg-violet-600 group-hover:text-white group-hover:ring-violet-600',
    chip: 'bg-violet-50 text-violet-700 ring-violet-100',
    bar: 'from-violet-500 to-purple-500',
    num: 'text-violet-500/15 group-hover:text-violet-500/25',
    glow: 'from-violet-400/20',
  },
  amber: {
    tile: 'bg-amber-50 text-amber-600 ring-amber-100 group-hover:bg-amber-600 group-hover:text-white group-hover:ring-amber-600',
    chip: 'bg-amber-50 text-amber-700 ring-amber-100',
    bar: 'from-amber-500 to-orange-500',
    num: 'text-amber-500/15 group-hover:text-amber-500/25',
    glow: 'from-amber-400/20',
  },
}

const accentOf = (accent: string) => accentClasses[accent] ?? accentClasses.blue
</script>

<template>
  <section id="why-partner" class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py"
    aria-labelledby="why-partner-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-indigo-200/25 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="why-partner-heading" :badge="whyPartnerSection.kicker" :title="whyPartnerSection.title"
        :description="whyPartnerSection.description" :classes="whyPartnerSection.classes" />

      <ol class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        <li v-for="(reason, i) in whyPartnerReasons" :key="reason.title"
          :class="i === 0 ? 'sm:col-span-2 lg:col-span-3' : ''" v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 70, duration: 450 } }">
          <article :class="[
            'group relative flex h-full overflow-hidden rounded-[1.6rem] border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-7',
            i === 0 ? 'flex-col lg:flex-row lg:items-center lg:gap-10' : 'flex-col',
          ]">
            <span aria-hidden="true" :class="[
              'pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br to-transparent opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100',
              accentOf(reason.accent).glow,
            ]" />
            <span aria-hidden="true" :class="[
              'pointer-events-none absolute -right-1 top-2 select-none font-display text-6xl font-black tabular-nums leading-none',
              accentOf(reason.accent).num,
            ]">
              <Icon :icon="reason.iconMdi" :class="i === 0 ? 'h-16 w-16' : 'h-16 w-16'" />
            </span>

            <span :class="[
              'relative grid shrink-0 place-items-center rounded-2xl ring-1 transition duration-300',
              i === 0 ? 'h-14 w-14' : 'h-12 w-12',
              accentOf(reason.accent).tile,
            ]" aria-hidden="true">
              <Icon :icon="reason.iconMdi" :class="i === 0 ? 'h-7 w-7' : 'h-6 w-6'" />
            </span>

            <div class="relative flex min-w-0 flex-1 flex-col">
              <h3 :class="[
                'font-display font-bold leading-snug text-slate-900',
                i === 0 ? 'mt-5 text-lg lg:mt-0 sm:text-xl' : 'mt-5 text-base sm:text-lg',
              ]">
                {{ reason.title }}
              </h3>
              <p class="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-slate-600 sm:text-sm">
                {{ reason.description }}
              </p>
              <p :class="[
                'mt-5 inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold ring-1',
                accentOf(reason.accent).chip,
              ]">
                {{ reason.stat }}
              </p>
              <div aria-hidden="true" :class="[
                'mt-5 h-1 w-10 rounded-full bg-gradient-to-r transition-all duration-500 ',
                accentOf(reason.accent).bar,
              ]" />
            </div>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>
