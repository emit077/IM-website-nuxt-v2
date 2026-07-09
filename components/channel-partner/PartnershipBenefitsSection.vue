<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeader.vue'
import { partnershipBenefitsSection, partnershipBenefits } from '~/data/channel-partner'
</script>

<template>
  <section id="partnership-benefits" class="relative scroll-mt-20 bg-white section-py"
    aria-labelledby="partnership-benefits-heading">
    <div class="container-page">
      <CardHeader heading-id="partnership-benefits-heading" classes="!px-0 !py-0"
        :badge="partnershipBenefitsSection.kicker"
        title='Growth through <span class="text-gradient-brand">educational collaboration</span>'
        :description="partnershipBenefitsSection.description" />
      <ul class="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3" role="list">
        <li v-for="(benefit, i) in partnershipBenefits" :key="benefit.title" v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + (i % 6) * 40, duration: 400 } }">
          <article
            class="group flex h-full items-start gap-3.5 rounded-2xl border border-slate-200/70 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-soft sm:p-5">
            <span
              class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 transition group-hover:bg-emerald-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="benefit.iconMdi" class="h-5 w-5" />
            </span>
            <div>
              <h3 class="font-display text-[15px] font-bold text-slate-900">{{ benefit.title }}</h3>
              <p class="mt-1 text-[13px] leading-relaxed text-slate-500">{{ benefit.description }}</p>
            </div>
          </article>
        </li>
      </ul>
      <p class="mx-auto mt-8 max-w-2xl text-center text-[13px] font-medium leading-relaxed text-slate-500 sm:text-sm"
        v-motion :initial="{ opacity: 0, y: 10 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
        {{ partnershipBenefitsSection.note }}
      </p>
    </div>
  </section>
</template>
