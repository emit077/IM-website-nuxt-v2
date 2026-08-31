<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { whoChoosesSection } from '~/data/tutor-registration-plans'
</script>

<template>
  <section id="who-should-choose" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="who-should-choose-heading">
    <div class="container-page relative">
      <CardHeader heading-id="who-should-choose-heading" :badge="whoChoosesSection.badge"
        :title="whoChoosesSection.title" :classes="whoChoosesSection.classes" />

      <div class="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
        <article class="flex flex-col rounded-[1.75rem] border border-slate-200/80 bg-white p-8 shadow-soft sm:p-10"
          v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
          <h3 class="mt-5 font-display text-2xl font-extrabold text-slate-900">{{ whoChoosesSection.free.title }}</h3>
          <ul class="mt-6 flex-1 space-y-3" role="list">
            <li v-for="item in whoChoosesSection.free.items" :key="item"
              class="flex items-start gap-2.5 text-[14px] font-medium text-slate-800">
              <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600"
                aria-hidden="true">
                <IconCheck class="h-3 w-3" />
              </span>
              <span>{{ item }}</span>
            </li>
          </ul>
          <a :href="whoChoosesSection.free.cta.href"
            class="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 sm:w-fit">
            {{ whoChoosesSection.free.cta.label }}
            <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true" />
          </a>
        </article>
        <article
          class="flex flex-col rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-8 text-white shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)] sm:p-10"
          v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80, duration: 450 } }">
          <h3 class="mt-5 font-display text-2xl font-extrabold">{{ whoChoosesSection.premium.title }}</h3>
          <ul class="mt-6 flex-1 space-y-3" role="list">
            <li v-for="item in whoChoosesSection.premium.items" :key="item"
              class="flex items-start gap-2.5 text-[14px] font-medium text-white">
              <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/15 text-amber-300"
                aria-hidden="true">
                <IconCheck class="h-3 w-3" />
              </span>
              <span>{{ item }}</span>
            </li>
          </ul>
          <a :href="whoChoosesSection.premium.cta.href"
            class="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-cream-50 sm:w-fit">
            {{ whoChoosesSection.premium.cta.label }}
            <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true" />
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
