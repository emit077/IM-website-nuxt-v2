<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { recruitmentServices, servicesSection, valueAddedSupport } from '~/data/institutions'

const accentClasses: Record<string, { chip: string; check: string }> = {
  blue: { chip: 'bg-blue-50 text-blue-600 ring-blue-100', check: 'text-blue-600' },
  indigo: { chip: 'bg-indigo-50 text-indigo-600 ring-indigo-100', check: 'text-indigo-600' },
  amber: { chip: 'bg-amber-50 text-amber-600 ring-amber-100', check: 'text-amber-600' },
  emerald: { chip: 'bg-emerald-50 text-emerald-600 ring-emerald-100', check: 'text-emerald-600' },
  violet: { chip: 'bg-violet-50 text-violet-600 ring-violet-100', check: 'text-violet-600' },
}
</script>

<template>
  <section id="recruitment-services" class="relative scroll-mt-24 overflow-hidden section-surface-muted section-py"
    aria-labelledby="services-heading">
    <div class="container-page relative">
      <CardHeader heading-id="services-heading" :badge="servicesSection.badge" :title="servicesSection.title"
        :description="servicesSection.description" :classes="servicesSection.classes" />

      <div class="mt-10 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2">
        <article
          v-for="(service, i) in recruitmentServices"
          :key="service.id"
          :id="service.id"
          :class="service.featured ? 'lg:col-span-2' : ''"
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + (i % 2) * 60, duration: 450 } }"
        >
          <div
            :class="[
              'group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 sm:p-7',
              service.featured
                ? 'bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)]'
                : 'border border-slate-200/80 bg-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-card',
            ]"
          >
            <span
              v-if="service.featured"
              class="absolute right-5 top-5 rounded-full bg-amber-400 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-slate-900"
            >
              Premium
            </span>

            <div class="flex items-start gap-4">
              <span
                :class="[
                  'grid h-12 w-12 shrink-0 place-items-center rounded-2xl ring-1',
                  service.featured ? 'bg-white/15 text-white ring-white/25' : accentClasses[service.accent].chip,
                ]"
                aria-hidden="true"
              >
                <Icon :icon="service.iconMdi" class="h-6 w-6" />
              </span>
              <div class="min-w-0">
                <p
                  :class="[
                    'text-[11px] font-bold uppercase tracking-[0.16em]',
                    service.featured ? 'text-amber-200' : 'text-slate-500',
                  ]"
                >
                  {{ service.no }} · {{ service.subtitle }}
                </p>
                <h3 class="font-display mt-1 text-lg font-bold sm:text-xl">{{ service.title }}</h3>
              </div>
            </div>

            <p
              :class="[
                'mt-4 text-[13.5px] leading-relaxed sm:text-sm',
                service.featured ? 'text-blue-50' : 'text-slate-600',
              ]"
            >
              {{ service.description }}
            </p>

            <p
              :class="[
                'mt-5 text-[11px] font-bold uppercase tracking-[0.14em]',
                service.featured ? 'text-amber-200' : 'text-slate-500',
              ]"
            >
              Key features
            </p>
            <ul
              class="mt-2.5 grid flex-1 gap-2"
              :class="service.featured ? 'sm:grid-cols-2 lg:grid-cols-3' : ''"
              role="list"
            >
              <li
                v-for="feature in service.features"
                :key="feature"
                :class="[
                  'flex items-start gap-2.5 text-[13px] sm:text-[13.5px]',
                  service.featured ? 'text-white' : 'text-slate-700',
                ]"
              >
                <IconCheck
                  :class="[
                    'mt-0.5 h-4 w-4 shrink-0',
                    service.featured ? 'text-amber-300' : accentClasses[service.accent].check,
                  ]"
                />
                {{ feature }}
              </li>
            </ul>

            <p
              :class="[
                'mt-5 border-t pt-4 text-[13px] italic leading-relaxed',
                service.featured ? 'border-white/15 text-blue-100' : 'border-slate-100 text-slate-500',
              ]"
            >
              {{ service.note }}
            </p>
          </div>
        </article>
      </div>

      <div
        class="mt-8 overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft sm:p-8"
        v-motion
        :initial="{ opacity: 0, y: 14 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }"
      >
        <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">{{ valueAddedSupport.badge }}</p>
        <h3 class="font-display mt-2 text-lg font-bold text-slate-900 sm:text-xl">{{ valueAddedSupport.title }}</h3>
        <ul class="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3" role="list">
          <li
            v-for="item in valueAddedSupport.items"
            :key="item"
            class="flex items-start gap-2.5 text-[13.5px] font-medium text-slate-700"
          >
            <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600"
              aria-hidden="true">
              <IconCheck class="h-3 w-3" />
            </span>
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
