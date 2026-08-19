<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { spMonitoring, spFamilyDashboard } from '~/data/student-parent'
</script>

<template>
  <section id="family-dashboard" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="family-dash-heading">
    <div class="container-page relative">
      <CardHeader heading-id="family-dash-heading" :badge="spFamilyDashboard.badge" :title="spFamilyDashboard.title"
        :description="spFamilyDashboard.description" :classes="spFamilyDashboard.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5" role="list">
        <li v-for="(mod, i) in spFamilyDashboard.modules" :key="mod.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 25 + i * 30, duration: 380 } }">
          <article
            class="flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-cream-50/50 p-5 shadow-soft">
            <span class="grid h-10 w-10 place-items-center rounded-xl bg-white text-blue-600 ring-1 ring-blue-100"
              aria-hidden="true">
              <Icon :icon="mod.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-4 font-display text-[15px] font-bold text-slate-900">{{ mod.title }}</h3>
            <p class="mt-2 text-[13px] leading-relaxed text-slate-600">{{ mod.description }}</p>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
