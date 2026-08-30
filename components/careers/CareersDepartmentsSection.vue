<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { departmentsSection } from '~/data/careers'
import { careerDepartments, jobPath, type CareerDepartment } from '~/data/career-jobs'

const accentClasses: Record<CareerDepartment['accent'], { tile: string; dot: string; badge: string }> = {
  blue: { tile: 'bg-blue-50 text-blue-600 ring-blue-100', dot: 'bg-blue-500', badge: 'text-blue-700 bg-blue-50' },
  emerald: { tile: 'bg-emerald-50 text-emerald-600 ring-emerald-100', dot: 'bg-emerald-500', badge: 'text-emerald-700 bg-emerald-50' },
  amber: { tile: 'bg-amber-50 text-amber-600 ring-amber-100', dot: 'bg-amber-500', badge: 'text-amber-700 bg-amber-50' },
  violet: { tile: 'bg-violet-50 text-violet-600 ring-violet-100', dot: 'bg-violet-500', badge: 'text-violet-700 bg-violet-50' },
  indigo: { tile: 'bg-indigo-50 text-indigo-600 ring-indigo-100', dot: 'bg-indigo-500', badge: 'text-indigo-700 bg-indigo-50' },
  teal: { tile: 'bg-teal-50 text-teal-600 ring-teal-100', dot: 'bg-teal-500', badge: 'text-teal-700 bg-teal-50' },
}
</script>

<template>
  <section
    id="career-areas"
    class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py"
    aria-labelledby="career-areas-heading"
  >
    <div class="container-page relative">
      <CardHeader
        heading-id="career-areas-heading"
        :badge="departmentsSection.kicker"
        :title="departmentsSection.title"
        :description="departmentsSection.description"
        :classes="departmentsSection.classes"
      />

      <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-12 lg:grid-cols-2 sm:gap-5">
        <article
          v-for="(department, i) in careerDepartments"
          :key="department.id"
          :id="`department-${department.id}`"
          class="flex flex-col rounded-3xl border border-slate-200/70 bg-white p-6 sm:p-7"
          v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 400 } }"
        >
          <div class="flex items-start gap-3.5">
            <span
              :class="['grid h-11 w-11 shrink-0 place-items-center rounded-2xl ring-1', accentClasses[department.accent].tile]"
              aria-hidden="true"
            >
              <Icon :icon="department.iconMdi" class="h-5 w-5" />
            </span>
            <div class="min-w-0">
              <p :class="['inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em]', accentClasses[department.accent].badge]">
                {{ department.no }}
              </p>
              <h3 class="font-display mt-1.5 text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                {{ department.title }}
              </h3>
              <p class="mt-1 text-sm leading-relaxed text-slate-500">
                {{ department.tagline }}
              </p>
            </div>
          </div>

          <ul class="mt-5 space-y-3 border-t border-slate-100 pt-5" role="list">
            <li v-for="role in department.roles" :key="role.title">
              <NuxtLink
                v-if="role.slug"
                :to="jobPath(role.slug)"
                class="group flex items-start gap-2.5 rounded-xl p-1 -m-1 no-underline transition hover:bg-cream-50/80"
              >
                <span :class="['mt-2 h-1.5 w-1.5 shrink-0 rounded-full', accentClasses[department.accent].dot]" aria-hidden="true" />
                <span class="min-w-0">
                  <span class="flex items-center gap-1.5 font-display text-sm font-bold text-slate-800 group-hover:text-blue-700">
                    {{ role.title }}
                    <Icon icon="mdi:arrow-right" class="h-3.5 w-3.5 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-blue-600" />
                  </span>
                  <span class="mt-0.5 block text-[13px] leading-relaxed text-slate-500">{{ role.summary }}</span>
                </span>
              </NuxtLink>
              <div v-else class="flex items-start gap-2.5">
                <span :class="['mt-2 h-1.5 w-1.5 shrink-0 rounded-full', accentClasses[department.accent].dot]" aria-hidden="true" />
                <div class="min-w-0">
                  <p class="font-display text-sm font-bold text-slate-800">{{ role.title }}</p>
                  <p class="mt-0.5 text-[13px] leading-relaxed text-slate-500">{{ role.summary }}</p>
                </div>
              </div>
            </li>
          </ul>
        </article>
      </div>

      <p class="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-slate-500">
        {{ departmentsSection.footer }}
      </p>
    </div>
  </section>
</template>
