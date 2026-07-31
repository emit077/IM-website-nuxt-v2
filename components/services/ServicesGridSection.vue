<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { tutoringServices, tutoringServicesSection } from '~/data/services'

const standardServices = computed(() => tutoringServices.filter((s) => s.id !== 'custom-tutor'))
const customService = computed(() => tutoringServices.find((s) => s.id === 'custom-tutor'))
</script>

<template>
  <div id="tutoring-services" class="scroll-mt-24">
    <section class="relative overflow-hidden section-surface-muted section-py"
      aria-labelledby="tutoring-services-heading">
      <div class="container-page">
        <CardHeader heading-id="tutoring-services-heading" :badge="tutoringServicesSection.kicker"
          :title="tutoringServicesSection.title" :description="tutoringServicesSection.description"
          :classes="`${tutoringServicesSection.classes} mx-auto max-w-3xl`" />
      </div>
    </section>

    <section v-for="(service, i) in standardServices" :id="service.id" :key="service.id"
      class="relative scroll-mt-28 overflow-hidden section-py"
      :class="i % 2 === 0 ? 'section-surface-muted' : 'bg-white'" :aria-labelledby="`${service.id}-heading`">
      <div class="container-page">
        <div class="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <div class="lg:col-span-5" :class="i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'" v-motion
            :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
            <div class="group relative mx-auto max-w-lg lg:mx-0 lg:max-w-none">
              <div
                class="relative overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-[0_28px_60px_-32px_rgba(15,23,42,0.4)] sm:rounded-[2rem]">
                <img :src="usePublicAsset(service.visual)" :alt="`${service.title} — Indian Mentors`"
                  class="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:aspect-[5/6]"
                  loading="lazy" decoding="async" />
                <span
                  class="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-2xl bg-white/95 px-3.5 py-2.5 shadow-soft backdrop-blur-sm">
                  <span class="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 ring-1 ring-blue-100"
                    aria-hidden="true">
                    <img :src="usePublicAsset(service.img)" :alt="`${service.title} icon`" width="20" height="20"
                      class="h-5 w-5 object-contain" loading="lazy" />
                  </span>
                  <span class="pr-1 font-display text-sm font-bold text-slate-900">{{ service.title }}</span>
                </span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7" :class="i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'" v-motion
            :initial="{ opacity: 0, y: 16 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 70, duration: 520 } }">
            <p class="text-[12px] font-bold uppercase tracking-[0.16em] text-blue-600">
              {{ String(i + 1).padStart(2, '0') }} · {{ service.title }}
            </p>

            <h3 :id="`${service.id}-heading`"
              class="mt-3 max-w-xl font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-[2.15rem] lg:leading-[1.2]">
              {{ service.tagline }}
            </h3>

            <p class="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
              {{ service.overview }}
            </p>

            <ul class="mt-8 grid max-w-xl grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2" role="list">
              <li v-for="feat in service.features" :key="feat"
                class="flex items-start gap-2.5 text-[14px] leading-snug text-slate-700">
                <span
                  class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600"
                  aria-hidden="true">
                  <IconCheck class="h-3 w-3" />
                </span>
                <span>{{ feat }}</span>
              </li>
            </ul>

            <div class="mt-8 max-w-xl">
              <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">Best suited for</p>
              <ul class="mt-3 flex flex-wrap gap-2" role="list">
                <li v-for="item in service.bestSuitedFor" :key="item"
                  class="rounded-full bg-slate-100/80 px-3.5 py-1.5 text-[12.5px] font-medium text-slate-600">
                  {{ item }}
                </li>
              </ul>
            </div>

            <div v-if="service.coverage?.length || service.supportAreas?.length" class="mt-6 max-w-xl">
              <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                {{ service.supportAreas?.length ? 'Support areas' : 'Coverage' }}
              </p>
              <div class="mt-3 flex flex-wrap gap-2">
                <span v-for="item in (service.supportAreas ?? service.coverage)" :key="item"
                  class="rounded-full border border-slate-200/90 bg-white px-3 py-1 text-[12px] font-semibold text-slate-600">
                  {{ item }}
                </span>
              </div>
            </div>

            <div class="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ActionBtn variant="primary" :href="service.cta.href" :label="service.cta.label" />
              <ActionBtn variant="secondary" :href="tutoringServicesSection.consultationCta.href"
                :label="tutoringServicesSection.consultationCta.label" icon="mdi:calendar-account-outline"
                :show-arrow="false" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="customService" :id="customService.id" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
      :aria-labelledby="`${customService.id}-heading`">
      <div class="container-page">
        <div
          class="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 px-6 py-10 sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-14"
          v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
          <div aria-hidden="true"
            class="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
          <div aria-hidden="true"
            class="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-amber-300/15 blur-3xl" />

          <div class="relative mx-auto max-w-3xl text-center">
            <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-sky-200">
              Need something unique?
            </p>
            <h3 :id="`${customService.id}-heading`"
              class="mt-2 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {{ customService.title }}
            </h3>
            <p class="mt-2 text-[15px] leading-relaxed text-blue-100/90 sm:text-base">
              {{ customService.overview }}
            </p>
          </div>

          <ul class="relative mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3"
            role="list">
            <li v-for="feat in customService.features" :key="feat"
              class="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/10 px-3.5 py-3 text-left">
              <span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-blue-700"
                aria-hidden="true">
                <IconCheck class="h-3 w-3" />
              </span>
              <span class="text-[13px] font-medium leading-snug text-white sm:text-[13.5px]">{{ feat }}</span>
            </li>
          </ul>

          <div class="relative mt-8 flex justify-center">
            <a :href="customService.cta.href"
              class="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50">
              {{ customService.cta.label }}
              <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
