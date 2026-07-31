<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import { courseMatchingSection } from '~/data/academic-coverage'

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section id="course-matching"
    class="relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-[#0b1220] via-[#101a35] to-[#0a142f] section-py"
    aria-labelledby="course-matching-heading">
    <span aria-hidden="true"
      class="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-600/25 blur-3xl" />
    <span aria-hidden="true"
      class="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />

    <div class="container-page relative z-[1]">
      <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14" v-motion
        :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">
        <div>
          <CardHeader theme="dark" heading-id="course-matching-heading" :badge="courseMatchingSection.kicker"
            :title="courseMatchingSection.title" :description="courseMatchingSection.description"
            :classes="courseMatchingSection.classes" />

          <p class="mt-5 text-sm leading-relaxed text-blue-100/85 sm:text-base">
            {{ courseMatchingSection.body }}
          </p>

          <ul class="mt-7 grid gap-3 sm:grid-cols-2" role="list">
            <li v-for="(item, i) in courseMatchingSection.criteria" :key="item.label"
              class="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white/95 backdrop-blur-sm"
              v-motion :initial="{ opacity: 0, y: 10 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80 + i * 60, duration: 400 } }">
              <span
                class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-500/25 text-blue-200 ring-1 ring-blue-400/30"
                aria-hidden="true">
                <Icon :icon="item.iconMdi" class="h-4.5 w-4.5 h-[18px] w-[18px]" />
              </span>
              {{ item.label }}
            </li>
          </ul>

          <div class="mt-8">
            <a :href="courseMatchingSection.ctaHref" class="btn-primary ripple group inline-flex w-full sm:w-auto"
              @mousemove="rippleHandler">
              {{ courseMatchingSection.ctaLabel }}
              <IconArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true" v-motion
          :initial="{ opacity: 0, scale: 0.96 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 180, duration: 600 } }">
          <div
            class="overflow-hidden rounded-[28px] border border-white/15 bg-white/5 p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)] backdrop-blur-md sm:p-8">
            <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-300">Match flow</p>

            <ol class="relative mt-6 space-y-0" role="list">
              <li v-for="(step, i) in courseMatchingSection.flow" :key="step.title" class="relative flex gap-4 pb-8 last:pb-0">
                <div class="flex flex-col items-center">
                  <span
                    class="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-500/25 text-blue-100 ring-1 ring-blue-400/30">
                    <Icon :icon="step.iconMdi" class="h-5 w-5" />
                  </span>
                  <span v-if="i < courseMatchingSection.flow.length - 1"
                    class="mt-2 w-px flex-1 bg-gradient-to-b from-blue-400/50 to-transparent" />
                </div>
                <div class="min-w-0 pt-1.5">
                  <p class="text-[11px] font-bold uppercase tracking-wide text-blue-300/80">
                    Step {{ String(i + 1).padStart(2, '0') }}
                  </p>
                  <p class="mt-1 text-base font-semibold text-white">{{ step.title }}</p>
                  <p class="mt-0.5 text-sm text-blue-100/70">{{ step.description }}</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
