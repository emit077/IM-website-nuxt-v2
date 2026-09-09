<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { seApproach } from '~/data/special-educators'
</script>

<template>
  <section id="our-approach" class="relative scroll-mt-24 overflow-hidden section-surface-muted section-py"
    aria-labelledby="se-approach-heading">
    <div class="container-page relative">
      <CardHeader heading-id="se-approach-heading" :badge="seApproach.badge" :title="seApproach.title"
        :description="seApproach.description" :classes="seApproach.classes" />

      <p class="mx-auto mt-8 max-w-3xl text-center text-[14px] font-semibold text-slate-700 sm:text-[15px]">
        {{ seApproach.focusLead }}
      </p>

      <ul class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li v-for="(item, i) in seApproach.items" :key="item.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 400 } }">
          <article
            class="flex h-full items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-card">
            <span
              class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="font-display text-[14.5px] font-semibold leading-snug text-slate-900 sm:text-[15px]">
              {{ item.title }}
            </h3>
          </article>
        </li>
      </ul>

      <p
        class="mx-auto mt-8  rounded-2xl border border-blue-100 bg-white/80 px-5 py-4 text-center text-[14px] font-medium leading-relaxed text-slate-600 sm:text-[15px]">
        {{ seApproach.closing }}
      </p>
    </div>
  </section>
</template>
