<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { curriculumStages, type ClassLevel, type CurriculumStage } from './gradesData'

const activeStageId = ref<CurriculumStage['id']>('foundation')
const activeClassId = ref<string | null>(null)

const activeStage = computed(
  () => curriculumStages.find((s) => s.id === activeStageId.value) ?? curriculumStages[1]!,
)

const activeClass = computed<ClassLevel | null>(() => {
  if (!activeClassId.value) return null
  return activeStage.value.classes.find((c) => c.id === activeClassId.value) ?? null
})

function selectStage(stage: CurriculumStage) {
  activeStageId.value = stage.id
  activeClassId.value = stage.classes[0]?.id ?? null
}

function selectClass(classId: string) {
  activeClassId.value = activeClassId.value === classId ? null : classId
}

onMounted(() => {
  selectStage(curriculumStages.find((s) => s.id === 'foundation') ?? curriculumStages[0]!)
})
</script>

<template>
  <section
    id="grades-covered"
    class="relative overflow-hidden bg-cream-50 py-12 sm:py-14 lg:py-20"
    aria-labelledby="grades-heading"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-mesh-light opacity-80"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-indigo-200/25 blur-3xl"
    />

    <div class="container-page relative">
      <!-- Header -->
      <div
        class="mx-auto max-w-3xl text-center"
        v-motion
        :initial="{ opacity: 0, y: 14 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <span class="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
          📘 Grades covered
        </span>
        <h2
          id="grades-heading"
          class="font-display mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[2.1rem]"
        >
          Personalised support across
          <span class="text-gradient-brand">every academic stage</span>
        </h2>
        <p class="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          From pre-primary to postgraduate — structured mentoring, learning plans, and progress
          monitoring adapted to each level of your child's journey.
        </p>
      </div>

      <div
        class="mt-10 lg:mt-12 lg:grid lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-8 xl:gap-10"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 100, duration: 550 } }"
      >
        <!-- Curriculum spine (vertical on desktop, horizontal scroll on mobile) -->
        <nav
          class="lg:sticky lg:top-24 lg:self-start"
          aria-label="Curriculum stages"
        >
          <p class="mb-3 hidden text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 lg:block">
            Our curriculum path
          </p>

          <!-- Mobile: horizontal pills -->
          <div
            class="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin] lg:hidden"
            role="tablist"
          >
            <button
              v-for="stage in curriculumStages"
              :key="stage.id"
              type="button"
              role="tab"
              :aria-selected="activeStageId === stage.id"
              class="flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-left text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              :class="
                activeStageId === stage.id
                  ? `${stage.accent} border-transparent text-white shadow-md`
                  : 'border-slate-200 bg-white text-slate-700 hover:border-blue-200'
              "
              @click="selectStage(stage)"
            >
              <span class="text-base leading-none">{{ stage.emoji }}</span>
              {{ stage.title }}
            </button>
          </div>

          <!-- Desktop: vertical timeline -->
          <ol class="hidden space-y-0 lg:block" role="tablist">
            <li v-for="(stage, i) in curriculumStages" :key="stage.id" class="relative flex gap-4">
              <!-- Connector line -->
              <div class="flex flex-col items-center">
                <button
                  type="button"
                  role="tab"
                  :aria-selected="activeStageId === stage.id"
                  :class="[
                    'relative z-[1] grid h-11 w-11 shrink-0 place-items-center rounded-xl border-2 text-lg shadow-md transition duration-300',
                    stage.stepColor,
                    activeStageId === stage.id
                      ? 'scale-110 text-white shadow-lg'
                      : 'bg-white text-slate-700 hover:scale-105',
                  ]"
                  @click="selectStage(stage)"
                >
                  {{ stage.emoji }}
                </button>
                <span
                  v-if="i < curriculumStages.length - 1"
                  aria-hidden="true"
                  class="my-1 w-0.5 flex-1 min-h-[28px] rounded-full bg-gradient-to-b from-slate-200 to-slate-300"
                />
              </div>

              <button
                type="button"
                role="tab"
                :aria-selected="activeStageId === stage.id"
                class="group mb-4 flex-1 rounded-xl border px-3 py-2.5 text-left transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                :class="
                  activeStageId === stage.id
                    ? 'border-blue-200 bg-white shadow-md ring-1 ring-blue-100'
                    : 'border-transparent bg-transparent hover:bg-white/80'
                "
                @click="selectStage(stage)"
              >
                <p
                  :class="[
                    'font-display text-sm font-bold',
                    activeStageId === stage.id ? 'text-blue-700' : 'text-slate-800',
                  ]"
                >
                  {{ stage.title }}
                </p>
                <p class="mt-0.5 text-[11px] font-medium text-slate-500">{{ stage.gradesLabel }}</p>
              </button>
            </li>
          </ol>
        </nav>

        <!-- Detail panel -->
        <div
          :key="activeStageId"
          class="relative mt-6 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_8px_40px_-12px_rgba(15,23,42,0.1)] lg:mt-0"
          v-motion
          :initial="{ opacity: 0, x: 12 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 400 } }"
        >
          <!-- Gradient header band -->
          <div
            :class="['relative px-6 py-8 sm:px-8 sm:py-10 bg-gradient-to-br', activeStage.gradient]"
          >
            <div
              class="pointer-events-none absolute inset-0 opacity-20"
              style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 18px 18px;"
              aria-hidden="true"
            />
            <div class="relative flex flex-wrap items-start gap-4 sm:gap-6">
              <span
                class="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/95 text-4xl shadow-xl ring-4 ring-white/40 sm:h-[4.5rem] sm:w-[4.5rem]"
                aria-hidden="true"
              >
                {{ activeStage.emoji }}
              </span>
              <div class="min-w-0 flex-1">
                <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-white/85">
                  {{ activeStage.focus }}
                </p>
                <h3 class="font-display mt-1 text-2xl font-bold text-white sm:text-3xl">
                  {{ activeStage.title }}
                </h3>
                <p class="mt-1 text-sm font-semibold text-white/90">{{ activeStage.subtitle }}</p>
                <p class="mt-3 max-w-xl text-sm leading-relaxed text-white/85">
                  {{ activeStage.overview }}
                </p>
              </div>
            </div>
          </div>

          <div class="space-y-6 p-6 sm:p-8">
            <!-- Grade / class chips -->
            <div v-if="activeStage.classes.length">
              <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
                Grades in this stage
              </p>
              <div class="mt-3 flex flex-wrap gap-2" role="list">
                <button
                  v-for="cls in activeStage.classes"
                  :key="cls.id"
                  type="button"
                  class="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  :class="
                    activeClassId === cls.id
                      ? 'border-blue-600 bg-blue-600 text-white shadow-md'
                      : 'border-slate-200 bg-slate-50 text-slate-800 hover:border-blue-300 hover:bg-blue-50'
                  "
                  @click="selectClass(cls.id)"
                >
                  {{ cls.label }}
                  <svg
                    v-if="cls.focus"
                    class="h-3.5 w-3.5 opacity-70"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>

              <!-- Expanded class detail (pre-primary etc.) -->
              <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 -translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <div
                  v-if="activeClass?.focus"
                  class="mt-4 rounded-xl border border-blue-100 bg-blue-50/50 p-4 sm:p-5"
                >
                  <p v-if="activeClass.tagline" class="text-xs font-bold uppercase text-blue-600">
                    {{ activeClass.tagline }}
                  </p>
                  <ul class="mt-2 space-y-1.5" role="list">
                    <li
                      v-for="item in activeClass.focus"
                      :key="item"
                      class="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <Icon icon="mdi:check-circle" class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                      {{ item }}
                    </li>
                  </ul>
                  <p v-if="activeClass.outcome" class="mt-3 text-sm font-medium text-slate-600">
                    <span class="text-slate-900">Outcome:</span> {{ activeClass.outcome }}
                  </p>
                </div>
              </Transition>
            </div>

            <!-- Streams (senior secondary) -->
            <div v-if="activeStage.streams?.length">
              <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
                Streams covered
              </p>
              <div class="mt-3 flex flex-wrap gap-2">
                <span
                  v-for="stream in activeStage.streams"
                  :key="stream"
                  class="inline-flex items-center gap-2 rounded-xl border border-indigo-100 bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-900"
                >
                  <Icon icon="mdi:book-education" class="h-4 w-4 text-indigo-600" />
                  {{ stream }}
                </span>
              </div>
            </div>

            <!-- Exam groups (competitive) -->
            <div v-if="activeStage.examGroups?.length" class="grid gap-4 sm:grid-cols-2">
              <div
                v-for="group in activeStage.examGroups"
                :key="group.label"
                class="rounded-xl border border-amber-100 bg-amber-50/60 p-4"
              >
                <p class="text-xs font-bold uppercase tracking-wide text-amber-800">
                  {{ group.label }}
                </p>
                <ul class="mt-2 flex flex-wrap gap-1.5" role="list">
                  <li
                    v-for="exam in group.items"
                    :key="exam"
                    class="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-sm ring-1 ring-amber-100"
                  >
                    {{ exam }}
                  </li>
                </ul>
              </div>
            </div>

            <!-- Learning approach -->
            <div>
              <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
                Learning approach
              </p>
              <ul class="mt-3 grid gap-2 sm:grid-cols-2" role="list">
                <li
                  v-for="item in activeStage.approach"
                  :key="item"
                  class="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-2.5 text-sm text-slate-700"
                >
                  <span
                    class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500 text-white"
                    aria-hidden="true"
                  >
                    <Icon icon="mdi:check" class="h-3 w-3" />
                  </span>
                  {{ item }}
                </li>
              </ul>
            </div>

            <!-- Goal + CTA -->
            <div
              class="flex flex-col gap-4 rounded-xl border border-slate-200/80 bg-gradient-to-r from-slate-50 to-blue-50/50 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
            >
              <div class="flex items-start gap-3">
                <span
                  class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-600 text-white"
                  aria-hidden="true"
                >
                  <Icon icon="mdi:flag-checkered" class="h-5 w-5" />
                </span>
                <div>
                  <p class="text-[11px] font-bold uppercase tracking-wide text-blue-600">Goal</p>
                  <p class="mt-0.5 text-sm font-medium text-slate-800">{{ activeStage.goal }}</p>
                </div>
              </div>
              <a
                href="#book-demo"
                class="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                {{ activeStage.cta }}
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
