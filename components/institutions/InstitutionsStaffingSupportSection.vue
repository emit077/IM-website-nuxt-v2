<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { staffingSupportCards, staffingSupportSection } from '~/data/institutions'

const accentClasses: Record<string, { chip: string; check: string }> = {
  blue: { chip: 'bg-blue-50 text-blue-600 ring-blue-100', check: 'text-blue-600' },
  amber: { chip: 'bg-amber-50 text-amber-600 ring-amber-100', check: 'text-amber-600' },
}
</script>

<template>
  <section id="academic-staffing-support" class="relative scroll-mt-24 overflow-hidden section-surface-muted section-py"
    aria-labelledby="staffing-support-heading">
    <div class="container-page relative">
      <CardHeader heading-id="staffing-support-heading" :badge="staffingSupportSection.badge"
        :title="staffingSupportSection.title" :description="staffingSupportSection.description"
        :classes="staffingSupportSection.classes" />

      <div class="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2 sm:gap-5">
        <article
          v-for="(card, i) in staffingSupportCards"
          :id="card.id"
          :key="card.id"
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 80, duration: 450 } }"
        >
          <div
            class="flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft sm:p-7"
          >
            <span
              :class="['grid h-12 w-12 place-items-center rounded-2xl ring-1', accentClasses[card.accent].chip]"
              aria-hidden="true"
            >
              <Icon :icon="card.iconMdi" class="h-6 w-6" />
            </span>
            <h3 class="font-display mt-4 text-lg font-bold text-slate-900 sm:text-xl">{{ card.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ card.description }}</p>
            <p class="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">{{ card.itemsLabel }}</p>
            <ul class="mt-2.5 flex-1 space-y-2" role="list">
              <li v-for="item in card.items" :key="item" class="flex items-start gap-2.5 text-[13px] text-slate-700">
                <IconCheck :class="['mt-0.5 h-4 w-4 shrink-0', accentClasses[card.accent].check]" />
                {{ item }}
              </li>
            </ul>
            <p class="mt-5 border-t border-slate-100 pt-4 text-[13px] italic text-slate-500">{{ card.note }}</p>
            <a
              :href="card.cta.href"
              class="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700"
            >
              {{ card.cta.label }}
              <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
