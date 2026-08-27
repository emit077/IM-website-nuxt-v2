<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { dashboardSection, resourcesSection } from '~/data/tutor-registration-plans'
</script>

<template>
  <section id="registration-resources" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="registration-resources-heading">
    <div class="container-page relative">
      <CardHeader heading-id="registration-resources-heading" :badge="resourcesSection.badge"
        :title="resourcesSection.title" :description="resourcesSection.description"
        :classes="resourcesSection.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3" role="list">
        <li v-for="(item, i) in resourcesSection.items" :key="item.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 400 } }">
          <article
            class="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-cream-50/60 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-card sm:p-6">
            <span
              class="grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-4 font-display text-base font-bold text-slate-900">{{ item.title }}</h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ item.description }}</p>
          </article>
        </li>
      </ul>

      <div class="mt-9 flex justify-center" v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 460 } }">
        <ActionBtn variant="primary" :label="resourcesSection.cta.label" :href="resourcesSection.cta.href"
          icon="mdi:book-open-page-variant-outline" />
      </div>
    </div>
  </section>

  <section id="registration-dashboard" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="registration-dashboard-heading">
    <div class="container-page relative">
      <CardHeader heading-id="registration-dashboard-heading" :badge="dashboardSection.badge"
        :title="dashboardSection.title" :description="dashboardSection.description"
        :classes="dashboardSection.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4" role="list">
        <li v-for="(item, i) in dashboardSection.items" :key="item.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 400 } }">
          <article
            class="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-6">
            <span
              class="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-4 font-display text-base font-bold text-slate-900">{{ item.title }}</h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ item.description }}</p>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
