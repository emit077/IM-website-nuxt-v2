<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { aboutSection } from '~/data/channel-partner'

const primaryImage = usePublicAsset(aboutSection.image)
</script>

<template>
  <section id="about-partnership" class="relative scroll-mt-20 overflow-hidden bg-white section-py"
    aria-labelledby="about-partnership-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-sky-100/50 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="about-partnership-heading" :title="aboutSection.title"
        :description="aboutSection.description" :classes="aboutSection.classes">
        <template #badge>
          <div class="about-badge mb-2 capitalize text-blue-600">
            <span>{{ aboutSection.kicker }}</span>
          </div>
        </template>
      </CardHeader>

      <div class="mt-12 grid items-stretch gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-12">
        <!-- Left: single image -->
        <div class="relative lg:col-span-5" v-motion :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">
          <div class="relative mx-auto   overflow-hidden rounded-[28px]  sm:min-h-[420px] lg:mx-0 lg:max-w-none">
            <img :src="primaryImage" alt="Indian Mentors channel partner program"
              class=" inset-0 h-full object- object-center" loading="lazy" decoding="async" />

            <!-- Floating stats -->


            <div
              class="absolute bottom-4 left-4 z-10 flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/95 px-3 py-2.5 shadow-[0_14px_36px_-14px_rgba(30,58,138,0.35)] backdrop-blur-sm sm:bottom-5 sm:left-5 sm:gap-3 sm:px-3.5 sm:py-3"
              v-motion :initial="{ opacity: 0, x: -12, scale: 0.92 }"
              :visibleOnce="{ opacity: 1, x: 0, scale: 1, transition: { delay: 420, duration: 450 } }">
              <span class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-600 text-white sm:h-10 sm:w-10"
                aria-hidden="true">
                <Icon :icon="aboutSection.stats[1].iconMdi" class="h-[18px] w-[18px]" />
              </span>
              <div class="leading-tight">
                <p class="font-display text-base font-bold text-slate-900 sm:text-lg">
                  {{ aboutSection.stats[1].value }}
                </p>
                <p class="text-[11px] font-medium text-slate-500 sm:text-xs">
                  {{ aboutSection.stats[1].label }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: feature cards -->
        <ul class="flex flex-col justify-center gap-4 sm:gap-5 lg:col-span-7" role="list">
          <li v-for="(feature, i) in aboutSection.features" :key="feature.no" v-motion :initial="{ opacity: 0, x: 14 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 80 + i * 90, duration: 450 } }">
            <article
              class="group flex gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-card sm:gap-5 sm:rounded-3xl sm:p-6">
              <span
                class="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600 sm:h-14 sm:w-14"
                aria-hidden="true">
                <Icon :icon="feature.iconMdi" class="h-6 w-6 sm:h-7 sm:w-7" />
              </span>
              <div class="min-w-0">
                <h3 class="font-display text-base font-bold text-slate-900 sm:text-lg">
                  <span class="mr-1.5 text-blue-500 tabular-nums">{{ feature.no }}</span>
                  {{ feature.title }}
                </h3>
                <p class="mt-1.5 text-[13px] leading-relaxed text-slate-600 sm:mt-2 sm:text-[13.5px]">
                  {{ feature.description }}
                </p>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-badge::before,
.about-badge::after {
  display: inline-block;
  content: '';
  width: 20px;
  height: 2px;
  position: relative;
  bottom: 4px;
  border-radius: 3px;
  background-color: #3b82f6;
}

.about-badge::before {
  margin-right: 10px;
}

.about-badge::after {
  margin-left: 10px;
}
</style>
