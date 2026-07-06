<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import { curriculumStages, type CurriculumStage } from './gradesData'

const activeId = ref<CurriculumStage['id']>(curriculumStages[0]!.id)

function toggle(id: CurriculumStage['id']) {
  activeId.value = activeId.value === id ? ('' as CurriculumStage['id']) : id
}
</script>

<template>
  <section id="grades-covered" class="relative overflow-x-clip bg-cream-50 py-14 sm:py-16 lg:py-24"
    aria-labelledby="grades-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 -top-32 -z-0 mx-auto h-80 max-w-4xl bg-gradient-to-b from-blue-100/50 to-transparent blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="grades-heading" content-class="!px-0 !py-0" badge="Grades covered"
        title='Support across <span class="text-gradient-brand">every academic stage</span>'
        description="Indian Mentors provides structured tutoring from early childhood to postgraduate studies — adapting to each student's level, learning style, and goals."
        v-motion :initial="{ opacity: 0, y: 14 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }" />

      <!-- Accordion -->
      <div class="mx-auto mt-10 max-w-3xl space-y-3 sm:mt-12" v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 100, duration: 550 } }">
        <div v-for="(stage, i) in curriculumStages" :key="stage.id" :class="[
          'overflow-hidden rounded-2xl border bg-white transition-colors duration-300',
          activeId === stage.id
            ? 'border-blue-300 shadow-[0_16px_44px_-20px_rgba(37,99,235,0.35)] ring-1 ring-blue-100'
            : 'border-slate-200/80 shadow-sm',
        ]">
          <!-- Row trigger -->
          <button type="button"
            class="flex w-full items-center gap-4 px-4 py-4 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:px-5"
            :aria-expanded="activeId === stage.id" :aria-controls="`stage-panel-${stage.id}`" @click="toggle(stage.id)">
            <span :class="[
              'grid h-11 w-11 shrink-0 place-items-center rounded-xl font-display text-sm font-extrabold tabular-nums transition-colors duration-300',
              activeId === stage.id ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600 ring-1 ring-blue-100',
            ]" aria-hidden="true">
              {{ String(i + 1).padStart(2, '0') }}
            </span>

            <span class="min-w-0 flex-1">
              <span class="block font-display text-base font-bold text-slate-900 sm:text-lg">
                {{ stage.title }}
              </span>
              <span class="mt-0.5 block truncate text-xs text-slate-500 sm:text-[13px]">
                {{ stage.gradesLabel }}
              </span>
            </span>

            <span class="hidden shrink-0 text-[11px] font-semibold uppercase tracking-wide text-slate-400 sm:block">
              {{ stage.subtitle }}
            </span>

            <Icon icon="mdi:chevron-down" :class="[
              'h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300',
              activeId === stage.id ? 'rotate-180 text-blue-600' : '',
            ]" aria-hidden="true" />
          </button>

          <!-- Expandable panel -->
          <Transition enter-active-class="grid transition-all duration-300 ease-out"
            enter-from-class="grid-rows-[0fr] opacity-0" enter-to-class="grid-rows-[1fr] opacity-100"
            leave-active-class="grid transition-all duration-200 ease-in" leave-from-class="grid-rows-[1fr] opacity-100"
            leave-to-class="grid-rows-[0fr] opacity-0">
            <div v-if="activeId === stage.id" :id="`stage-panel-${stage.id}`" class="grid">
              <div class="min-h-0 overflow-hidden">
                <div class="border-t border-slate-100 px-4 pb-5 pt-5 sm:px-5">
                  <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-blue-600">{{ stage.focus }}</p>
                  <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ stage.overview }}</p>

                  <!-- Grades -->
                  <div v-if="stage.classes.length" class="mt-5">
                    <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">Grades in this stage</p>
                    <div class="mt-2.5 flex flex-wrap gap-2">
                      <span v-for="cls in stage.classes" :key="cls.id"
                        class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                        {{ cls.label }}
                      </span>
                    </div>
                  </div>

                  <!-- Streams -->
                  <div v-if="stage.streams?.length" class="mt-5">
                    <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">Streams covered</p>
                    <div class="mt-2.5 flex flex-wrap gap-2">
                      <span v-for="stream in stage.streams" :key="stream"
                        class="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                        {{ stream }}
                      </span>
                    </div>
                  </div>

                  <!-- Exam tracks -->
                  <div v-if="stage.examGroups?.length" class="mt-5 grid gap-3 sm:grid-cols-2">
                    <div v-for="group in stage.examGroups" :key="group.label"
                      class="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3.5">
                      <p class="text-[11px] font-bold uppercase tracking-wide text-slate-500">{{ group.label }}</p>
                      <div class="mt-2 flex flex-wrap gap-1.5">
                        <span v-for="exam in group.items" :key="exam"
                          class="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                          {{ exam }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- Learning approach -->
                  <div class="mt-5">
                    <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">Learning approach</p>
                    <ul class="mt-2.5 grid gap-2 sm:grid-cols-2" role="list">
                      <li v-for="item in stage.approach" :key="item"
                        class="flex items-start gap-2.5 text-sm leading-snug text-slate-700">
                        <Icon icon="mdi:check-circle" class="mt-0.5 h-4 w-4 shrink-0 text-blue-600"
                          aria-hidden="true" />
                        {{ item }}
                      </li>
                    </ul>
                  </div>

                  <!-- Goal + CTAs -->
                  <div class="mt-5 flex flex-col gap-4 rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
                    <div class="flex items-start gap-2.5">
                      <Icon icon="mdi:flag-checkered" class="mt-0.5 h-4 w-4 shrink-0 text-blue-600"
                        aria-hidden="true" />
                      <p class="text-sm text-slate-700">
                        <span class="font-semibold text-slate-900">Goal:</span> {{ stage.goal }}
                      </p>
                    </div>
                    <div class="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                      <NuxtLink :to="`/grades#${stage.id}`"
                        class="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-blue-200 bg-white px-4 py-2.5 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50 sm:flex-none">
                        Learn More
                        <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
                      </NuxtLink>
                      <a href="#book-demo"
                        class="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:flex-none">
                        {{ stage.cta }}
                        <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <div class="mx-auto mt-10 flex max-w-3xl justify-center" v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200, duration: 450 } }">
        <NuxtLink to="/grades"
          class="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-soft">
          View all grades &amp; programs
          <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
