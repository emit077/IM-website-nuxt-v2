<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { whyPartnerSection, whyPartnerReasons } from '~/data/channel-partner'
</script>

<template>
  <section id="why-partner" class="relative scroll-mt-20 bg-white section-py" aria-labelledby="why-partner-heading">
    <div class="container-page">
      <CardHeader heading-id="why-partner-heading" :badge="whyPartnerSection.kicker" :title="whyPartnerSection.title"
        :description="whyPartnerSection.description" :classes="whyPartnerSection.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5" role="list">
        <li v-for="(reason, i) in whyPartnerReasons" :key="reason.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 60, duration: 450 } }">
          <article
            class="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-7">
            <span
              class="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="reason.iconMdi" class="h-6 w-6" />
            </span>
            <h3 class="mt-4 font-display text-base font-bold text-slate-900 sm:text-lg">{{ reason.title }}</h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600 sm:text-sm">{{ reason.description }}</p>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
