<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { whoWeServeSection } from '~/data/services'
</script>

<template>
  <section id="who-we-serve" class="relative scroll-mt-24 bg-white section-py"
    aria-labelledby="who-we-serve-heading">
    <div class="container-page">
      <CardHeader heading-id="who-we-serve-heading" :badge="whoWeServeSection.kicker" :title="whoWeServeSection.title"
        :description="whoWeServeSection.description" :classes="whoWeServeSection.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5" role="list">
        <li v-for="(audience, i) in whoWeServeSection.audiences" :key="audience.title" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 50, duration: 420 } }">
          <article
            class="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-7">
            <span
              class="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="audience.iconMdi" class="h-6 w-6" />
            </span>
            <h3 class="mt-4 font-display text-base font-bold text-slate-900 sm:text-lg">{{ audience.title }}</h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600 sm:text-sm">{{ audience.description }}</p>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
