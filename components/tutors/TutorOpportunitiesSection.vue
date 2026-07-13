<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeader.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import { browseFilters, browseStudentsSection } from '~/data/tutors'
</script>

<template>
  <section id="browse-students" class="relative scroll-mt-20 section-surface-muted section-py"
    aria-labelledby="browse-students-heading">
    <div class="container-page">
      <CardHeader heading-id="browse-students-heading" :badge="browseStudentsSection.badge"
        :title="browseStudentsSection.title" :description="browseStudentsSection.description"
        :classes="browseStudentsSection.classes" />

      <ul class="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5" role="list">
        <li v-for="(filter, i) in browseFilters" :key="filter.title"
          :class="i === browseFilters.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 50 + i * 60, duration: 420 } }">
          <article
            class="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 text-center shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card">
            <span
              class="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="filter.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="font-display mt-3 text-[14.5px] font-bold leading-snug text-slate-900">{{ filter.title }}</h3>
            <p class="mt-1.5 text-[12.5px] leading-relaxed text-slate-500">{{ filter.description }}</p>
          </article>
        </li>
      </ul>

      <div class="mt-10 text-center" v-motion :initial="{ opacity: 0, y: 10 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450, delay: 200 } }">
        <a href="#tutor-register" class="btn-primary group inline-flex">
          <Icon icon="mdi:account-search-outline" class="h-4 w-4 shrink-0" aria-hidden="true" />
          Browse Student Leads
          <IconArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  </section>
</template>
