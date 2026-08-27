<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { premiumValueSection, whyPremiumSection } from '~/data/tutor-registration-plans'
</script>

<template>
  <section id="why-premium" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="why-premium-heading">
    <div class="container-page relative">
      <CardHeader heading-id="why-premium-heading" :badge="whyPremiumSection.badge" :title="whyPremiumSection.title"
        :description="whyPremiumSection.description" :classes="whyPremiumSection.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4" role="list">
        <li v-for="(item, i) in whyPremiumSection.advantages" :key="item.title" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 50, duration: 400 } }">
          <article
            class="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-6">
            <span
              class="pointer-events-none absolute -right-1 -top-3 font-display text-6xl font-extrabold leading-none text-blue-600/[0.07]"
              aria-hidden="true">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <span
              class="relative grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="relative mt-4 font-display text-base font-bold text-slate-900">{{ item.title }}</h3>
            <p class="relative mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ item.description }}</p>
          </article>
        </li>
      </ul>

      <p
        class="mx-auto mt-8 max-w-3xl rounded-2xl border border-blue-100 bg-blue-50/70 px-5 py-4 text-center text-[14px] font-semibold leading-relaxed text-blue-900">
        {{ whyPremiumSection.keyMessage }}
      </p>
    </div>
  </section>

  <section id="premium-value" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="premium-value-heading">
    <div class="container-page relative">
      <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-5" v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
          <CardHeader align="left" heading-id="premium-value-heading" :badge="premiumValueSection.badge"
            :title="premiumValueSection.title" :description="premiumValueSection.description"
            :classes="premiumValueSection.classes" />

          <p class="mt-8 font-display text-6xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
            {{ premiumValueSection.price }}
          </p>
          <p class="mt-1 text-lg font-semibold text-slate-500">{{ premiumValueSection.pricePeriod }}</p>
          <p class="mt-3 max-w-sm text-[14px] leading-relaxed text-slate-600">{{ premiumValueSection.priceNote }}</p>

          <div class="mt-8">
            <ActionBtn variant="primary" :label="premiumValueSection.cta.label" :href="premiumValueSection.cta.href"
              icon="mdi:star-four-points-outline" />
          </div>
        </div>

        <div class="lg:col-span-7">
          <ul class="grid grid-cols-1 gap-3 sm:grid-cols-3" role="list">
            <li v-for="(item, i) in premiumValueSection.breakdown" :key="item.label" v-motion
              :initial="{ opacity: 0, y: 14 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 60, duration: 400 } }">
              <article
                class="flex h-full flex-col items-center rounded-[1.35rem] border border-slate-200/80 bg-cream-50/60 px-4 py-6 text-center">
                <p class="font-display text-3xl font-extrabold text-slate-900">{{ item.value }}</p>
                <p class="mt-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-blue-600">{{ item.label }}</p>
              </article>
            </li>
          </ul>

          <div class="mt-6 rounded-[1.5rem] border border-slate-200/80 bg-cream-50/60 p-5 sm:p-6" v-motion
            :initial="{ opacity: 0, y: 14 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 460 } }">
            <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">Value Proposition</p>
            <ol class="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2.5" role="list">
              <li v-for="(step, i) in premiumValueSection.valueChain" :key="step" class="flex items-center gap-2">
                <span
                  class="rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-[12.5px] font-semibold text-blue-800">
                  {{ step }}
                </span>
                <span v-if="i < premiumValueSection.valueChain.length - 1" class="text-slate-300"
                  aria-hidden="true">→</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
