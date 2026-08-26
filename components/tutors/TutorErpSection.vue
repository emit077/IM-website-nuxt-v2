<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { erpFeatures, erpSection } from '~/data/tutors'
</script>

<template>
  <section id="tutor-erp" class="relative scroll-mt-20 overflow-hidden section-surface-white section-py"
    aria-labelledby="tutor-erp-heading">
    <div class="container-page relative">
      <CardHeader heading-id="tutor-erp-heading" :badge="erpSection.badge" :title="erpSection.title"
        :description="erpSection.description" :classes="erpSection.classes" />

      <div
        class="relative mt-10 overflow-hidden rounded-[22px] border border-indigo-300/30 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-500  sm:rounded-[28px]"
        v-motion :initial="{ opacity: 0, y: 24 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }">

        <div class="relative grid gap-8 px-5 py-7 sm:px-7 sm:py-9 lg:grid-cols-12 lg:items-center lg:gap-6 lg:px-9">
          <div class="min-w-0 lg:col-span-6">
            <h3 class="font-display text-xl font-bold leading-snug text-white sm:text-[26px]">
              {{ erpSection.showcaseTitle }}
            </h3>

            <ul class="mt-5 space-y-2.5" role="list">
              <li v-for="item in erpSection.highlights" :key="item"
                class="flex items-start gap-2.5 text-[13.5px] font-medium leading-relaxed text-indigo-50">
                <span
                  class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-white/15 text-white ring-1 ring-white/25">
                  <IconCheck class="h-3 w-3" />
                </span>
                {{ item }}
              </li>
            </ul>

            <dl class="mt-6 grid grid-cols-3 gap-3 border-t border-white/15 pt-5">
              <div v-for="stat in erpSection.stats" :key="stat.label">
                <dt class="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-indigo-200/90">
                  {{ stat.label }}
                </dt>
                <dd class="mt-0.5 font-display text-lg font-bold text-white sm:text-xl">{{ stat.value }}</dd>
              </div>
            </dl>

            <a :href="erpSection.cta.href"
              class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-indigo-800 shadow-lg shadow-indigo-950/25 transition hover:-translate-y-0.5 hover:bg-indigo-50 sm:w-auto sm:py-3">
              {{ erpSection.cta.label }}
              <Icon icon="mdi:arrow-right" class="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>

          <div class="relative min-w-0 lg:col-span-6" v-motion :initial="{ opacity: 0, y: 28 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 650, delay: 180 } }">
            <div
              class="dashboard-frame overflow-hidden rounded-xl border border-white/20 bg-slate-900/40 shadow-[0_24px_55px_-24px_rgba(2,6,23,0.7)] backdrop-blur-sm sm:rounded-2xl">
              <div class="flex items-center gap-2 border-b border-white/10 bg-white/10 px-3 py-2.5">
                <span class="flex gap-1.5" aria-hidden="true">
                  <i class="block h-2 w-2 rounded-full bg-rose-400/80" />
                  <i class="block h-2 w-2 rounded-full bg-amber-300/80" />
                  <i class="block h-2 w-2 rounded-full bg-emerald-400/80" />
                </span>
                <span
                  class="ml-1 flex min-w-0 items-center gap-1.5 truncate rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-medium text-indigo-100">
                  <Icon icon="mdi:lock-outline" class="h-3 w-3 shrink-0" aria-hidden="true" />
                  {{ erpSection.previewUrl }}
                </span>
              </div>
              <div class="relative overflow-hidden">
                <img :src="usePublicAsset(erpSection.image)" :alt="erpSection.imageAlt" width="1600" height="1067"
                  loading="lazy" decoding="async" class="block h-auto w-[170%] max-w-none origin-top-left sm:w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <h3 class="font-display text-lg font-bold text-slate-900 sm:text-xl">{{ erpSection.featuresTitle }}</h3>
        <p class="mx-auto mt-2 max-w-xl text-[13.5px] leading-relaxed text-slate-500">
          {{ erpSection.featuresSubtitle }}
        </p>
      </div>

      <ul class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4" role="list">
        <li v-for="(feature, i) in erpFeatures" :key="feature.title" v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + (i % 4) * 60, duration: 400 } }">
          <article
            class="erp-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-4 sm:p-5">
            <span
              class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="feature.iconMdi" class="h-5 w-5" />
            </span>
            <h4 class="mt-3.5 font-display text-[15px] font-bold text-slate-900">{{ feature.title }}</h4>
            <p class="mt-1.5 text-[13px] leading-relaxed text-slate-500">{{ feature.description }}</p>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.dashboard-frame {
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.dashboard-frame:hover {
  transform: translateY(-6px);
}

.erp-card {
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s ease,
    border-color 0.35s ease;
}

.erp-card::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.55), transparent);
  opacity: 0;
  transition: opacity 0.35s ease;
}

.erp-card:hover {
  transform: translateY(-4px);
  border-color: rgb(191 219 254);
  box-shadow: 0 18px 38px -20px rgba(37, 99, 235, 0.35);
}

.erp-card:hover::after {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {

  .dashboard-frame,
  .erp-card {
    transition: none;
  }

  .dashboard-frame:hover,
  .erp-card:hover {
    transform: none;
  }
}
</style>
