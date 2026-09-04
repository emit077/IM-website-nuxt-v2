<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { hireCategories, hireCategoriesSection } from '~/data/institutions'
</script>

<template>
  <section id="what-we-hire" class="relative scroll-mt-24 overflow-hidden section-surface-muted section-py"
    aria-labelledby="hire-categories-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="hire-categories-heading" :badge="hireCategoriesSection.badge"
        :title="hireCategoriesSection.title" :description="hireCategoriesSection.description"
        :classes="hireCategoriesSection.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5" role="list" aria-label="Faculty categories">
        <li
          v-for="(item, i) in hireCategories"
          :key="item.id"
          v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + (i % 2) * 50, duration: 400 } }"
        >
          <article
            class="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-6"
          >
            <div class="flex items-center gap-3">
              <span
                class="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-hover:bg-blue-600 group-hover:text-white"
                aria-hidden="true"
              >
                <Icon :icon="item.iconMdi" class="h-5 w-5" />
              </span>
              <h3 class="font-display text-[15px] font-bold text-slate-900 sm:text-base">{{ item.title }}</h3>
            </div>
            <div class="mt-4 flex flex-wrap gap-1.5">
              <span
                v-for="role in item.roles"
                :key="role"
                class="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600"
              >
                {{ role }}
              </span>
            </div>
          </article>
        </li>
      </ul>

      <div class="mt-8 flex justify-center" v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 420 } }">
        <a
          :href="hireCategoriesSection.cta.href"
          class="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
        >
          {{ hireCategoriesSection.cta.label }}
          <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>
