<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { whyChooseAdvantage } from '~/data/why-choose'

const advantageImage = usePublicAsset(whyChooseAdvantage.image)
</script>

<template>
  <section id="advantage" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="advantage-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-200/25 blur-3xl" />

    <div class="container-page relative">
      <div class="grid items-start gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
        <!-- Visual -->
        <div class="lg:col-span-5" v-motion :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
          <div class="group relative mx-auto max-w-lg lg:mx-0 lg:max-w-none">
            <img :src="advantageImage" :alt="whyChooseAdvantage.imageAlt"
              class="aspect-[4/5] w-full object-cover object-center transition duration-700 group-hover:scale-[1.03] lg:min-h-[34rem]"
              loading="lazy" decoding="async" />

            <span
              class="absolute bottom-5 left-5 right-5 inline-flex items-center gap-3 rounded-2xl bg-white/95 px-3.5 py-3 shadow-soft backdrop-blur-sm sm:right-auto sm:max-w-[85%]">
              <span
                class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-600/30"
                aria-hidden="true">
                <Icon icon="mdi:shield-star-outline" class="h-5 w-5" />
              </span>
              <span class="pr-1 font-display text-sm font-bold leading-snug text-slate-900">
                {{ whyChooseAdvantage.imageBadge }}
              </span>
            </span>

          </div>
        </div>

        <!-- Content -->
        <div class="lg:col-span-7" v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 70, duration: 520 } }">
          <CardHeader heading-id="advantage-heading" align="left" :badge="whyChooseAdvantage.kicker"
            :title="whyChooseAdvantage.title" :description="whyChooseAdvantage.description"
            :classes="whyChooseAdvantage.classes" />

          <ul class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4" role="list">
            <li v-for="(adv, i) in whyChooseAdvantage.advantages" :key="adv.title" v-motion
              :initial="{ opacity: 0, y: 12 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80 + i * 45, duration: 400 } }">
              <article
                class="group flex h-full items-start gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-card sm:p-5">
                <span
                  class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600"
                  aria-hidden="true">
                  <Icon :icon="adv.iconMdi" class="h-5 w-5" />
                </span>
                <div class="min-w-0">
                  <h3 class="font-display text-[15px] font-bold text-slate-900">
                    {{ adv.title }}
                  </h3>
                  <p class="mt-1 text-[13px] leading-relaxed text-slate-500">{{ adv.meaning }}</p>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
