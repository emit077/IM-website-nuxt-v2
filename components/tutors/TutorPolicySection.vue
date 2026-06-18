<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import { policyPoints } from '~/data/tutors'
</script>

<template>
  <section id="tutor-policy" class="relative scroll-mt-20 bg-white py-14 sm:py-16 lg:py-20"
    aria-labelledby="tutor-policy-heading">
    <div class="container-page">
      <div
        class="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 rounded-[1.75rem] border border-slate-200/80 bg-slate-50/70 p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
        <!-- Left: copy -->
        <div class="lg:col-span-5" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
          <CardHeader
            variant="section-left"
            heading-id="tutor-policy-heading"
            content-class="!px-0 !py-0"
            badge="Tutor Registration Policy"
            title='Fair, professional, and <span class="text-gradient-brand">respectful for everyone</span>'
            description="All tutors associated with Indian Mentors follow established policies designed to maintain professional and ethical tutoring practices — ensuring a fair environment for tutors, students, and parents alike."
          />
          <a href="#tutor-register"
            class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 underline-offset-4 transition hover:underline">
            Read Tutor Registration Policy
            <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <!-- Right: policy outline -->
        <ul class="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:col-span-7" role="list">
          <li v-for="(point, i) in policyPoints" :key="point.title" v-motion :initial="{ opacity: 0, y: 10 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 50, duration: 400 } }">
            <div
              class="group flex h-full items-center gap-3 rounded-xl border border-slate-200/80 bg-white px-4 py-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-soft">
              <span
                class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
                aria-hidden="true">
                <Icon :icon="point.iconMdi" class="h-[18px] w-[18px]" />
              </span>
              <span class="text-[13.5px] font-semibold leading-snug text-slate-800">{{ point.title }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
