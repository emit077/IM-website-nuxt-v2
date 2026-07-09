<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeader.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { benefitsSection, benefitCards, type BenefitCard } from '~/data/channel-partner'

const accentClasses: Record<BenefitCard['accent'], { tile: string; icon: string; check: string }> = {
  blue: { tile: 'bg-blue-50 ring-blue-100', icon: 'text-blue-600', check: 'text-blue-600' },
  emerald: { tile: 'bg-emerald-50 ring-emerald-100', icon: 'text-emerald-600', check: 'text-emerald-600' },
  orange: { tile: 'bg-orange-50 ring-orange-100', icon: 'text-orange-600', check: 'text-orange-600' },
  violet: { tile: 'bg-violet-50 ring-violet-100', icon: 'text-violet-600', check: 'text-violet-600' },
}
</script>

<template>
  <section id="partner-benefits" class="relative scroll-mt-20 section-surface-muted section-py"
    aria-labelledby="partner-benefits-heading">
    <div class="container-page">
      <CardHeader heading-id="partner-benefits-heading" classes="!px-0 !py-0" :badge="benefitsSection.kicker"
        title='A transparent and <span class="text-gradient-brand">scalable business model</span>'
        :description="benefitsSection.description" />
      <div class="mt-10 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2">
        <article v-for="(card, i) in benefitCards" :key="card.id"
          class="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-7"
          v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + (i % 2) * 80, duration: 450 } }">
          <div class="flex items-center gap-3.5">
            <span :class="[
              'grid h-12 w-12 shrink-0 place-items-center rounded-2xl ring-1 transition-transform duration-300 group-hover:scale-105',
              accentClasses[card.accent].tile,
            ]">
              <Icon :icon="card.iconMdi" :class="['h-6 w-6', accentClasses[card.accent].icon]" aria-hidden="true" />
            </span>
            <h3 class="font-display text-base font-bold text-slate-900 sm:text-lg">{{ card.title }}</h3>
          </div>

          <p class="mt-4 text-[13.5px] leading-relaxed text-slate-600 sm:text-sm">
            {{ card.description }}
          </p>

          <ul class="mt-3 space-y-2.5" role="list">
            <li v-for="point in card.points" :key="point"
              class="flex items-start gap-2.5 text-[13px] text-slate-700 sm:text-[13.5px]">
              <IconCheck :class="['mt-0.5 h-4 w-4 shrink-0', accentClasses[card.accent].check]" />
              {{ point }}
            </li>
          </ul>

          <p v-if="card.footnote"
            class="mt-auto pt-4 text-[12.5px] font-medium leading-relaxed text-slate-500 sm:text-[13px]">
            {{ card.footnote }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
