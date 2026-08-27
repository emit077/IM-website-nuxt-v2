<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { matchingSection } from '~/data/tutor-registration-plans'
</script>

<template>
  <section id="student-matching" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="student-matching-heading">
    <div class="container-page relative">
      <CardHeader heading-id="student-matching-heading" :badge="matchingSection.badge" :title="matchingSection.title"
        :description="matchingSection.description" :classes="matchingSection.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3" role="list">
        <li v-for="(item, i) in matchingSection.factors" :key="item.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 50, duration: 400 } }">
          <article
            class="group flex h-full items-start gap-4 rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-6">
            <span
              class="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <div class="min-w-0">
              <h3 class="font-display text-base font-bold text-slate-900">{{ item.title }}</h3>
              <p class="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">{{ item.description }}</p>
            </div>
          </article>
        </li>
      </ul>

      <p
        class="mx-auto mt-8 max-w-3xl rounded-2xl border border-blue-100 bg-white px-5 py-4 text-center text-[14px] font-semibold leading-relaxed text-blue-900">
        {{ matchingSection.keyMessage }}
      </p>
    </div>
  </section>
</template>
