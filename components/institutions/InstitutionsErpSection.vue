<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { ecosystemSection, techFeatures, techSection } from '~/data/institutions'

const ecosystemNodes = [
  { kind: 'party' as const, party: ecosystemSection.institutions, featured: false },
  { kind: 'flow' as const, flow: ecosystemSection.leftFlow },
  { kind: 'party' as const, party: ecosystemSection.hub, featured: true },
  { kind: 'flow' as const, flow: ecosystemSection.rightFlow },
  { kind: 'party' as const, party: ecosystemSection.educators, featured: false },
]
</script>

<template>
  <section id="technology" class="relative scroll-mt-24 overflow-hidden section-surface-muted section-py"
    aria-labelledby="tech-heading">
    <div class="container-page relative">
      <CardHeader heading-id="tech-heading" :badge="techSection.badge" :title="techSection.title"
        :description="techSection.description" :classes="techSection.classes" />


      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li v-for="(feature, i) in techFeatures" :key="feature.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + (i % 6) * 40, duration: 380 } }">
          <article
            class="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-6">
            <span
              class="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="feature.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-4 font-display text-[15px] font-bold text-slate-900">{{ feature.title }}</h3>
            <p class="mt-1.5 line-clamp-2 min-h-[2.6em] flex-1 text-[13px] leading-relaxed text-slate-600">
              {{ feature.description }}
            </p>
          </article>
        </li>
      </ul>

      <div id="ecosystem" class="mt-16 scroll-mt-24 sm:mt-20">
        <CardHeader heading-id="ecosystem-heading" :badge="ecosystemSection.badge" :title="ecosystemSection.title"
          :description="ecosystemSection.description" :classes="ecosystemSection.classes" />

        <div
          class="relative mt-10 flex flex-col items-stretch gap-3 lg:mt-12 lg:grid lg:grid-cols-[minmax(0,1fr)_8.5rem_minmax(0,1.12fr)_8.5rem_minmax(0,1fr)] lg:items-stretch lg:gap-0 xl:grid-cols-[minmax(0,1fr)_10rem_minmax(0,1.12fr)_10rem_minmax(0,1fr)]"
          role="group"
          aria-label="Two-way recruitment ecosystem between institutions, the recruitment team, and educators"
        >
          <template v-for="(node, i) in ecosystemNodes" :key="i">
            <article
              v-if="node.kind === 'party'"
              class="group relative flex min-w-0 flex-col overflow-hidden rounded-[1.6rem] border bg-white p-4 shadow-soft transition duration-300 sm:p-5"
              :class="node.featured
                ? 'z-[1] border-blue-300 shadow-[0_18px_40px_-18px_rgba(37,85,216,0.4)] ring-1 ring-blue-100'
                : 'border-slate-200/80 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card'"
              v-motion
              :initial="{ opacity: 0, y: 16 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 70, duration: 450 } }"
            >
              <div v-if="node.featured" aria-hidden="true"
                class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600" />

              <div class="flex items-center gap-3" :class="node.featured ? 'pt-1' : ''">
                <span
                  class="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl ring-1 transition duration-300 group-hover:scale-105"
                  :class="node.featured
                    ? 'bg-blue-600 text-white ring-blue-600'
                    : 'bg-blue-50 text-blue-600 ring-blue-100'"
                  aria-hidden="true"
                >
                  <Icon :icon="node.party.iconMdi" class="h-5 w-5" />
                </span>
                <div class="min-w-0">
                  <p
                    v-if="node.featured"
                    class="mb-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600"
                  >
                    {{ ecosystemSection.hub.role }}
                  </p>
                  <h4 class="font-display text-[16px] font-bold leading-tight text-slate-900 sm:text-lg">
                    {{ node.party.title }}
                  </h4>
                </div>
              </div>

              <div class="relative mt-4 flex flex-1 flex-col gap-2.5">
                <div class="rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-2.5">
                  <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">Need</p>
                  <p class="mt-1 text-[13px] leading-snug text-slate-700">{{ node.party.need }}</p>
                </div>
                <div class="rounded-xl border border-blue-100 bg-blue-50/70 px-3 py-2.5">
                  <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">We provide</p>
                  <p class="mt-1 text-[13px] leading-snug text-slate-700">{{ node.party.provide }}</p>
                </div>
              </div>
            </article>

            <div
              v-else
              class="flex items-center justify-center py-1 lg:px-1.5 lg:py-0"
              v-motion
              :initial="{ opacity: 0 }"
              :visibleOnce="{ opacity: 1, transition: { delay: 80 + i * 70, duration: 420 } }"
            >
              <div class="flex w-full flex-col items-stretch gap-2 lg:gap-3">
                <div class="rounded-xl border border-blue-100 bg-white px-2.5 py-2 shadow-soft">
                  <p class="text-center text-[9px] font-bold uppercase leading-tight tracking-[0.08em] text-blue-600 sm:text-[10px]">
                    {{ node.flow.forward.label }}
                  </p>
                  <div class="mt-1.5 flex flex-col items-center text-blue-500 lg:flex-row" aria-hidden="true">
                    <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    <span class="h-5 w-px bg-[repeating-linear-gradient(180deg,#3b82f6_0_3px,transparent_3px_6px)] lg:mx-1 lg:h-px lg:w-auto lg:flex-1 lg:bg-[repeating-linear-gradient(90deg,#3b82f6_0_3px,transparent_3px_6px)]" />
                    <svg class="h-3.5 w-3.5 rotate-90 lg:rotate-0" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h9M9 4.5L13 8l-4 3.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="sr-only">{{ node.flow.forward.detail }}</p>
                </div>

                <div class="rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-2">
                  <div class="flex flex-col items-center text-slate-400 lg:flex-row" aria-hidden="true">
                    <svg class="h-3.5 w-3.5 rotate-90 lg:rotate-0" viewBox="0 0 16 16" fill="none">
                      <path d="M13 8H4M7 4.5L3 8l4 3.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span class="h-5 w-px bg-[repeating-linear-gradient(180deg,#94a3b8_0_3px,transparent_3px_6px)] lg:mx-1 lg:h-px lg:w-auto lg:flex-1 lg:bg-[repeating-linear-gradient(90deg,#94a3b8_0_3px,transparent_3px_6px)]" />
                    <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  </div>
                  <p class="mt-1.5 text-center text-[9px] font-bold uppercase leading-tight tracking-[0.08em] text-slate-500 sm:text-[10px]">
                    {{ node.flow.backward.label }}
                  </p>
                  <p class="sr-only">{{ node.flow.backward.detail }}</p>
                </div>
              </div>
            </div>
          </template>
        </div>

        <p
          class="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-slate-600 sm:text-base"
          v-motion
          :initial="{ opacity: 0 }"
          :visibleOnce="{ opacity: 1, transition: { duration: 500 } }"
        >
          {{ ecosystemSection.closing }}
        </p>
      </div>
    </div>
  </section>
</template>
