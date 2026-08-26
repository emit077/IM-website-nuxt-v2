<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { tutorSubjects } from '~/data/tutors'

const activeIndex = ref(0)

const items = tutorSubjects.items
const active = computed(() => items[activeIndex.value] ?? items[0])

function subjectList(subjects: string) {
  return subjects.split(' • ').map((s) => s.trim()).filter(Boolean)
}

function selectCategory(index: number) {
  activeIndex.value = index
}
</script>

<template>
  <section id="subjects" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="subjects-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-sky-100/40 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="subjects-heading" :badge="tutorSubjects.badge" :title="tutorSubjects.title"
        :description="tutorSubjects.description" :classes="tutorSubjects.classes" />

      <div
        class="mt-10 grid items-stretch gap-5 lg:grid-cols-[minmax(0,18.5rem)_minmax(0,1fr)] xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-6">
        <div class="rounded-[1.75rem] border border-slate-200/80 bg-cream-50/70 p-2 shadow-soft">
          <p class="px-3 pb-2 pt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Subject areas
          </p>
          <ul
            class="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-col lg:overflow-visible lg:pb-0"
            role="list" aria-label="Teaching subject categories">
            <li v-for="(item, i) in items" :key="item.title" class="shrink-0 lg:shrink">
              <button type="button"
                class="group flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition duration-200"
                :class="activeIndex === i
                  ? 'bg-white text-slate-900 shadow-soft ring-1 ring-blue-100'
                  : 'text-slate-600 hover:bg-white/80 hover:text-slate-900'"
                :aria-pressed="activeIndex === i"
                :aria-controls="'subjects-panel'"
                @click="selectCategory(i)">
                <span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl transition"
                  :class="activeIndex === i
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-blue-600 ring-1 ring-blue-100 group-hover:bg-blue-50'"
                  aria-hidden="true">
                  <Icon :icon="item.iconMdi" class="h-5 w-5" />
                </span>
                <span class="min-w-0">
                  <span class="block font-display text-sm font-bold leading-snug">{{ item.title }}</span>
                  <span class="mt-0.5 hidden text-[11px] font-medium text-slate-400 lg:block">
                    {{ subjectList(item.subjects).length }} subjects
                  </span>
                </span>
              </button>
            </li>
          </ul>
        </div>

        <article id="subjects-panel"
          class="relative flex min-h-[22rem] flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-soft sm:p-8 lg:p-10"
          :aria-label="active.title">
          <Icon :icon="active.iconMdi" aria-hidden="true"
            class="pointer-events-none absolute -right-6 -top-8 h-44 w-44 text-blue-50 sm:h-56 sm:w-56" />

          <div class="relative flex flex-1 flex-col">
            <div class="flex items-start justify-between gap-4">
              <span
                class="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                aria-hidden="true">
                <Icon :icon="active.iconMdi" class="h-7 w-7" />
              </span>
              <span
                class="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-700">
                {{ String(activeIndex + 1).padStart(2, '0') }} / {{ String(items.length).padStart(2, '0') }}
              </span>
            </div>

            <h3 class="mt-6 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {{ active.title }}
            </h3>
            <p class="mt-2 max-w-xl text-sm leading-relaxed text-slate-500">
              Teach across these subjects when they match your expertise, board coverage, and student demand.
            </p>

            <ul class="mt-6 flex flex-wrap gap-2" role="list">
              <li v-for="subject in subjectList(active.subjects)" :key="subject">
                <span
                  class="inline-flex items-center rounded-full border border-slate-200 bg-cream-50/80 px-3.5 py-1.5 text-sm font-medium text-slate-700">
                  {{ subject }}
                </span>
              </li>
            </ul>

            <div class="mt-auto pt-8">
              <NuxtLink :to="tutorSubjects.cta.href"
                class="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-cta transition hover:-translate-y-0.5 hover:bg-blue-700">
                {{ tutorSubjects.cta.label }}
                <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
