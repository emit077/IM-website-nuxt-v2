<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { spNeeds, spRoadmap } from '~/data/student-parent'
</script>

<template>
  <section id="learning-needs" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="learning-needs-heading">
    <div class="container-page relative">
      <CardHeader heading-id="learning-needs-heading" :badge="spNeeds.badge" :title="spNeeds.title"
        :description="spNeeds.description" :classes="spNeeds.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" role="list">
        <li v-for="(item, i) in spNeeds.items" :key="item.title" class="flex h-full"
          :class="i === spNeeds.items.length - 1 ? 'lg:col-span-1 xl:col-span-1' : ''" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 40, duration: 400 } }">
          <article
            class="group flex h-full w-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-6">
            <span
              class="grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-4 font-display text-base font-bold text-slate-900">{{ item.title }}</h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ item.question }}</p>
          </article>
        </li>
      </ul>

      <p class="mx-auto mt-8 max-w-2xl rounded-2xl border border-blue-100 bg-blue-50/70 px-5 py-4 text-center text-sm font-medium leading-relaxed text-blue-800 sm:text-[15px]"
        v-motion :initial="{ opacity: 0, y: 10 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 420 } }">
        {{ spNeeds.outcome }}
      </p>
    </div>
  </section>

  <section id="learning-roadmap" class="relative scroll-mt-28 overflow-hidden section-surface-white section-py"
    aria-labelledby="roadmap-heading">
    <div class="container-page relative">
      <CardHeader heading-id="roadmap-heading" :badge="spRoadmap.badge" :title="spRoadmap.title"
        :description="spRoadmap.description" :classes="spRoadmap.classes" />


      <ol class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" role="list">
        <li v-for="(step, i) in spRoadmap.steps" :key="step.no" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 40, duration: 400 } }">
          <article
            class="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-cream-50/60 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-card sm:p-6">
            <span class="font-display text-3xl font-black tabular-nums leading-none text-blue-500/20">{{ step.no
              }}</span>
            <h3 class="mt-3 font-display text-lg font-bold text-slate-900">{{ step.title }}</h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ step.description }}</p>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>
