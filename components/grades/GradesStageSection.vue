<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { gradesExplorer, type GradeStage } from '~/data/grades'
import { externalLinks } from '~/data/external-links'

const props = defineProps<{
  stage: GradeStage
  index: number
  nextStage?: GradeStage | null
}>()

const iconTile: Record<GradeStage['accent'], string> = {
  amber: 'bg-amber-50 text-amber-700 ring-amber-100',
  emerald: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  sky: 'bg-sky-50 text-sky-700 ring-sky-100',
  violet: 'bg-violet-50 text-violet-700 ring-violet-100',
  rose: 'bg-rose-50 text-rose-700 ring-rose-100',
  orange: 'bg-orange-50 text-orange-700 ring-orange-100',
  slate: 'bg-slate-100 text-slate-700 ring-slate-200',
}

const headingId = `${props.stage.id}-heading`
const imageOnRight = props.index % 2 === 1
</script>

<template>
  <section
    :id="stage.id"
    class="relative scroll-mt-28 overflow-hidden"
    :class="[
      index % 2 === 0 ? 'bg-white' : 'section-surface-muted',
      index === 0 ? 'pt-8 sm:pt-10 pb-14 sm:pb-16 lg:pb-20' : 'section-py',
    ]"
    :aria-labelledby="headingId"
  >
    <div class="container-page">
      <div class="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8" v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
        <figure
          class="relative min-h-[16rem] w-full overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-soft sm:min-h-[20rem] lg:col-span-5 lg:min-h-full"
          :class="imageOnRight ? 'lg:order-2' : ''">
          <img :src="usePublicAsset(stage.visual)" :alt="`${stage.title} programme — Indian Mentors`"
            class="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" />
          <div aria-hidden="true"
            class="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
          <figcaption class="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <span class="inline-flex items-center gap-2.5 rounded-2xl bg-white/95 px-3 py-2 shadow-sm backdrop-blur-sm">
              <span class="grid h-9 w-9 place-items-center rounded-xl ring-1" :class="iconTile[stage.accent]"
                aria-hidden="true">
                <Icon :icon="stage.iconMdi" class="h-5 w-5" />
              </span>
              <span>
                <span class="block font-display text-sm font-bold text-slate-900">{{ stage.title }}</span>
                <span class="block text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                  {{ stage.shortTitle }}
                </span>
              </span>
            </span>
          </figcaption>
        </figure>

        <div class="min-w-0 lg:col-span-7" :class="imageOnRight ? 'lg:order-1' : ''">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
            {{ String(index + 1).padStart(2, '0') }} · {{ stage.years }}
          </p>
          <h2 :id="headingId"
            class="mt-2 font-display text-[1.65rem] font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {{ stage.title }}
          </h2>
          <p class="mt-1.5 text-[15px] font-semibold text-blue-700 sm:text-base">
            {{ stage.tagline }}
          </p>
          <p class="mt-1 text-[13px] font-medium text-slate-500">{{ stage.focus }}</p>
          <p class="mt-4 max-w-xl text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
            {{ stage.overview }}
          </p>

          <p class="mt-6 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
            {{ gradesExplorer.approachLabel }}
          </p>
          <ul class="mt-3 grid max-w-xl grid-cols-2 gap-x-5 gap-y-2" role="list">
            <li v-for="item in stage.approach" :key="item"
              class="flex min-w-0 items-center gap-2 text-[12.5px] font-medium leading-none text-slate-700 sm:text-[13px]">
              <IconCheck class="h-3.5 w-3.5 shrink-0 text-blue-600" />
              <span class="whitespace-nowrap">{{ item }}</span>
            </li>
          </ul>

          <div class="mt-5 flex items-start gap-2.5 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
            <Icon icon="mdi:flag-checkered" class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
            <p class="text-sm leading-relaxed text-slate-700">
              <span class="font-semibold text-slate-900">{{ gradesExplorer.goalLabel }}:</span>
              {{ stage.goal }}
            </p>
          </div>
        </div>
      </div>

      <div v-if="stage.classes.length" class="mt-8 sm:mt-10">
        <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
          {{ gradesExplorer.classesLabel }}
        </p>
        <ul class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2" :class="stage.classes.length > 2 ? 'xl:grid-cols-3' : ''"
          role="list">
          <li v-for="(cls, i) in stage.classes" :id="cls.id" :key="cls.id" class="scroll-mt-28">
            <article class="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
              <div class="flex items-start justify-between gap-3">
                <h3 class="font-display text-[15px] font-bold text-slate-900">{{ cls.label }}</h3>
                <span
                  class="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-blue-50 text-[11px] font-extrabold text-blue-700 ring-1 ring-blue-100"
                  aria-hidden="true">
                  {{ String(i + 1).padStart(2, '0') }}
                </span>
              </div>
              <p class="mt-1 text-[13px] font-medium text-blue-700">{{ cls.tagline }}</p>
              <ul class="mt-3 space-y-1.5" role="list">
                <li v-for="point in cls.focus" :key="point"
                  class="flex items-start gap-2 text-[12.5px] leading-snug text-slate-600">
                  <IconCheck class="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600" />
                  {{ point }}
                </li>
              </ul>
              <p
                class="mt-4 rounded-xl border border-blue-100 bg-cream-50/80 px-3 py-2.5 text-[12.5px] leading-relaxed text-slate-700">
                <span class="font-semibold text-blue-700">Outcome.</span>
                {{ cls.outcome }}
              </p>
            </article>
          </li>
        </ul>
      </div>

      <div v-if="stage.streams?.length" class="mt-8">
        <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
          {{ gradesExplorer.streamsLabel }}
        </p>
        <ul class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3" role="list">
          <li v-for="stream in stage.streams" :key="stream.name">
            <article class="h-full rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
              <span class="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                aria-hidden="true">
                <Icon :icon="stream.iconMdi" class="h-5 w-5" />
              </span>
              <h3 class="mt-3 font-display text-sm font-bold text-slate-900">{{ stream.name }}</h3>
              <p class="mt-1 text-[12.5px] leading-relaxed text-slate-500">{{ stream.subjects }}</p>
              <p class="mt-2 text-[12.5px] font-semibold text-blue-700">{{ stream.focus }}</p>
            </article>
          </li>
        </ul>
      </div>

      <div v-if="stage.examGroups?.length" class="mt-8">
        <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
          {{ gradesExplorer.examsLabel }}
        </p>
        <div class="mt-4 grid gap-3 sm:grid-cols-2">
          <article v-for="group in stage.examGroups" :key="group.label"
            class="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
            <p class="text-[12px] font-bold uppercase tracking-wide text-slate-500">{{ group.label }}</p>
            <div class="mt-3 flex flex-wrap gap-1.5">
              <span v-for="exam in group.items" :key="exam"
                class="rounded-full border border-slate-200 bg-cream-50 px-2.5 py-1 text-xs font-semibold text-slate-700">
                {{ exam }}
              </span>
            </div>
          </article>
        </div>
      </div>

      <div class="mt-8 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
        <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
          {{ gradesExplorer.featuresLabel }}
        </p>
        <ul class="mt-3 grid gap-2 sm:grid-cols-2" role="list">
          <li v-for="feature in stage.features" :key="feature"
            class="flex items-start gap-2.5 text-sm leading-snug text-slate-700">
            <Icon icon="mdi:check-circle" class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
            {{ feature }}
          </li>
        </ul>

        <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div class="flex flex-col gap-3 sm:flex-row">
            <a :href="externalLinks.studentSignup"
              class="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700">
              {{ stage.ctaLabel }}
              <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
            </a>
            <a :href="gradesExplorer.counsellorHref"
              class="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
              {{ gradesExplorer.counsellorLabel }}
            </a>
          </div>

          <a v-if="nextStage" :href="`#${nextStage.id}`"
            class="inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue-700 transition hover:text-blue-800">
            {{ gradesExplorer.nextStageLabel }}: {{ nextStage.title }}
            <Icon icon="mdi:arrow-down" class="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
