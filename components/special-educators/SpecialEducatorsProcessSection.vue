<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { seProcess } from '~/data/special-educators'

const accentClasses: Record<string, string> = {
  blue: 'bg-blue-100 text-blue-700',
  indigo: 'bg-sky-100 text-sky-700',
  violet: 'bg-violet-100 text-violet-700',
  emerald: 'bg-emerald-100 text-emerald-700',
  amber: 'bg-amber-100 text-amber-700',
}
</script>

<template>
  <section
    id="special-education-process"
    class="relative scroll-mt-24 overflow-hidden section-surface-muted section-py"
    aria-labelledby="se-process-heading"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-indigo-100/40 blur-3xl"
    />

    <div class="container-page relative">
      <CardHeader
        heading-id="se-process-heading"
        :badge="seProcess.badge"
        :title="seProcess.title"
        :description="seProcess.description"
        :classes="seProcess.classes"
      />

      <ol class="relative mx-auto mt-10 max-w-4xl space-y-4" role="list">
        <li
          v-for="(step, i) in seProcess.steps"
          :key="step.no"
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 70, duration: 420 } }"
        >
          <article
            :class="[
              'relative overflow-hidden rounded-[1.15rem] border px-4 py-4 sm:px-5 sm:py-5',
              i === 0
                ? 'border-transparent bg-[#2555D8] shadow-[0_18px_40px_-18px_rgba(37,85,216,0.55)]'
                : 'border-slate-200/80 bg-white shadow-[0_10px_28px_-16px_rgba(15,23,42,0.22)]',
            ]"
          >
            <div class="flex items-start gap-3 sm:gap-4">
              <span
                :class="[
                  'relative grid h-11 w-11 shrink-0 place-items-center rounded-lg font-display text-[13px] font-extrabold sm:h-12 sm:w-12 sm:text-sm',
                  i === 0 ? 'bg-white/20 text-white' : accentClasses[step.accent],
                ]"
                aria-hidden="true"
              >
                {{ step.no }}
              </span>
              <div class="min-w-0 flex-1">
                <p
                  :class="[
                    'text-[11px] font-bold uppercase tracking-[0.14em]',
                    i === 0 ? 'text-blue-100' : 'text-slate-400',
                  ]"
                >
                  Step {{ step.no }}
                </p>
                <h3
                  :class="[
                    'mt-0.5 font-display text-[16px] font-bold leading-snug sm:text-lg',
                    i === 0 ? 'text-white' : 'text-slate-900',
                  ]"
                >
                  {{ step.title }}
                </h3>
                <ul class="mt-3 grid gap-2 sm:grid-cols-2" role="list">
                  <li
                    v-for="point in step.points"
                    :key="point"
                    :class="[
                      'flex items-start gap-2 text-[13.5px] leading-snug',
                      i === 0 ? 'text-blue-50' : 'text-slate-700',
                    ]"
                  >
                    <span
                      :class="[
                        'mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full',
                        i === 0 ? 'bg-white/15 text-white' : 'bg-blue-50 text-blue-700',
                      ]"
                      aria-hidden="true"
                    >
                      <IconCheck class="h-3 w-3" />
                    </span>
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>
