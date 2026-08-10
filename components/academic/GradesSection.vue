<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { gradesSection } from '~/data/academic-coverage'

const stages = gradesSection.stages

const META_TAG_LIMIT = 5

function clippedMetaTags(items?: string[]) {
  const list = items ?? []
  return {
    shown: list.slice(0, META_TAG_LIMIT),
    hasMore: list.length > META_TAG_LIMIT,
  }
}
</script>

<template>
  <div id="grades-covered" class="scroll-mt-20">
    <section class="relative overflow-hidden section-surface-muted section-py-compact mt-10 pt-10 sm:pt-12"
      aria-labelledby="grades-heading">
      <div class="container-page">
        <CardHeader heading-id="grades-heading" :badge="gradesSection.kicker" :title="gradesSection.title"
          :description="gradesSection.description" :classes="`${gradesSection.classes} mx-auto max-w-3xl`" />
      </div>
    </section>

    <section v-for="(stage, i) in stages" :id="stage.id" :key="stage.id"
      class="relative scroll-mt-24 overflow-hidden bg-white py-3 sm:py-4" :aria-labelledby="`${stage.id}-heading`">
      <div class="container-page">
        <div class="grid items-stretch gap-4 overflow-hidden rounded-2xl border lg:grid-cols-12 lg:gap-0"
          :class="i % 2 === 0
            ? 'border-sky-100/80 bg-sky-50/40'
            : 'border-slate-200/60 bg-slate-50/45'">
          <div class="lg:col-span-4 lg:h-full" :class="i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'" v-motion
            :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
            <div
              class="group relative mx-auto aspect-[5/5.2] w-full max-w-md lg:mx-0 lg:aspect-auto lg:h-full lg:max-w-none lg:min-h-full">
              <div class="absolute inset-0 overflow-hidden"
                :class="i % 2 === 1 ? 'grade-visual grade-visual--rtl' : 'grade-visual grade-visual--ltr'">
                <img :src="usePublicAsset(stage.visual)" :alt="`${stage.title} — Indian Mentors`"
                  class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" loading="lazy"
                  decoding="async" />
              </div>
              <span
                class="absolute bottom-4 z-10 inline-flex items-center gap-2 rounded-2xl bg-white/95 px-3 py-2 shadow-soft backdrop-blur-sm"
                :class="i % 2 === 1 ? 'right-4 lg:right-6' : 'left-4'">
                <span class="grid h-8 w-8 place-items-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-100"
                  aria-hidden="true">
                  <Icon :icon="stage.iconMdi" class="h-4 w-4" />
                </span>
                <span class="pr-1 font-display text-sm font-bold text-slate-900">{{ stage.title }}</span>
              </span>
            </div>
          </div>

          <div
            class="lg:col-span-8 px-5 py-5 pl-6 sm:px-6 sm:py-6 sm:pl-8 lg:px-7 lg:py-7 lg:pl-11 xl:px-8 xl:py-8 xl:pl-14"
            :class="i % 2 === 1 ? 'lg:order-1 lg:pl-8 lg:pr-11 xl:pl-8 xl:pr-14' : 'lg:order-2'" v-motion
            :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 60, duration: 480 } }">
            <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
              {{ String(i + 1).padStart(2, '0') }} · {{ stage.gradesLabel }}
            </p>

            <h3 :id="`${stage.id}-heading`"
              class="mt-2 max-w-xl font-display text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl lg:text-[1.85rem] lg:leading-[1.25]">
              {{ stage.tagline }}
            </h3>

            <p class="mt-3 max-w-xl text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              {{ stage.overview }}
            </p>

            <ul class="mt-5 grid max-w-xl grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2" role="list">
              <li v-for="item in stage.highlights.slice(0, 4)" :key="item"
                class="flex min-w-0 items-center gap-2 text-[13.5px] text-slate-700">
                <span class="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-500"
                  aria-hidden="true">
                  <Icon icon="mdi:arrow-right" class="h-3 w-3" />
                </span>
                <span class="truncate whitespace-nowrap">{{ item }}</span>
              </li>
            </ul>

            <div v-if="stage.chips?.length" class="mt-5 max-w-xl">
              <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">Grades</p>
              <p
                class="mt-2 flex flex-wrap items-center text-[13px] font-semibold leading-none tracking-wide text-slate-600">
                <template v-for="(chip, idx) in clippedMetaTags(stage.chips).shown" :key="chip">
                  <span v-if="idx > 0" class="mx-2 font-normal text-slate-300" aria-hidden="true">/</span>
                  <span class="whitespace-nowrap">{{ chip }}</span>
                </template>
                <template v-if="clippedMetaTags(stage.chips).hasMore">
                  <span class="mx-2 font-normal text-slate-300" aria-hidden="true">/</span>
                  <span class="whitespace-nowrap text-slate-400">etc.</span>
                </template>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden bg-white py-6 sm:py-8">
      <div class="container-page flex justify-center">
        <NuxtLink :to="gradesSection.viewAllHref"
          class="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-soft">
          {{ gradesSection.viewAllLabel }}
          <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.grade-visual {
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.grade-visual--ltr,
.grade-visual--rtl {
  -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 88%, transparent 100%);
  mask-image: linear-gradient(to bottom, #000 0%, #000 88%, transparent 100%);
}

@media (min-width: 1024px) {
  .grade-visual--ltr {
    -webkit-mask-image: linear-gradient(
      to right,
      #000 0%,
      #000 84%,
      rgba(0, 0, 0, 0.4) 94%,
      transparent 100%
    );
    mask-image: linear-gradient(
      to right,
      #000 0%,
      #000 84%,
      rgba(0, 0, 0, 0.4) 94%,
      transparent 100%
    );
  }

  .grade-visual--rtl {
    -webkit-mask-image: linear-gradient(
      to left,
      #000 0%,
      #000 84%,
      rgba(0, 0, 0, 0.4) 94%,
      transparent 100%
    );
    mask-image: linear-gradient(
      to left,
      #000 0%,
      #000 84%,
      rgba(0, 0, 0, 0.4) 94%,
      transparent 100%
    );
  }
}
</style>
