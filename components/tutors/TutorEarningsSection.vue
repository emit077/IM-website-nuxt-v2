<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { earningsSection } from '~/data/tutors'

type Accent = (typeof earningsSection.flow)[number]['accent']

const accentClasses: Record<Accent, { tile: string; text: string }> = {
  blue: { tile: 'bg-blue-100', text: 'text-blue-700' },
  sky: { tile: 'bg-sky-100', text: 'text-sky-700' },
  emerald: { tile: 'bg-emerald-100', text: 'text-emerald-700' },
  indigo: { tile: 'bg-indigo-100', text: 'text-indigo-700' },
  violet: { tile: 'bg-violet-100', text: 'text-violet-700' },
}
</script>

<template>
  <section id="tutor-earnings"
    class="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-slate-50 via-[#f4f7fc] to-[#eef3fb] section-py"
    aria-labelledby="tutor-earnings-heading">
    <div class="container-page relative">
      <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
        <div class="relative lg:col-span-5">
          <div aria-hidden="true"
            class="pointer-events-none absolute -left-2 -top-4 hidden h-20 w-24 opacity-50 sm:block lg:-left-6 lg:-top-6"
            style="background-image: radial-gradient(#a5b4fc 1px, transparent 1px); background-size: 12px 12px;" />

          <CardHeader align="left" heading-id="tutor-earnings-heading" :badge="earningsSection.badge"
            :title="earningsSection.title" :description="earningsSection.description"
            :classes="earningsSection.classes" />

          <div class="mt-6">
            <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
              {{ earningsSection.payoutTitle }}
            </p>
            <ul class="mt-3 space-y-2" role="list">
              <li v-for="item in earningsSection.dashboardItems" :key="item"
                class="flex items-start gap-2.5 text-[13.5px] font-medium text-slate-700">
                <span
                  class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                  <IconCheck class="h-3 w-3" />
                </span>
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="mt-7" v-motion :initial="{ opacity: 0, y: 12 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 280 } }">
            <ActionBtn variant="primary" :label="earningsSection.cta.label" :href="earningsSection.cta.href" />
          </div>

          <p class="mt-4 max-w-md text-[12.5px] leading-relaxed text-slate-500">
            {{ earningsSection.footnote }}
          </p>
        </div>

        <div class="relative lg:col-span-7">
          <p class="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400 lg:sr-only">
            {{ earningsSection.flowTitle }}
          </p>
          <ol class="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4" role="list"
            :aria-label="earningsSection.flowTitle">
            <li v-for="(step, i) in earningsSection.flow" :key="step.no"
              :class="i === earningsSection.flow.length - 1 ? 'sm:col-span-2' : ''" v-motion
              :initial="{ opacity: 0, y: 18 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 60 + i * 70, duration: 420 } }">
              <article :class="[
                'timeline-card-surface group relative flex h-full items-start gap-3 overflow-hidden rounded-2xl border p-4 sm:gap-4 sm:p-5',
                i === 0
                  ? 'timeline-card-surface--featured border-blue-500/30 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 shadow-[0_18px_40px_-18px_rgba(37,99,235,0.55)]'
                  : 'border-slate-200/80 bg-white shadow-[0_8px_24px_-14px_rgba(15,23,42,0.18)]',
              ]">
                <span :class="[
                  'timeline-card-icon relative grid h-12 w-12 shrink-0 place-items-center rounded-xl sm:h-14 sm:w-14',
                  i === 0
                    ? 'bg-white/15 text-white ring-1 ring-white/25'
                    : [accentClasses[step.accent].tile, accentClasses[step.accent].text],
                ]">
                  <Icon :icon="step.iconMdi" class="h-6 w-6" aria-hidden="true" />
                </span>
                <div class="relative min-w-0 flex-1 pt-0.5">
                  <p :class="[
                    'text-[11px] font-bold uppercase tracking-[0.16em]',
                    i === 0 ? 'text-blue-100' : 'text-blue-600',
                  ]">
                    Step {{ step.no }}
                  </p>
                  <h3 :class="[
                    'mt-1 font-display text-[15.5px] font-bold leading-snug transition-colors duration-300 sm:text-[17px]',
                    i === 0 ? 'text-white' : 'text-slate-900 group-hover:text-blue-700',
                  ]">
                    {{ step.label }}
                  </h3>
                  <p :class="[
                    'mt-1.5 line-clamp-2 text-[13px] leading-snug sm:text-[13.5px]',
                    i === 0 ? 'text-blue-100' : 'text-slate-500',
                  ]">
                    {{ step.description }}
                  </p>
                </div>
              </article>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-card-surface {
  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.35s ease;
}

.timeline-card-surface::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.85) 0%,
      rgba(255, 255, 255, 0.15) 42%,
      transparent 70%);
  opacity: 0;
  transition: opacity 0.45s ease;
  pointer-events: none;
}

.timeline-card-surface::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 3px;
  border-radius: 1rem 1rem 0 0;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.45), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.timeline-card-surface:hover {
  transform: translateY(-6px);
  border-color: rgb(191 219 254);
  box-shadow:
    0 4px 12px -2px rgba(15, 23, 42, 0.08),
    0 22px 48px -16px rgba(37, 99, 235, 0.28);
}

.timeline-card-surface:hover::before,
.timeline-card-surface:hover::after {
  opacity: 1;
}

.timeline-card-surface--featured:hover {
  border-color: rgba(147, 197, 253, 0.55);
  box-shadow:
    0 4px 12px -2px rgba(15, 23, 42, 0.12),
    0 24px 48px -14px rgba(37, 99, 235, 0.5);
}

.timeline-card-surface--featured::before {
  background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.22) 0%,
      rgba(255, 255, 255, 0.06) 42%,
      transparent 70%);
}

.timeline-card-surface--featured::after {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent);
}

.timeline-card-icon {
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.timeline-card-surface:hover .timeline-card-icon {
  transform: scale(1.08);
}

@media (prefers-reduced-motion: reduce) {

  .timeline-card-surface,
  .timeline-card-icon {
    transition: none;
  }

  .timeline-card-surface:hover {
    transform: none;
  }

  .timeline-card-surface:hover .timeline-card-icon {
    transform: none;
  }
}
</style>
