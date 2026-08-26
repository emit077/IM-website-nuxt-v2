<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { tutorResources } from '~/data/tutors'

const { data: tutorBrochures } = await useWebsiteBrochures('tutor')
const brochureHref = computed(
  () => tutorBrochures.value?.[0]?.brochure || tutorResources.brochure.cta.href,
)
</script>

<template>
  <section id="tutor-resources" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="tutor-resources-heading">
    <div class="container-page relative">
      <CardHeader heading-id="tutor-resources-heading" :badge="tutorResources.badge" :title="tutorResources.title"
        :classes="tutorResources.classes" />

      <div class="mt-10 grid gap-5 lg:grid-cols-12 lg:gap-6">
        <article
          class="relative flex flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-6 text-white shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)] sm:p-8 lg:col-span-5"
          v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-100/85">
            {{ tutorResources.brochure.badge }}
          </p>
          <h3 class="mt-3 font-display text-xl font-extrabold sm:text-2xl">{{ tutorResources.brochure.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-blue-50">{{ tutorResources.brochure.description }}</p>
          <p class="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-amber-200">
            {{ tutorResources.brochure.coversLabel }}
          </p>
          <ul class="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2" role="list">
            <li v-for="item in tutorResources.brochure.covers" :key="item" class="flex items-start gap-2 text-[13px]">
              <span class="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-white/15" aria-hidden="true">
                <IconCheck class="h-2.5 w-2.5" />
              </span>
              {{ item }}
            </li>
          </ul>
          <a :href="brochureHref" target="_blank" rel="noopener noreferrer"
            class="mt-6 inline-flex w-fit items-center gap-2 rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-cream-50">
            {{ tutorResources.brochure.cta.label }}
            <Icon icon="mdi:download" class="h-4 w-4" aria-hidden="true" />
          </a>
        </article>

        <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7" role="list">
          <li v-for="(item, i) in tutorResources.items" :key="item.title" v-motion :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 35, duration: 400 } }">
            <a :href="item.href"
              class="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-cream-50/60 p-5 no-underline shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-card">
              <span
                class="grid h-10 w-10 place-items-center rounded-2xl bg-white text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
                aria-hidden="true">
                <Icon :icon="item.iconMdi" class="h-5 w-5" />
              </span>
              <h3 class="mt-4 font-display text-[15px] font-bold text-slate-900">{{ item.title }}</h3>
              <p class="mt-2 text-[13px] leading-relaxed text-slate-600">{{ item.description }}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
