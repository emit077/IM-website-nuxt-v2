<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import { hiringProcessSection, hiringSteps } from '~/data/careers'

const hiringImage = usePublicAsset(hiringProcessSection.image)

const accentClasses: Record<(typeof hiringSteps)[number]['accent'], { tile: string; number: string }> = {
  blue: { tile: 'bg-blue-100', number: 'text-blue-700' },
  indigo: { tile: 'bg-indigo-100', number: 'text-indigo-700' },
  violet: { tile: 'bg-violet-100', number: 'text-violet-700' },
  emerald: { tile: 'bg-emerald-100', number: 'text-emerald-700' },
  amber: { tile: 'bg-amber-100', number: 'text-amber-700' },
}
</script>

<template>
  <section
    id="hiring-process"
    class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py"
    aria-labelledby="hiring-process-heading"
  >
    <div aria-hidden="true" class="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
    <div aria-hidden="true" class="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-indigo-200/25 blur-3xl" />

    <div class="container-page relative">
      <CardHeader
        heading-id="hiring-process-heading"
        :badge="hiringProcessSection.kicker"
        :title="hiringProcessSection.title"
        :description="hiringProcessSection.description"
        :classes="hiringProcessSection.classes"
      />

      <div class="mt-10 grid grid-cols-1 items-stretch gap-6 lg:mt-12 lg:grid-cols-12 lg:gap-8">
        <div
          class="relative flex lg:col-span-5"
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }"
        >
          <figure
            class="relative min-h-[280px] w-full flex-1 overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-slate-100 shadow-[0_22px_48px_-26px_rgba(15,23,42,0.28)] sm:min-h-[360px] lg:min-h-0"
          >
            <img
              :src="hiringImage"
              :alt="hiringProcessSection.imageAlt"
              class="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            <div
              aria-hidden="true"
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"
            />
            <figcaption class="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-200">
                {{ hiringProcessSection.overlayKicker }}
              </p>
              <p class="mt-1.5 font-display text-lg font-bold text-white sm:text-xl">
                {{ hiringProcessSection.overlayTitle }}
              </p>
              <a
                :href="hiringProcessSection.cta.href"
                class="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-[13px] font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                {{ hiringProcessSection.cta.label }}
                <IconArrowRight class="h-4 w-4" />
              </a>
            </figcaption>
          </figure>
        </div>

        <ol class="relative flex flex-col gap-3 lg:col-span-7" role="list">
          <li
            v-for="(step, i) in hiringSteps"
            :key="step.no"
            v-motion
            :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 60 + i * 70, duration: 400 } }"
          >
            <article
              :class="[
                'group relative flex h-full items-start gap-3.5 overflow-hidden rounded-2xl border p-4 sm:gap-4 sm:p-5',
                i === 0
                  ? 'border-blue-400/25 bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 text-white shadow-[0_18px_40px_-18px_rgba(37,99,235,0.55)]'
                  : 'border-slate-200/80 bg-white shadow-[0_10px_28px_-18px_rgba(15,23,42,0.16)] transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_16px_32px_-18px_rgba(37,99,235,0.18)]',
              ]"
            >
              <span
                :class="[
                  'grid h-11 w-11 shrink-0 place-items-center rounded-xl font-display text-sm font-extrabold sm:h-12 sm:w-12',
                  i === 0
                    ? 'bg-white/15 text-white ring-1 ring-white/25'
                    : [accentClasses[step.accent].tile, accentClasses[step.accent].number],
                ]"
                aria-hidden="true"
              >
                {{ step.no }}
              </span>
              <div class="min-w-0 flex-1">
                <div class="flex items-start justify-between gap-3">
                  <h3
                    :class="[
                      'font-display text-[15px] font-bold leading-snug sm:text-base',
                      i === 0 ? 'text-white' : 'text-slate-900',
                    ]"
                  >
                    {{ step.title }}
                  </h3>
                  <Icon
                    :icon="step.iconMdi"
                    :class="['mt-0.5 h-5 w-5 shrink-0', i === 0 ? 'text-white/70' : 'text-slate-300']"
                    aria-hidden="true"
                  />
                </div>
                <p :class="['mt-1 text-[13px] leading-relaxed sm:text-[13.5px]', i === 0 ? 'text-white/80' : 'text-slate-500']">
                  {{ step.description }}
                </p>
              </div>
            </article>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
