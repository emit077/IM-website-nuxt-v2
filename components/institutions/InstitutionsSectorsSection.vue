<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { hiringSectors } from '~/data/institutions'

const accentClasses: Record<string, { chip: string; check: string }> = {
  blue: { chip: 'bg-blue-50 text-blue-600 ring-blue-100', check: 'text-blue-600' },
  emerald: { chip: 'bg-emerald-50 text-emerald-600 ring-emerald-100', check: 'text-emerald-600' },
  amber: { chip: 'bg-amber-50 text-amber-600 ring-amber-100', check: 'text-amber-600' },
  violet: { chip: 'bg-violet-50 text-violet-600 ring-violet-100', check: 'text-violet-600' },
  rose: { chip: 'bg-rose-50 text-rose-600 ring-rose-100', check: 'text-rose-600' },
}
</script>

<template>
  <section id="hire-teachers-for" class="relative bg-white py-14 sm:py-16 lg:py-20"
    aria-labelledby="sectors-heading">
    <div class="container-page">
      <CardHeader
        
        heading-id="sectors-heading"
        content-class="!px-0 !py-0"
        badge="Hire Teachers For"
        title='Faculty recruitment for <span class="text-gradient-brand">every education sector</span>'
        description="Indian Mentors supports structured faculty recruitment for multiple education sectors and learning organizations."
      />

      <div class="mt-10 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2">
        <article v-for="(sector, i) in hiringSectors" :key="sector.id"
          :class="i === hiringSectors.length - 1 ? 'lg:col-span-2' : ''" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + (i % 2) * 60, duration: 450 } }">
          <div
            class="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-card sm:p-7">
            <div class="flex items-start gap-4">
              <span :class="[
                'grid h-12 w-12 shrink-0 place-items-center rounded-2xl ring-1',
                accentClasses[sector.accent].chip,
              ]" aria-hidden="true">
                <Icon :icon="sector.iconMdi" class="h-6 w-6" />
              </span>
              <div>
                <h3 class="font-display text-lg font-bold text-slate-900">{{ sector.title }}</h3>
                <p class="mt-1.5 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                  {{ sector.description }}
                </p>
              </div>
            </div>

            <div class="mt-5 grid flex-1 gap-5" :class="sector.extras ? 'sm:grid-cols-2' : ''">
              <div>
                <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  {{ sector.rolesLabel }}
                </p>
                <ul class="mt-2.5 space-y-2" role="list">
                  <li v-for="role in sector.roles" :key="role"
                    class="flex items-start gap-2.5 text-[13px] text-slate-700 sm:text-sm">
                    <IconCheck :class="['mt-0.5 h-4 w-4 shrink-0', accentClasses[sector.accent].check]" />
                    {{ role }}
                  </li>
                </ul>
              </div>

              <div v-if="sector.extras">
                <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  {{ sector.extraLabel }}
                </p>
                <ul class="mt-2.5 space-y-2" role="list">
                  <li v-for="item in sector.extras" :key="item"
                    class="flex items-start gap-2.5 text-[13px] text-slate-700 sm:text-sm">
                    <IconCheck :class="['mt-0.5 h-4 w-4 shrink-0', accentClasses[sector.accent].check]" />
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>

            <p class="mt-5 border-t border-slate-100 pt-4 text-[13px] italic leading-relaxed text-slate-500">
              {{ sector.note }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
