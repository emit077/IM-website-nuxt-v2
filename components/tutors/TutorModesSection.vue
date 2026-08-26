<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { tutorModes } from '~/data/tutors'
</script>

<template>
  <section id="teaching-modes" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="teaching-modes-heading">
    <div class="container-page relative">
      <CardHeader heading-id="teaching-modes-heading" :badge="tutorModes.badge" :title="tutorModes.title"
        :classes="tutorModes.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" role="list">
        <li v-for="(item, i) in tutorModes.items" :key="item.title"
          :class="i === tutorModes.items.length - 1 ? 'xl:col-span-1' : ''" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 35, duration: 400 } }">
          <NuxtLink :to="item.href"
            class="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-cream-50/60 p-5 no-underline shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-card sm:p-6">
            <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">{{ item.title }}</p>
            <span
              class="mt-3 grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-4 font-display text-base font-bold text-slate-900">{{ item.subtitle }}</h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ item.description }}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
