<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { subTrial } from '~/data/subscription'
</script>

<template>
  <section id="trial" class="relative scroll-mt-36 overflow-hidden bg-white section-py lg:scroll-mt-44"
    aria-labelledby="sub-trial-heading">
    <div class="container-page relative">
      <CardHeader heading-id="sub-trial-heading" :badge="subTrial.badge" :title="subTrial.title"
        :description="subTrial.description" :classes="subTrial.classes" />

      <p class="mt-8 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">Evaluate</p>
      <ul class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5" role="list">
        <li v-for="(item, i) in subTrial.evaluate" :key="item.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 380 } }">
          <article
            class="flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-cream-50/60 p-5 shadow-soft">
            <span class="grid h-10 w-10 place-items-center rounded-xl bg-white text-blue-600 ring-1 ring-blue-100"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-3 font-display text-[15px] font-bold text-slate-900">{{ item.title }}</h3>
            <p class="mt-2 text-[13px] leading-relaxed text-slate-600">{{ item.description }}</p>
          </article>
        </li>
      </ul>

      <div
        class="mt-8 rounded-[1.5rem] border border-slate-200/80 bg-slate-900 px-5 py-6 text-center text-white sm:px-8"
        v-motion :initial="{ opacity: 0, y: 12 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 420 } }">
        <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-200">{{ subTrial.after.label }}</p>
        <div class="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
          <template v-for="(option, i) in subTrial.after.options" :key="option">
            <span class="font-display text-lg font-bold">{{ option }}</span>
            <Icon v-if="i < subTrial.after.options.length - 1" icon="mdi:arrow-right" class="h-4 w-4 text-blue-300"
              aria-hidden="true" />
          </template>
        </div>
        <p class="mt-3 text-sm text-white/70">{{ subTrial.after.note }}</p>
      </div>

      <p
        class="mx-auto mt-6 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-center text-[13px] leading-relaxed text-amber-950 sm:text-sm">
        <span class="font-bold">Important:</span> {{ subTrial.important }}
      </p>

      <div class="mt-8 flex justify-center">
        <ActionBtn variant="theme-secondary" :label="subTrial.cta.label" :href="subTrial.cta.href"
          icon="mdi:calendar-today" />
      </div>

      <div class="mt-16">
        <CardHeader heading-id="trial-journey-heading" :badge="subTrial.journey.badge" :title="subTrial.journey.title"
          :classes="subTrial.classes" />

        <ol class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-7" role="list">
          <li v-for="(step, i) in subTrial.journey.steps" :key="step.no" v-motion :initial="{ opacity: 0, y: 12 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 25 + i * 30, duration: 360 } }">
            <article class="h-full rounded-[1.35rem] border border-slate-200/80 bg-cream-50/50 p-4 shadow-soft">
              <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">{{ step.no }}</p>
              <h3 class="mt-1 font-display text-[15px] font-bold text-slate-900">{{ step.title }}</h3>
              <p class="mt-2 text-[12.5px] leading-relaxed text-slate-600">{{ step.description }}</p>
            </article>
          </li>
        </ol>

        <div
          class="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 rounded-[1.5rem] border border-slate-200/80 bg-white px-4 py-4 shadow-soft">
          <template v-for="(label, i) in subTrial.journey.flow" :key="label">
            <span class="text-[13px] font-semibold text-slate-800 sm:text-sm">{{ label }}</span>
            <Icon v-if="i < subTrial.journey.flow.length - 1" icon="mdi:arrow-right" class="h-4 w-4 text-blue-500"
              aria-hidden="true" />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
