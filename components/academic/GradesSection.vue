<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { gradesSection } from '~/data/academic-coverage'

const stages = gradesSection.stages
</script>

<template>
  <div id="grades-covered" class="scroll-mt-20">
    <section class="relative overflow-hidden section-surface-muted py-10 sm:py-12 lg:py-14"
      aria-labelledby="grades-heading">
      <div class="container-page">
        <CardHeader heading-id="grades-heading" :badge="gradesSection.kicker" :title="gradesSection.title"
          :description="gradesSection.description" :classes="`${gradesSection.classes} mx-auto max-w-3xl`" />
      </div>
    </section>

    <section v-for="(stage, i) in stages" :id="stage.id" :key="stage.id"
      class="relative scroll-mt-24 overflow-hidden py-10 sm:py-12 lg:py-14"
      :class="i % 2 === 0 ? 'section-surface-muted' : 'bg-white'" :aria-labelledby="`${stage.id}-heading`">
      <div class="container-page">
        <div class="grid items-center gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          <div class="lg:col-span-5" :class="i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'" v-motion
            :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
            <div class="group relative mx-auto max-w-md lg:mx-0 lg:max-w-none">
              <div
                class="relative overflow-hidden rounded-[1.5rem] bg-slate-100 shadow-[0_24px_48px_-28px_rgba(15,23,42,0.35)] sm:rounded-[1.75rem]">
                <img :src="usePublicAsset(stage.visual)" :alt="`${stage.title} — Indian Mentors`"
                  class="aspect-[5/4] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:aspect-[4/3]"
                  loading="lazy" decoding="async" />
                <span
                  class="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-2xl bg-white/95 px-3 py-2 shadow-soft backdrop-blur-sm">
                  <span class="grid h-8 w-8 place-items-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-100"
                    aria-hidden="true">
                    <Icon :icon="stage.iconMdi" class="h-4 w-4" />
                  </span>
                  <span class="pr-1 font-display text-sm font-bold text-slate-900">{{ stage.title }}</span>
                </span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7" :class="i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'" v-motion
            :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 60, duration: 480 } }">
            <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
              {{ String(i + 1).padStart(2, '0') }} · {{ stage.gradesLabel }}
            </p>

            <h3 :id="`${stage.id}-heading`"
              class="mt-2 max-w-xl font-display text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl lg:text-[1.85rem] lg:leading-[1.2]">
              {{ stage.tagline }}
            </h3>

            <p class="mt-3 max-w-xl text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              {{ stage.overview }}
            </p>

            <ul class="mt-5 grid max-w-xl grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2" role="list">
              <li v-for="item in stage.highlights" :key="item"
                class="flex items-start gap-2 text-[13.5px] leading-snug text-slate-700">
                <span
                  class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600"
                  aria-hidden="true">
                  <IconCheck class="h-3 w-3" />
                </span>
                <span>{{ item }}</span>
              </li>
            </ul>

            <div class="mt-5 max-w-xl">
              <div class="flex flex-wrap gap-1.5">
                <span v-for="chip in stage.chips" :key="chip"
                  class="rounded-full border border-slate-200/90 bg-white px-2.5 py-1 text-[11.5px] font-semibold text-slate-600">
                  {{ chip }}
                </span>
              </div>
            </div>

            <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ActionBtn variant="primary" :href="stage.ctaHref" :label="stage.ctaLabel" />
              <ActionBtn variant="secondary" :href="gradesSection.consultationCta.href"
                :label="gradesSection.consultationCta.label" icon="mdi:calendar-account-outline" :show-arrow="false" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden bg-white py-8 sm:py-10">
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
