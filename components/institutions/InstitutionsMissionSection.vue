<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { institutionsMissionGoals, institutionsMissionSection } from '~/data/institutions'
</script>

<template>
  <section id="our-mission" class="relative scroll-mt-24 overflow-hidden bg-white section-py"
    aria-labelledby="mission-heading">
    <div class="container-page relative">
      <CardHeader heading-id="mission-heading" :badge="institutionsMissionSection.badge"
        :title="institutionsMissionSection.title" :description="institutionsMissionSection.description"
        :classes="institutionsMissionSection.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3 xl:gap-5" role="list">
        <li v-for="item in institutionsMissionGoals" :id="item.id" :key="item.id">
          <article
            class="flex h-full flex-col rounded-[1.25rem] border border-slate-200/80 bg-white p-4 shadow-soft sm:p-5">
            <span class="grid h-11 w-11 place-items-center rounded-full bg-blue-50 text-blue-600" aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="font-display mt-4 text-[15px] font-bold leading-snug text-slate-900">
              {{ item.title }}
            </h3>
            <p class="mt-2 line-clamp-3 h-[4.125em] text-[12.5px] leading-snug text-slate-500">
              {{ item.description }}
            </p>
          </article>
        </li>
      </ul>

      <p class="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-slate-500">
        {{ institutionsMissionSection.closing }}
      </p>
    </div>
  </section>
</template>
