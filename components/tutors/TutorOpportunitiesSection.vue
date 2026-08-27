<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import BrowseMentorsSection from '~/components/shared/BrowseMentorsSection.vue'
import { tutorOpportunities, browseStudentsSection } from '~/data/tutors'
</script>

<template>
  <section id="teaching-opportunities" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="opportunities-heading">
    <div class="container-page relative">
      <CardHeader heading-id="opportunities-heading" :badge="tutorOpportunities.badge"
        :title="tutorOpportunities.title" :description="tutorOpportunities.description"
        :classes="tutorOpportunities.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2" role="list">
        <li v-for="(item, i) in tutorOpportunities.items" :key="item.title" v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + i * 28, duration: 360 } }">
          <NuxtLink :to="item.href"
            class="group flex h-full items-center gap-4 rounded-2xl border border-slate-200/80 bg-cream-50/50 px-4 py-4 no-underline transition duration-300 hover:border-blue-200 hover:bg-white hover:shadow-card sm:px-5">
            <span
              class="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <span class="min-w-0 flex-1">
              <span class="block font-display text-[15px] font-bold text-slate-900 group-hover:text-blue-700">
                {{ item.title }}
              </span>
              <span class="mt-0.5 block truncate text-[13px] leading-snug text-slate-600">{{ item.description }}</span>
            </span>
            <Icon icon="mdi:arrow-right"
              class="h-5 w-5 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-blue-600"
              aria-hidden="true" />
          </NuxtLink>
        </li>
      </ul>

      <div class="mt-8 flex justify-center">
        <a :href="tutorOpportunities.cta.href"
          class="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-cta transition hover:-translate-y-0.5 hover:bg-blue-700">
          {{ tutorOpportunities.cta.label }}
          <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>

  <BrowseMentorsSection mode="students" section-id="browse-students" :badge="browseStudentsSection.badge"
    :title="browseStudentsSection.title" :description="browseStudentsSection.description"
    :classes="browseStudentsSection.classes" />
</template>
