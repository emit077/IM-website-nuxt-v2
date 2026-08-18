<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { subMonitoring } from '~/data/subscription'

const engagementAccent = {
  gold: 'from-[#c9a227] to-[#9a7420]',
  diamond: 'from-blue-600 to-blue-800',
  platinum: 'from-slate-700 to-slate-900',
} as const
</script>

<template>
  <section id="monitoring" class="relative scroll-mt-36 overflow-hidden section-surface-muted section-py lg:scroll-mt-44"
    aria-labelledby="sub-monitoring-heading">
    <div class="container-page relative">
      <CardHeader heading-id="sub-monitoring-heading" :badge="subMonitoring.badge" :title="subMonitoring.title"
        :description="subMonitoring.description" :classes="subMonitoring.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5" role="list">
        <li v-for="(item, i) in subMonitoring.items" :key="item.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 25 + i * 35, duration: 380 } }">
          <article
            class="flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft">
            <span class="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-3 font-display text-[15px] font-bold text-slate-900">{{ item.title }}</h3>
            <p class="mt-2 text-[13px] leading-relaxed text-slate-600">{{ item.description }}</p>
          </article>
        </li>
      </ul>

      <ul class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3" role="list">
        <li v-for="level in subMonitoring.levels" :key="level.plan">
          <article class="rounded-[1.35rem] border border-slate-200/80 bg-white px-5 py-4 text-center shadow-soft">
            <p class="font-display text-lg font-bold text-slate-900">{{ level.plan }}</p>
            <p class="mt-1 text-sm font-semibold text-blue-700">{{ level.cadence }}</p>
            <p class="mt-1 text-[13px] text-slate-500">{{ level.detail }}</p>
          </article>
        </li>
      </ul>

      <div class="mt-16">
        <CardHeader heading-id="parent-engagement-heading" :badge="subMonitoring.engagement.badge"
          :title="subMonitoring.engagement.title" :classes="subMonitoring.classes" />
        <ul class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3" role="list">
          <li v-for="(item, i) in subMonitoring.engagement.items" :key="item.plan" v-motion
            :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 50, duration: 400 } }">
            <article
              :class="['flex h-full flex-col rounded-[1.5rem] bg-gradient-to-br p-6 text-white shadow-soft', engagementAccent[item.accent]]">
              <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-white/75">{{ item.plan }}</p>
              <h3 class="mt-2 font-display text-xl font-bold">{{ item.cadence }}</h3>
              <p class="mt-3 text-[13.5px] leading-relaxed text-white/85">{{ item.description }}</p>
            </article>
          </li>
        </ul>
      </div>

      <div class="mt-16 rounded-[1.65rem] border border-slate-200/80 bg-white p-6 shadow-soft sm:p-8">
        <CardHeader heading-id="tutor-discovery-heading" :badge="subMonitoring.discovery.badge"
          :title="subMonitoring.discovery.title" :description="subMonitoring.discovery.description"
          :classes="subMonitoring.classes" />

        <ul class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3" role="list">
          <li v-for="item in subMonitoring.discovery.plans" :key="item.plan">
            <article class="rounded-[1.35rem] border border-slate-200/80 bg-cream-50/60 p-5">
              <p class="font-display text-base font-bold text-slate-900">{{ item.plan }}</p>
              <p class="mt-2 text-[13.5px] text-slate-600">{{ item.access }}</p>
            </article>
          </li>
        </ul>

        <p class="mt-6 text-center text-[13px] font-semibold text-slate-700">
          {{ subMonitoring.discovery.evaluateLabel }}
        </p>
        <ul class="mt-3 flex flex-wrap justify-center gap-2" role="list">
          <li v-for="item in subMonitoring.discovery.evaluate" :key="item"
            class="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[12px] font-medium text-slate-700">
            {{ item }}
          </li>
        </ul>

        <div class="mt-8 flex justify-center">
          <ActionBtn variant="theme-secondary" :label="subMonitoring.discovery.cta.label"
            :href="subMonitoring.discovery.cta.href" icon="mdi:calendar-check-outline" />
        </div>
      </div>
    </div>
  </section>
</template>
