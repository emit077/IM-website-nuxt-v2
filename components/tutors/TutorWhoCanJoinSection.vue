<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { tutorWhoCanJoin } from '~/data/tutors'
</script>

<template>
  <section id="who-can-join" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="who-can-join-heading">
    <div class="container-page relative">
      <CardHeader heading-id="who-can-join-heading" :badge="tutorWhoCanJoin.badge" :title="tutorWhoCanJoin.title"
        :description="tutorWhoCanJoin.description" :classes="tutorWhoCanJoin.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
        <li v-for="(item, i) in tutorWhoCanJoin.items" :key="item.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 35, duration: 400 } }">
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

      <div class="mt-8 flex justify-center">
        <a :href="tutorWhoCanJoin.cta.href"
          class="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-cta transition hover:-translate-y-0.5 hover:bg-blue-700">
          {{ tutorWhoCanJoin.cta.label }}
          <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>
