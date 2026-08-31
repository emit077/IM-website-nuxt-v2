<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { policyPoints, tutorPolicySection } from '~/data/tutors'
</script>

<template>
  <section id="tutor-standards"
    class="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-slate-50 via-[#f4f7fc] to-[#eef3fb] section-py"
    aria-labelledby="tutor-policy-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-8 h-64 w-64 rounded-full bg-indigo-200/25 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="tutor-policy-heading" :badge="tutorPolicySection.badge" :title="tutorPolicySection.title"
        :description="tutorPolicySection.description" :classes="tutorPolicySection.classes" />



      <ul class="mt-10 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4" role="list">
        <li v-for="(point, i) in policyPoints" :key="point.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 45, duration: 400 } }">
          <article
            class="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-6">
            <span
              class="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="point.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-4 font-display text-[15px] font-bold leading-snug text-slate-900">
              {{ point.title }}
            </h3>
            <p class="mt-2 line-clamp-2 text-[13px] leading-relaxed text-slate-500">
              {{ point.description }}
            </p>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
