<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { tutorSupport } from '~/data/tutors'
</script>

<template>
  <section id="tutor-support" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="tutor-support-heading">
    <div class="container-page relative">
      <CardHeader heading-id="tutor-support-heading" :badge="tutorSupport.badge" :title="tutorSupport.title"
        :description="tutorSupport.description" :classes="tutorSupport.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li v-for="(item, i) in tutorSupport.items" :key="item.title" v-motion :initial="{ opacity: 0, y: 14 }"
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
