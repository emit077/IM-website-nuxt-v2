<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { tutorBenefits } from '~/data/tutors'
</script>

<template>
  <section id="why-teach" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="why-teach-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="why-teach-heading" :badge="tutorBenefits.badge" :title="tutorBenefits.title"
        :description="tutorBenefits.description" :classes="tutorBenefits.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:mt-12 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-10" role="list">
        <li v-for="(item, i) in tutorBenefits.items" :key="item.title" class="relative flex gap-4 sm:gap-5" v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 35, duration: 400 } }">
          <span class="font-display text-3xl font-black tabular-nums leading-none text-blue-600/15 sm:text-4xl"
            aria-hidden="true">
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <div class="min-w-0 pt-0.5">
            <div class="flex items-center gap-2.5">
              <span class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600" aria-hidden="true">
                <Icon :icon="item.iconMdi" class="h-4 w-4" />
              </span>
              <h3 class="font-display text-base font-bold text-slate-900">{{ item.title }}</h3>
            </div>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ item.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
