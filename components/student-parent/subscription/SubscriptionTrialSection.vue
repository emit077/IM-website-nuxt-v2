<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { subTrial } from '~/data/subscription'

type Accent = (typeof subTrial.evaluate)[number]['accent']

const accentMap: Record<Accent, { bar: string; icon: string; wrap: string }> = {
  violet: { bar: 'bg-violet-500', icon: 'text-violet-600', wrap: 'bg-violet-100' },
  blue: { bar: 'bg-blue-600', icon: 'text-blue-600', wrap: 'bg-blue-100' },
  emerald: { bar: 'bg-emerald-500', icon: 'text-emerald-600', wrap: 'bg-emerald-100' },
  orange: { bar: 'bg-orange-500', icon: 'text-orange-600', wrap: 'bg-orange-100' },
  fuchsia: { bar: 'bg-fuchsia-500', icon: 'text-fuchsia-600', wrap: 'bg-fuchsia-100' },
  sky: { bar: 'bg-sky-500', icon: 'text-sky-600', wrap: 'bg-sky-100' },
}
</script>

<template>
  <section id="trial" class="relative scroll-mt-36 overflow-hidden bg-white section-py lg:scroll-mt-44"
    aria-labelledby="sub-trial-heading">
    <div class="container-page relative">
      <CardHeader heading-id="sub-trial-heading" :badge="subTrial.badge" :title="subTrial.title"
        :description="subTrial.description" :classes="subTrial.classes" />

      <div class="mt-10 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12 lg:gap-6">
        <article
          class="relative flex flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-6 text-white shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)] sm:p-8 lg:col-span-5"
          v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
          <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-100">
            {{ subTrial.hook.label }}
          </p>
          <p class="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            {{ subTrial.hook.duration }}
          </p>
          <p class="mt-2 text-sm font-medium text-blue-100/80">Then you decide what comes next.</p>

          <ul class="mt-8 space-y-3" role="list">
            <li v-for="point in subTrial.hook.points" :key="point"
              class="flex items-start gap-2.5 text-[14px] font-medium text-white/95">
              <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/15 text-amber-300"
                aria-hidden="true">
                <IconCheck class="h-3 w-3" />
              </span>
              <span>{{ point }}</span>
            </li>
          </ul>

          <div class="mt-8">
            <ActionBtn variant="theme-secondary" :label="subTrial.cta.label" :href="subTrial.cta.href"
              icon="mdi:calendar-today" />
          </div>
          <p class="mt-4 text-[12px] leading-relaxed text-blue-100/80">
            {{ subTrial.important }}
          </p>
        </article>

        <div class="lg:col-span-7">
          <p class="my-4 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
            {{ subTrial.evaluateLabel }}
          </p>
          <ul class="grid grid-cols-1 gap-5 sm:grid-cols-2 py-2" role="list">
            <li v-for="(item, i) in subTrial.evaluate" :key="item.title" v-motion :initial="{ opacity: 0, y: 12 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 40, duration: 380 } }">
              <article
                class="group flex h-full items-start gap-3 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-card sm:p-5">
                <span :class="['grid h-11 w-11 shrink-0 place-items-center rounded-xl', accentMap[item.accent].wrap]">
                  <Icon :icon="item.iconMdi" :class="['h-5 w-5', accentMap[item.accent].icon]" aria-hidden="true" />
                </span>
                <div class="min-w-0">
                  <h3 class="font-display text-[15px] font-bold text-slate-900">{{ item.title }}</h3>
                  <p class="mt-1 text-[13px] leading-relaxed text-slate-500">{{ item.description }}</p>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
      <!-- 
      <div class="mt-8" v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 420 } }">
        <p class="text-center text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
          {{ subTrial.after.label }}
        </p>
        <ul class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3" role="list">
          <li v-for="(option, i) in subTrial.after.options" :key="option.label" class="relative">
            <article
              class="flex h-full flex-col items-center rounded-[1.35rem] border border-slate-200/80 bg-cream-50/60 px-5 py-6 text-center shadow-soft">
              <span class="grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-600 ring-1 ring-blue-100"
                aria-hidden="true">
                <Icon :icon="option.iconMdi" class="h-5 w-5" />
              </span>
              <h3 class="mt-3 font-display text-lg font-bold text-slate-900">{{ option.label }}</h3>
              <p class="mt-1 text-[13px] leading-relaxed text-slate-500">{{ option.description }}</p>
            </article>
            <Icon v-if="i < subTrial.after.options.length - 1" icon="mdi:arrow-right"
              class="absolute -right-2.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-blue-400 sm:block"
              aria-hidden="true" />
          </li>
        </ul>
        <p class="mt-3 text-center text-[12px] text-slate-400">{{ subTrial.after.note }}</p>
      </div>

      <div class="mt-16">
        <CardHeader heading-id="trial-journey-heading" :badge="subTrial.journey.badge" :title="subTrial.journey.title"
          :classes="subTrial.classes" />

        <ol class="relative mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-4 lg:grid-cols-7" role="list">
          <span aria-hidden="true"
            class="pointer-events-none absolute left-[8%] right-[8%] top-5 hidden h-px bg-slate-200 lg:block" />
          <li v-for="(step, i) in subTrial.journey.steps" :key="step.no" class="relative text-center" v-motion
            :initial="{ opacity: 0, y: 10 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + i * 35, duration: 360 } }">
            <span
              class="relative z-[1] mx-auto grid h-10 w-10 place-items-center rounded-full bg-white text-[12px] font-bold text-blue-700 ring-2 ring-blue-100">
              {{ step.no }}
            </span>
            <h3 class="mt-3 font-display text-[14px] font-bold text-slate-900">{{ step.title }}</h3>
            <p class="mt-1 text-[12px] leading-relaxed text-slate-500">{{ step.description }}</p>
          </li>
        </ol>
      </div> -->


    </div>
  </section>
</template>
