<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import IconCalendar from '~/components/icons/IconCalendar.vue'
import { curriculumStages, stageHeaderContent } from '~/components/academic/gradesData'
import { externalLinks } from '~/data/external-links'
</script>

<template>
  <div>
    <section v-for="(stage, stageIndex) in curriculumStages" :id="stage.id" :key="stage.id" :class="[
      'relative scroll-mt-20 section-py',
      stageIndex % 2 === 0 ? 'section-surface-muted' : 'bg-white',
    ]" :aria-labelledby="`${stage.id}-heading`">
      <div aria-hidden="true" :class="[
        'pointer-events-none absolute -right-24 top-1/4 h-64 w-64 rounded-full blur-3xl opacity-40',
        `bg-gradient-to-br ${stage.gradient}`,
      ]" />

      <div class="container-page relative">
        <CardHeader :heading-id="`${stage.id}-heading`" :badge="stageHeaderContent(stage).badge"
          :title="stageHeaderContent(stage).title" :description="stageHeaderContent(stage).description"
          :classes="stageHeaderContent(stage).classes" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }" />
        <div class="mx-auto mt-8 max-w-3xl rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6"
          v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80, duration: 450 } }">
          <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-blue-600">{{ stage.focus }}</p>
          <p class="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[15px]">{{ stage.overview }}</p>

          <div class="mt-5">
            <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">Learning approach</p>
            <ul class="mt-2.5 grid gap-2 sm:grid-cols-2" role="list">
              <li v-for="item in stage.approach" :key="item"
                class="flex items-start gap-2.5 text-sm leading-snug text-slate-700">
                <Icon icon="mdi:check-circle" class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="mt-5 flex items-start gap-2.5 rounded-xl border border-slate-100 bg-cream-50/70 p-4">
            <Icon icon="mdi:flag-checkered" class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
            <p class="text-sm text-slate-700">
              <span class="font-semibold text-slate-900">Goal:</span> {{ stage.goal }}
            </p>
          </div>
        </div>
        <div v-if="stage.streamDetails?.length" class="mx-auto mt-8 max-w-3xl" v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 120, duration: 450 } }">
          <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">Streams offered</p>
          <div class="mt-3 grid gap-3 sm:grid-cols-3">
            <article v-for="stream in stage.streamDetails" :key="stream.name"
              class="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
              <p class="text-lg" aria-hidden="true">{{ stream.emoji }}</p>
              <h3 class="mt-2 font-display text-sm font-bold text-slate-900">{{ stream.name }}</h3>
              <p class="mt-1 text-xs leading-relaxed text-slate-500">{{ stream.subjects }}</p>
              <p class="mt-2 text-xs font-semibold text-blue-700">{{ stream.focus }}</p>
            </article>
          </div>
        </div>
        <div v-if="stage.examGroups?.length" class="mx-auto mt-8 max-w-3xl grid gap-3 sm:grid-cols-2" v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 120, duration: 450 } }">
          <div v-for="group in stage.examGroups" :key="group.label"
            class="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
            <p class="text-[11px] font-bold uppercase tracking-wide text-slate-500">{{ group.label }}</p>
            <div class="mt-3 flex flex-wrap gap-1.5">
              <span v-for="exam in group.items" :key="exam"
                class="rounded-full border border-slate-200 bg-cream-50 px-2.5 py-1 text-xs font-semibold text-slate-700">
                {{ exam }}
              </span>
            </div>
          </div>
        </div>
        <div v-if="stage.classes.length" class="mx-auto mt-10 max-w-4xl">
          <p class="text-center text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
            {{ stage.gradesLabel }}
          </p>

          <ol class="relative mt-6 space-y-5 sm:space-y-6" role="list">
            <div aria-hidden="true"
              class="pointer-events-none absolute bottom-6 left-[17px] top-6 w-px bg-gradient-to-b from-blue-200 via-slate-200 to-blue-200 sm:left-[21px]" />

            <li v-for="(cls, i) in stage.classes" :key="cls.id" class="relative flex items-start gap-3.5 sm:gap-5"
              v-motion :initial="{ opacity: 0, y: 16 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 60 + i * 50, duration: 450 } }">
              <span :class="[
                'relative z-10 mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full text-[12px] font-extrabold text-white shadow-[0_8px_18px_-6px_rgba(15,23,42,0.25)] ring-[3px] ring-white sm:h-11 sm:w-11 sm:text-[13px]',
                stage.accent,
              ]" aria-hidden="true">
                {{ String(i + 1).padStart(2, '0') }}
              </span>

              <article
                class="group w-full rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_8px_24px_-14px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-soft sm:p-5">
                <div class="flex items-start gap-3">
                  <span class="text-xl" aria-hidden="true">🎓</span>
                  <div class="min-w-0 flex-1">
                    <h3 class="font-display text-[15.5px] font-bold text-slate-900 sm:text-[17px]">
                      {{ cls.label }}
                    </h3>
                    <p v-if="cls.tagline" class="mt-0.5 text-[13px] font-medium text-blue-600">
                      {{ cls.tagline }}
                    </p>

                    <div v-if="cls.focus?.length" class="mt-4">
                      <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">Focus areas</p>
                      <ul class="mt-2 grid gap-1.5 sm:grid-cols-2" role="list">
                        <li v-for="point in cls.focus" :key="point"
                          class="flex items-start gap-2 text-[12.5px] leading-relaxed text-slate-600 sm:text-[13px]">
                          <IconCheck class="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600" />
                          {{ point }}
                        </li>
                      </ul>
                    </div>

                    <div v-if="cls.outcome" class="mt-4 rounded-xl border border-blue-100 bg-blue-50/60 px-3.5 py-3">
                      <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-blue-600">Outcome</p>
                      <p class="mt-1 text-[13px] leading-relaxed text-slate-700">{{ cls.outcome }}</p>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          </ol>
        </div>
        <div v-if="stage.keyFeatures?.length"
          class="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6" v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 100, duration: 450 } }">
          <p class="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
            <span aria-hidden="true">💡</span>
            Key features of {{ stage.programTitle }} program
          </p>
          <ul class="mt-4 grid gap-2 sm:grid-cols-2" role="list">
            <li v-for="feature in stage.keyFeatures" :key="feature"
              class="flex items-start gap-2.5 text-sm leading-snug text-slate-700">
              <Icon icon="mdi:check-circle" class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
              {{ feature }}
            </li>
          </ul>
        </div>
        <div
          class="mx-auto mt-10 max-w-3xl rounded-2xl border border-blue-200/80 bg-gradient-to-br from-blue-50 to-indigo-50/80 p-5 text-center sm:p-7"
          v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 140, duration: 450 } }">
          <h3 class="font-display text-lg font-bold text-slate-900 sm:text-xl">
            {{ stage.closingTitle }}
          </h3>
          <p class="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-slate-600">
            {{ stage.closingDescription }}
          </p>
          <div class="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a :href="externalLinks.studentSignup"
              class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto">
              <IconCalendar class="h-4 w-4 shrink-0" />
              Book Free Demo
            </a>
            <a href="#counsellor"
              class="inline-flex w-full items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50 sm:w-auto">
              Talk to Counsellor
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
