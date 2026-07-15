<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { opportunitiesSection, roleCategories, type RoleCategory } from '~/data/careers'

const accentClasses: Record<
  RoleCategory['accent'],
  { tile: string; icon: string; check: string; border: string }
> = {
  blue: {
    tile: 'bg-blue-50 ring-blue-100',
    icon: 'text-blue-600',
    check: 'text-blue-600',
    border: 'hover:border-blue-200',
  },
  emerald: {
    tile: 'bg-emerald-50 ring-emerald-100',
    icon: 'text-emerald-600',
    check: 'text-emerald-600',
    border: 'hover:border-emerald-200',
  },
  amber: {
    tile: 'bg-amber-50 ring-amber-100',
    icon: 'text-amber-600',
    check: 'text-amber-600',
    border: 'hover:border-amber-200',
  },
  violet: {
    tile: 'bg-violet-50 ring-violet-100',
    icon: 'text-violet-600',
    check: 'text-violet-600',
    border: 'hover:border-violet-200',
  },
}
</script>

<template>
  <section id="opportunities" class="relative scroll-mt-20 section-surface-muted section-py"
    aria-labelledby="opportunities-heading">
    <div class="container-page">
      <CardHeader heading-id="opportunities-heading" :badge="opportunitiesSection.kicker"
        :title="opportunitiesSection.title" :description="opportunitiesSection.description"
        :classes="opportunitiesSection.classes" />

      <div class="mt-10 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2">
        <article v-for="(category, i) in roleCategories" :key="category.id" :class="[
          'group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card sm:p-7',
          accentClasses[category.accent].border,
        ]" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + (i % 2) * 80, duration: 450 } }">
          <div class="flex items-center gap-3.5">
            <span :class="[
              'grid h-12 w-12 shrink-0 place-items-center rounded-2xl ring-1 transition-transform duration-300 group-hover:scale-105',
              accentClasses[category.accent].tile,
            ]">
              <Icon :icon="category.iconMdi" :class="['h-6 w-6', accentClasses[category.accent].icon]"
                aria-hidden="true" />
            </span>
            <h3 class="font-display text-base font-bold text-slate-900 sm:text-lg">
              {{ category.title }}
            </h3>
          </div>

          <ul class="mt-5 space-y-2.5" role="list">
            <li v-for="role in category.roles" :key="role"
              class="flex items-start gap-2.5 text-[13px] text-slate-700 sm:text-[13.5px]">
              <IconCheck :class="['mt-0.5 h-4 w-4 shrink-0', accentClasses[category.accent].check]" />
              {{ role }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
