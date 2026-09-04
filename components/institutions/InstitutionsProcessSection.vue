<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { hiringProcessOutcome, hiringSteps, institutionsProcessSection } from '~/data/institutions'

const accentClasses: Record<string, string> = {
  blue: 'bg-blue-100 text-blue-700',
  indigo: 'bg-sky-100 text-sky-700',
  violet: 'bg-emerald-100 text-emerald-700',
  emerald: 'bg-orange-100 text-orange-700',
  amber: 'bg-violet-100 text-violet-700',
  teal: 'bg-teal-100 text-teal-700',
}
</script>

<template>
  <section
    id="hiring-process"
    class="relative scroll-mt-24 overflow-hidden bg-slate-50 section-py"
    aria-labelledby="process-heading"
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
        heading-id="process-heading"
        :badge="institutionsProcessSection.badge"
        :title="institutionsProcessSection.title"
        :description="institutionsProcessSection.description"
        :classes="institutionsProcessSection.classes"
      />

      <div class="mt-10 grid items-stretch gap-6 lg:mt-12 lg:grid-cols-12 lg:gap-8">
        <ol class="relative space-y-6 sm:space-y-7 lg:col-span-7" role="list">
          <li
            v-for="(step, i) in hiringSteps"
            :key="step.no"
            class="relative flex items-stretch"
            :class="i % 2 === 1 ? 'justify-end' : 'justify-start'"
            v-motion
            :initial="{ opacity: 0, y: 18 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 70, duration: 420 } }"
          >
            <article class="relative z-[1] w-[92%] sm:w-[88%]">
              <div
                :class="[
                  'process-card group relative flex w-full items-center gap-3 overflow-hidden rounded-[1.05rem] px-3.5 py-3 sm:gap-4 sm:rounded-[1.15rem] sm:px-4 sm:py-3.5',
                  i === 0
                    ? 'process-card--featured bg-[#2555D8] shadow-[0_18px_40px_-18px_rgba(37,85,216,0.55)]'
                    : 'border border-slate-200/80 bg-white shadow-[0_10px_28px_-16px_rgba(15,23,42,0.22)]',
                ]"
              >
                <span
                  :class="[
                    'relative grid h-11 w-11 shrink-0 place-items-center rounded-lg font-display text-[13px] font-extrabold sm:h-12 sm:w-12 sm:text-sm',
                    i === 0 ? 'bg-white/20 text-white' : accentClasses[step.accent],
                  ]"
                  aria-hidden="true"
                >
                  {{ step.no }}
                </span>
                <div class="relative min-w-0 flex-1">
                  <h3
                    :class="[
                      'font-display truncate text-[15px] font-bold leading-snug sm:text-[16px]',
                      i === 0 ? 'text-white' : 'text-slate-900',
                    ]"
                  >
                    {{ step.subtitle }}
                  </h3>
                  <p
                    :class="[
                      'mt-0.5 line-clamp-2 min-h-[2.5em] text-[12.5px] leading-snug sm:text-[13px]',
                      i === 0 ? 'text-blue-100' : 'text-slate-500',
                    ]"
                  >
                    {{ step.description }}
                  </p>
                </div>
              </div>

              <div
                v-if="i < hiringSteps.length - 1"
                aria-hidden="true"
                class="pointer-events-none absolute -bottom-7 z-[2] text-sky-400 sm:-bottom-8"
                :class="i % 2 === 0 ? 'right-2 sm:right-5' : 'left-2 sm:left-5'"
              >
                <svg
                  v-if="i % 2 === 0"
                  class="h-7 w-16 sm:h-8 sm:w-20"
                  viewBox="0 0 96 40"
                  fill="none"
                >
                  <path
                    d="M6 6c16 4 34 12 52 22 12 6 24 10 36 11"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-dasharray="3.4 3.6"
                  />
                  <path
                    d="M80 28l14 10-13 1.8"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  v-else
                  class="h-7 w-16 sm:h-8 sm:w-20"
                  viewBox="0 0 96 40"
                  fill="none"
                >
                  <path
                    d="M90 6c-16 4-34 12-52 22-12 6-24 10-36 11"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-dasharray="3.4 3.6"
                  />
                  <path
                    d="M16 28L2 38l13 1.8"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </article>
          </li>
        </ol>

        <div
          class="relative flex lg:col-span-5"
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520, delay: 100 } }"
        >
          <figure
            class="relative min-h-[280px] w-full flex-1 overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-slate-100 shadow-[0_22px_48px_-26px_rgba(15,23,42,0.28)] sm:min-h-[320px] lg:min-h-0"
          >
            <img
              :src="usePublicAsset(institutionsProcessSection.image)"
              :alt="institutionsProcessSection.imageAlt"
              class="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            <div
              aria-hidden="true"
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent"
            />
            <figcaption class="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-200">
                {{ institutionsProcessSection.imageCaption }}
              </p>
              <p class="mt-1.5 font-display text-lg font-bold text-white sm:text-xl">
                {{ institutionsProcessSection.imageNote }}
              </p>
            </figcaption>
          </figure>
        </div>
      </div>

      <p
        class="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-slate-600 sm:text-base"
        v-motion
        :initial="{ opacity: 0 }"
        :visibleOnce="{ opacity: 1, transition: { duration: 500 } }"
      >
        {{ hiringProcessOutcome }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.process-card {
  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.35s ease;
}

.process-card:hover {
  transform: translateY(-4px);
}

.process-card:not(.process-card--featured):hover {
  border-color: rgb(191 219 254);
  box-shadow:
    0 4px 12px -2px rgba(15, 23, 42, 0.08),
    0 22px 48px -16px rgba(37, 99, 235, 0.28);
}

.process-card--featured:hover {
  box-shadow: 0 24px 48px -14px rgba(37, 85, 216, 0.5);
}

@media (prefers-reduced-motion: reduce) {
  .process-card {
    transition: none;
  }

  .process-card:hover {
    transform: none;
  }
}
</style>
