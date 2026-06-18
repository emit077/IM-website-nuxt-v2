<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import { whyPartnerSection, partnershipAdvantages } from '~/data/channel-partner'
</script>

<template>
  <section id="why-partner" class="relative scroll-mt-20 bg-cream-50 py-14 sm:py-16 lg:py-20"
    aria-labelledby="why-partner-heading">
    <div class="container-page">
      <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <!-- Left: header -->
        <div class="lg:col-span-5" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
          <CardHeader
            variant="section-left"
            heading-id="why-partner-heading"
            content-class="!px-0 !py-0"
            :badge="whyPartnerSection.kicker"
            title='A strong foundation for your <span class="text-gradient-brand">education business</span>'
            :description="whyPartnerSection.description"
          />
          <p
            class="mt-5 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-3.5 text-[13px] leading-relaxed text-blue-900 sm:text-sm">
            <Icon icon="mdi:hub-outline" class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
            {{ whyPartnerSection.note }}
          </p>
        </div>

        <!-- Right: advantages -->
        <div class="lg:col-span-7">
          <ul class="grid grid-cols-1 gap-3 sm:grid-cols-2" role="list">
            <li v-for="(advantage, i) in partnershipAdvantages" :key="advantage.label" v-motion
              :initial="{ opacity: 0, y: 12 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 50, duration: 400 } }">
              <div
                class="group flex h-full items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-3.5 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-blue-200">
                <span
                  class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon :icon="advantage.iconMdi" class="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <span class="text-[13px] font-semibold leading-snug text-slate-800 sm:text-[13.5px]">
                  {{ advantage.label }}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
