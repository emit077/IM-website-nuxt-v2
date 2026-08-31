<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { subjectCategories, subjectsSection } from '~/data/institutions'
</script>

<template>
  <section id="subjects" class="relative scroll-mt-24 overflow-hidden section-surface-muted section-py"
    aria-labelledby="subjects-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="subjects-heading" :badge="subjectsSection.badge" :title="subjectsSection.title"
        :description="subjectsSection.description" :classes="subjectsSection.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3" role="list"
        aria-label="Teacher subject categories">
        <li
          v-for="(item, i) in subjectCategories"
          :key="item.id"
          :class="i === subjectCategories.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''"
          v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + (i % 3) * 50, duration: 400 } }"
        >
          <article
            class="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card"
          >
            <div class="relative aspect-[16/8] overflow-hidden bg-[#eef4ff] sm:aspect-[16/7]">
              <img
                :src="usePublicAsset(item.image)"
                :alt="`${item.title} faculty recruitment`"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                loading="lazy"
                decoding="async"
              />
              <span class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"
                aria-hidden="true" />
              <span
                class="absolute left-4 top-3 grid h-10 w-10 place-items-center rounded-xl bg-white/90 text-blue-600 shadow-sm ring-1 ring-blue-100"
                aria-hidden="true"
              >
                <Icon :icon="item.iconMdi" class="h-5 w-5" />
              </span>
            </div>
            <div class="flex flex-1 flex-col p-5">
              <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">{{ item.subtitle }}</p>
              <h3 class="font-display mt-1 text-[15px] font-bold text-slate-900 sm:text-base">{{ item.title }}</h3>
              <div class="mt-3 flex flex-wrap gap-1.5">
                <span
                  v-for="subject in item.subjects"
                  :key="subject"
                  class="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600"
                >
                  {{ subject }}
                </span>
              </div>
            </div>
          </article>
        </li>
      </ul>

      <div
        class="mt-8 flex flex-col gap-4 rounded-3xl border border-slate-200/80 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 420 } }"
      >
        <div>
          <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
            {{ subjectsSection.engagementLabel }}
          </p>
          <div class="mt-2.5 flex flex-wrap gap-2">
            <span
              v-for="item in subjectsSection.engagement"
              :key="item"
              class="rounded-full bg-blue-50 px-3 py-1 text-[12.5px] font-semibold text-blue-700"
            >
              {{ item }}
            </span>
          </div>
        </div>
        <a
          :href="subjectsSection.cta.href"
          class="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto"
        >
          {{ subjectsSection.cta.label }}
          <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>
