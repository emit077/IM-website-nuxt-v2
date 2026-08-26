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

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5" role="list">
        <li v-for="(item, i) in tutorOpportunities.items" :key="item.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 25 + i * 30, duration: 380 } }">
          <NuxtLink :to="item.href"
            class="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-cream-50/60 p-5 no-underline shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-card">
            <span
              class="grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-4 font-display text-base font-bold text-slate-900">{{ item.title }}</h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ item.description }}</p>
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
