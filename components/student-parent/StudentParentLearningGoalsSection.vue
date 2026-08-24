<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { spLearningGoals } from '~/data/student-parent'
</script>

<template>
  <section id="learning-goals" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="learning-goals-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="learning-goals-heading" :badge="spLearningGoals.badge" :title="spLearningGoals.title"
        :description="spLearningGoals.description" :classes="spLearningGoals.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5" role="list">
        <li v-for="(item, i) in spLearningGoals.items" :key="item.id" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 400 } }">
          <article
            class="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-cream-50/60 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-card">
            <span
              class="grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <p class="mt-4 truncate whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
              {{ item.title }}
            </p>
            <p class="mt-2 h-[4.875em] line-clamp-3 text-[13.5px] leading-relaxed text-slate-600">
              {{ item.description }}
            </p>
            <p
              class="mt-4 inline-flex max-w-full items-center overflow-hidden whitespace-nowrap rounded-full bg-blue-50 px-2 py-1 text-[10.5px] font-bold leading-none text-blue-800 ring-1 ring-blue-100">
              Goal: {{ item.goal }}
            </p>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
