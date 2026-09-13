<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { gradesPathway, gradesStages } from '~/data/grades'

const accentDot: Record<(typeof gradesStages)[number]['accent'], string> = {
  amber: 'bg-amber-400',
  emerald: 'bg-emerald-500',
  sky: 'bg-sky-500',
  violet: 'bg-violet-500',
  rose: 'bg-rose-500',
  orange: 'bg-orange-500',
  slate: 'bg-slate-500',
}
</script>

<template>
  <section
    id="grades-nav"
    class="relative scroll-mt-24 overflow-hidden section-surface-muted section-py"
    aria-labelledby="grades-pathway-heading"
  >
    <div class="container-page">
      <CardHeader
        heading-id="grades-pathway-heading"
        :badge="gradesPathway.badge"
        :title="gradesPathway.title"
        :description="gradesPathway.description"
        :classes="gradesPathway.classes"
      />

      <ol class="relative mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li
          v-for="(stage, i) in gradesStages"
          :key="stage.id"
          :class="i === gradesStages.length - 1 ? 'sm:col-span-2 lg:col-span-3' : ''"
          v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + i * 40, duration: 400 } }"
        >
          <a
            :href="`#${stage.id}`"
            class="pathway-card group relative flex h-full overflow-hidden rounded-[1.4rem] border border-slate-200/80 bg-white no-underline shadow-sm"
            :class="i === gradesStages.length - 1 ? 'sm:min-h-[8.5rem]' : ''"
            :aria-label="`${stage.title} — ${stage.years}. View this stage`"
          >
            <div
              class="relative overflow-hidden bg-slate-100"
              :class="i === gradesStages.length - 1
                ? 'w-[38%] min-w-[8rem] sm:w-[32%] sm:min-w-[12rem] lg:w-[28%]'
                : 'w-[42%] min-w-[7.5rem] sm:min-w-[8.5rem]'"
            >
              <img
                :src="usePublicAsset(stage.visual)"
                :alt="`${stage.title} mentoring — Indian Mentors`"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                loading="lazy"
                decoding="async"
              />
              <span
                class="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20"
                aria-hidden="true"
              />
              <span
                class="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2 py-1 text-[11px] font-extrabold text-slate-800 shadow-sm"
              >
                <span :class="['h-1.5 w-1.5 rounded-full', accentDot[stage.accent]]" aria-hidden="true" />
                {{ String(i + 1).padStart(2, '0') }}
              </span>
            </div>

            <div class="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-5">
              <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
                {{ stage.years }}
              </p>
              <h3 class="mt-1 font-display text-[15px] font-bold text-slate-900 sm:text-base">
                {{ stage.title }}
              </h3>
              <p class="mt-1 text-[13px] leading-snug text-slate-500" :class="i === gradesStages.length - 1 ? 'max-w-xl' : 'line-clamp-2'">
                {{ stage.tagline }}
              </p>
              <span class="mt-3 inline-flex items-center gap-1 text-[12.5px] font-semibold text-blue-700">
                View this stage
                <Icon
                  icon="mdi:arrow-right"
                  class="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </div>
          </a>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.pathway-card {
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease,
    border-color 0.3s ease;
}

.pathway-card:hover {
  transform: translateY(-3px);
  border-color: rgb(191 219 254);
  box-shadow: 0 18px 36px -22px rgba(37, 99, 235, 0.3);
}

@media (prefers-reduced-motion: reduce) {
  .pathway-card {
    transition: none;
  }

  .pathway-card:hover {
    transform: none;
  }

  .pathway-card img {
    transition: none;
  }

  .pathway-card:hover img {
    transform: none;
  }
}
</style>
