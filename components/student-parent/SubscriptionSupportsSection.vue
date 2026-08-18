<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { subSupports } from '~/data/subscription'
</script>

<template>
  <section id="what-you-get" class="relative scroll-mt-36 overflow-hidden bg-white section-py lg:scroll-mt-44"
    aria-labelledby="sub-supports-heading">
    <div class="container-page relative">
      <CardHeader heading-id="sub-supports-heading" :badge="subSupports.badge" :title="subSupports.title"
        :description="subSupports.description" :classes="subSupports.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
        <li v-for="(item, i) in subSupports.items" :key="item.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 25 + i * 30, duration: 380 } }">
          <article
            class="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-cream-50/50 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-card">
            <span
              class="grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-4 font-display text-[15px] font-bold text-slate-900">{{ item.title }}</h3>
            <p class="mt-2 text-[13px] leading-relaxed text-slate-600">{{ item.description }}</p>
          </article>
        </li>
      </ul>

      <div class="mt-12 rounded-[1.65rem] border border-slate-200/80 bg-slate-900 p-6 text-white sm:p-8">
        <p class="text-center text-[11px] font-bold uppercase tracking-[0.16em] text-blue-200">
          {{ subSupports.flexibility.badge }}
        </p>
        <h3 class="mt-3 text-center font-display text-2xl font-bold">{{ subSupports.flexibility.title }}</h3>
        <p class="mx-auto mt-3 max-w-3xl text-center text-[13.5px] leading-relaxed text-blue-100">
          {{ subSupports.flexibility.description }}
        </p>
        <ul class="mt-6 flex flex-wrap justify-center gap-2" role="list">
          <li v-for="item in subSupports.flexibility.items" :key="item"
            class="rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-semibold text-white ring-1 ring-white/15">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
