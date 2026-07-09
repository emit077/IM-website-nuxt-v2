<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeader.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { brochureCard, landingCard } from '~/data/tutors'

const cards = [brochureCard, landingCard]
</script>

<template>
  <section id="tutor-resources" class="relative scroll-mt-20 bg-white section-py"
    aria-labelledby="tutor-resources-heading">
    <div class="container-page">
      <CardHeader heading-id="tutor-resources-heading" classes="!px-0 !py-0" badge="Know Before You Join"
        title='Understand the <span class="text-gradient-brand">partnership model</span> first'
        description="Explore the official tutors brochure and opportunities overview — everything an educator needs to know about collaborating with Indian Mentors." />

      <div class="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 lg:grid-cols-2">
        <article v-for="(card, i) in cards" :key="card.badge"
          class="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-7"
          v-motion :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80 + i * 100, duration: 500 } }">
          <span aria-hidden="true"
            class="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

          <div class="relative flex items-center gap-3">
            <span
              class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white">
              <Icon :icon="card.iconMdi" class="h-5 w-5" aria-hidden="true" />
            </span>
            <span class="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">{{ card.badge }}</span>
          </div>

          <h3 class="font-display relative mt-4 text-lg font-bold text-slate-900 sm:text-xl">{{ card.title }}</h3>
          <p class="relative mt-2 text-sm leading-relaxed text-slate-600">{{ card.description }}</p>

          <ul class="relative mt-5 flex-1 space-y-2.5 border-t border-slate-100 pt-5" role="list">
            <li v-for="point in card.points" :key="point" class="flex items-start gap-2.5 text-[13px] text-slate-700">
              <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              {{ point }}
            </li>
          </ul>

          <a :href="card.cta.href"
            class="relative mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-700">
            {{ card.cta.label }}
            <IconArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
