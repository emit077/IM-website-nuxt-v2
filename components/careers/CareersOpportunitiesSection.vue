<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { opportunitiesSection, roleCategories, type RoleCategory } from '~/data/careers'

const accentClasses: Record<
  RoleCategory['accent'],
  { tile: string; dot: string }
> = {
  blue: {
    tile: 'bg-blue-50 text-blue-600 ring-blue-100',
    dot: 'bg-blue-500',
  },
  emerald: {
    tile: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
    dot: 'bg-emerald-500',
  },
  amber: {
    tile: 'bg-amber-50 text-amber-600 ring-amber-100',
    dot: 'bg-amber-500',
  },
  violet: {
    tile: 'bg-violet-50 text-violet-600 ring-violet-100',
    dot: 'bg-violet-500',
  },
}
</script>

<template>
  <section
    id="opportunities"
    class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py"
    aria-labelledby="opportunities-heading"
  >
    <div class="container-page relative">
      <CardHeader
        heading-id="opportunities-heading"
        :badge="opportunitiesSection.kicker"
        :title="opportunitiesSection.title"
        :description="opportunitiesSection.description"
        :classes="opportunitiesSection.classes"
      />

      <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
        <article
          v-for="(category, i) in roleCategories"
          :key="category.id"
          class="rounded-3xl border border-slate-200/70 bg-white p-6 sm:p-7"
          v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 70, duration: 420 } }"
        >
          <div class="flex items-center gap-3.5">
            <span
              :class="[
                'grid h-11 w-11 shrink-0 place-items-center rounded-2xl ring-1',
                accentClasses[category.accent].tile,
              ]"
              aria-hidden="true"
            >
              <Icon :icon="category.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="font-display text-base font-bold tracking-tight text-slate-900 sm:text-lg">
              {{ category.title }}
            </h3>
          </div>

          <p class="mt-4 text-sm leading-relaxed text-slate-500">
            {{ category.description }}
          </p>

          <ul class="mt-5 space-y-2.5 border-t border-slate-100 pt-5" role="list">
            <li
              v-for="role in category.roles"
              :key="role"
              class="flex items-center gap-2.5 text-sm font-medium text-slate-700"
            >
              <span
                :class="['h-1.5 w-1.5 shrink-0 rounded-full', accentClasses[category.accent].dot]"
                aria-hidden="true"
              />
              {{ role }}
            </li>
          </ul>
        </article>
      </div>

      <p class="mt-8 text-center text-sm text-slate-500">
        {{ opportunitiesSection.footerNote }}
        <a
          :href="opportunitiesSection.footerCta.href"
          class="ml-1 font-semibold text-blue-600 transition hover:text-blue-700"
        >
          {{ opportunitiesSection.footerCta.label }}
        </a>
      </p>
    </div>
  </section>
</template>
