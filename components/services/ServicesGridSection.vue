<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { tutoringServices, tutoringServicesSection } from '~/data/services'

const standardServices = computed(() => tutoringServices.filter((s) => s.id !== 'custom-tutor'))
const customService = computed(() => tutoringServices.find((s) => s.id === 'custom-tutor'))

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
  <div id="tutoring-services" class="scroll-mt-24 mt-16">
    <section class="relative overflow-hidden section-surface-muted section-py-compact pt-12"
      aria-labelledby="tutoring-services-heading">
      <div class="container-page">
        <CardHeader heading-id="tutoring-services-heading" :badge="tutoringServicesSection.kicker"
          :title="tutoringServicesSection.title" :description="tutoringServicesSection.description"
          :classes="`${tutoringServicesSection.classes} mx-auto max-w-3xl`" />
      </div>
    </section>

    <section v-for="(service, i) in standardServices" :id="service.id" :key="service.id"
      class="relative scroll-mt-28 overflow-hidden bg-white py-3 sm:py-4" :aria-labelledby="`${service.id}-heading`">
      <div class="container-page">
        <div class="grid items-stretch gap-4 overflow-hidden rounded-2xl border lg:grid-cols-12 lg:gap-0" :class="i % 2 === 0
          ? 'border-sky-100/80 bg-sky-50/40'
          : 'border-slate-200/60 bg-slate-50/45'">
          <div class="lg:col-span-4 lg:h-full" :class="i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'" v-motion
            :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
            <div
              class="group relative mx-auto aspect-[5/5.2] w-full max-w-md lg:mx-0 lg:aspect-auto lg:h-full lg:max-w-none lg:min-h-full">
              <div class="absolute inset-0 overflow-hidden"
                :class="i % 2 === 1 ? 'service-visual service-visual--rtl' : 'service-visual service-visual--ltr'">
                <img :src="usePublicAsset(service.visual)" :alt="`${service.title} — Indian Mentors`"
                  class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" loading="lazy"
                  decoding="async" />
              </div>
              <span
                class="absolute bottom-4 z-10 inline-flex items-center gap-2 rounded-2xl bg-white/95 px-3 py-2 shadow-soft backdrop-blur-sm"
                :class="i % 2 === 1 ? 'right-4 lg:right-6' : 'left-4'">
                <span class="grid h-8 w-8 place-items-center rounded-xl bg-blue-50 ring-1 ring-blue-100"
                  aria-hidden="true">
                  <img :src="usePublicAsset(service.img)" :alt="`${service.title} icon`" width="18" height="18"
                    class="h-4 w-4 object-contain" loading="lazy" />
                </span>
                <span class="pr-1 font-display text-sm font-bold text-slate-900">{{ service.title }}</span>
              </span>
            </div>
          </div>

          <div
            class="lg:col-span-8 px-5 py-5 pl-6 sm:px-6 sm:py-6 sm:pl-8 lg:px-7 lg:py-7 lg:pl-11 xl:px-8 xl:py-8 xl:pl-14"
            :class="i % 2 === 1 ? 'lg:order-1 lg:pl-8 lg:pr-11 xl:pl-14 xl:pr-14' : 'lg:order-2'" v-motion
            :initial="{ opacity: 0, y: 16 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 70, duration: 520 } }">
            <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
              {{ String(i + 1).padStart(2, '0') }} · {{ service.title }}
            </p>

            <h3 :id="`${service.id}-heading`"
              class="mt-2 max-w-xl font-display text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl lg:text-[1.85rem] lg:leading-[1.25]">
              {{ service.tagline }}
            </h3>

            <p class="mt-3 max-w-xl text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              {{ service.overview }}
            </p>

            <ul class="mt-5 grid max-w-xl grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2" role="list">
              <li v-for="feat in service.features.slice(0, 4)" :key="feat"
                class="flex min-w-0 items-center gap-2 text-[13.5px] text-slate-700">
                <span class="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-500"
                  aria-hidden="true">
                  <Icon icon="mdi:arrow-right" class="h-3 w-3" />
                </span>
                <span class="truncate whitespace-nowrap">{{ feat }}</span>
              </li>
            </ul>

            <div class="mt-5 max-w-xl">
              <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">Best suited for</p>
              <ul class="mt-2 flex flex-wrap items-center gap-y-1 text-[13px] font-medium text-slate-700" role="list">
                <li v-for="(item, idx) in service.bestSuitedFor.slice(0, 3)" :key="item"
                  class="inline-flex items-center whitespace-nowrap">
                  <span v-if="idx > 0" class="mx-2.5 h-3.5 w-px bg-slate-300" aria-hidden="true" />
                  <span class="inline-flex items-center gap-1.5">
                    <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
                    {{ item }}
                  </span>
                </li>
              </ul>
            </div>

            <div v-if="service.coverage?.length || service.supportAreas?.length" class="mt-4 max-w-xl">
              <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                {{ service.supportAreas?.length ? 'Support areas' : 'Coverage' }}
              </p>
              <p
                class="mt-2 flex flex-wrap items-center text-[13px] font-semibold leading-none tracking-wide text-slate-600">
                <template v-for="(item, idx) in clippedMetaTags(service.supportAreas ?? service.coverage).shown"
                  :key="item">
                  <span v-if="idx > 0" class="mx-2 font-normal text-slate-300" aria-hidden="true">/</span>
                  <span class="whitespace-nowrap">{{ item }}</span>
                </template>
                <template v-if="clippedMetaTags(service.supportAreas ?? service.coverage).hasMore">
                  <span class="mx-2 font-normal text-slate-300" aria-hidden="true">/</span>
                  <span class="whitespace-nowrap text-slate-400">etc.</span>
                </template>
              </p>
            </div>

            <div v-if="service.keyBenefit" class="mt-5 max-w-xl rounded-xl bg-white px-3.5 py-3 ring-1 sm:px-4"
              :class="i % 2 === 0 ? 'ring-sky-200/90' : 'ring-slate-200/90'">
              <div class="flex items-start gap-2.5">
                <span class="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg shadow-sm ring-1" :class="i % 2 === 0
                  ? 'bg-sky-50 text-sky-700 ring-sky-200'
                  : 'bg-slate-100 text-slate-600 ring-slate-200'" aria-hidden="true">
                  <Icon icon="solar:star-bold" class="h-3.5 w-3.5" />
                </span>
                <div class="min-w-0">
                  <p class="text-[10px] font-bold uppercase tracking-[0.14em]"
                    :class="i % 2 === 0 ? 'text-sky-700' : 'text-slate-600'">
                    Key benefit
                  </p>
                  <p class="mt-0.5 text-[13.5px] leading-relaxed text-slate-800">{{ service.keyBenefit }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="customService" :id="customService.id"
      class="relative scroll-mt-28 overflow-hidden bg-white section-py-compact"
      :aria-labelledby="`${customService.id}-heading`">
      <div class="container-page">
        <div
          class="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 px-5 py-8 sm:rounded-[1.75rem] sm:px-8 sm:py-10 lg:px-12"
          v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
          <div aria-hidden="true"
            class="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
          <div aria-hidden="true"
            class="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-amber-300/15 blur-3xl" />

          <div class="relative mx-auto max-w-3xl text-center">
            <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-sky-200">
              Need something unique?
            </p>
            <h3 :id="`${customService.id}-heading`"
              class="mt-1.5 font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl">
              {{ customService.title }}
            </h3>
            <p class="mt-2 text-[14px] leading-relaxed text-blue-100/90 sm:text-[15px]">
              {{ customService.overview }}
            </p>
          </div>

          <ul class="relative mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3" role="list">
            <li v-for="feat in customService.features" :key="feat"
              class="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/10 px-3 py-2.5 text-left">
              <span class="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white text-blue-700"
                aria-hidden="true">
                <Icon icon="mdi:arrow-right" class="h-3 w-3" />
              </span>
              <span class="text-[13px] font-medium leading-snug text-white">{{ feat }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.service-visual {
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

/* Mobile: soft fade into content below */
.service-visual--ltr,
.service-visual--rtl {
  -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 88%, transparent 100%);
  mask-image: linear-gradient(to bottom, #000 0%, #000 88%, transparent 100%);
}

/* Desktop: feather into the adjacent text column */
@media (min-width: 1024px) {
  .service-visual--ltr {
    -webkit-mask-image: linear-gradient(to right,
        #000 0%,
        #000 84%,
        rgba(0, 0, 0, 0.4) 94%,
        transparent 100%);
    mask-image: linear-gradient(to right,
        #000 0%,
        #000 84%,
        rgba(0, 0, 0, 0.4) 94%,
        transparent 100%);
  }

  .service-visual--rtl {
    -webkit-mask-image: linear-gradient(to left,
        #000 0%,
        #000 84%,
        rgba(0, 0, 0, 0.4) 94%,
        transparent 100%);
    mask-image: linear-gradient(to left,
        #000 0%,
        #000 84%,
        rgba(0, 0, 0, 0.4) 94%,
        transparent 100%);
  }
}
</style>
