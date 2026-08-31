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

      <div v-motion :initial="{ opacity: 0, y: 24 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }">
        <div
          class="erp-showcase relative mt-10 overflow-hidden rounded-[22px] border border-indigo-300/30 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-500 sm:rounded-[28px]">

          <div class="relative z-[1] min-w-0 px-5 py-7 sm:px-7 sm:py-9 lg:w-7/12 lg:px-9">
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

            <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a :href="erpSection.cta.href"
                class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-indigo-800 shadow-lg shadow-indigo-950/25 transition hover:-translate-y-0.5 hover:bg-indigo-50 sm:w-auto sm:py-3">
                {{ erpSection.cta.label }}
                <Icon icon="mdi:arrow-right" class="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
              <a :href="erpSection.secondaryCta.href"
                class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15 sm:w-auto sm:py-3">
                <Icon icon="mdi:map-marker-outline" class="h-4 w-4 shrink-0" aria-hidden="true" />
                {{ erpSection.secondaryCta.label }}
              </a>
            </div>
          </div>

          <div
            class="erp-phone-crop relative h-[22rem] overflow-hidden sm:h-[24rem] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-5/12">
            <figure
              class="phone-shell absolute left-1/2 top-0 w-[272px] max-w-[calc(100%-0.5rem)] -translate-x-1/2 sm:w-[286px] lg:top-8"
              :aria-label="erpSection.imageAlt">
              <div
                class="relative overflow-hidden rounded-[2.15rem] bg-slate-950 p-[9px] shadow-[0_28px_60px_-18px_rgba(2,6,23,0.75)] ring-1 ring-white/20">
                <span
                  class="pointer-events-none absolute left-1/2 top-3 z-20 h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-slate-950"
                  aria-hidden="true" />

                <div
                  class="phone-screen relative flex h-[540px] flex-col overflow-hidden rounded-[1.7rem] bg-[#f4f7fb]">
                  <div
                    class="flex items-center justify-between px-5 pb-1 pt-3.5 text-[10px] font-semibold text-slate-500">
                    <span>9:41</span>
                    <span class="flex items-center gap-1">
                      <Icon icon="mdi:wifi" class="h-3 w-3" />
                      <Icon icon="mdi:battery" class="h-3.5 w-3.5" />
                    </span>
                  </div>

                  <div class="flex items-center justify-between px-4 pb-3 pt-2">
                    <div class="min-w-0">
                      <p class="text-[11px] font-medium text-slate-500">{{ erpSection.mobilePreview.greeting }}</p>
                      <p class="truncate font-display text-[15px] font-bold text-slate-900">
                        {{ erpSection.mobilePreview.tutorName }}
                      </p>
                    </div>
                    <span
                      class="grid h-9 w-9 place-items-center rounded-full bg-blue-600 text-[11px] font-bold text-white">
                      AK
                    </span>
                  </div>

                  <div class="px-4">
                    <div
                      class="rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-4 text-white shadow-sm">
                      <div class="flex items-center justify-between text-[11px] text-blue-100">
                        <span>{{ erpSection.mobilePreview.walletLabel }}</span>
                        <span>{{ erpSection.mobilePreview.dateLabel }}</span>
                      </div>
                      <p class="mt-1 font-display text-2xl font-extrabold tracking-tight">
                        {{ erpSection.mobilePreview.walletValue }}
                      </p>
                      <p class="mt-0.5 text-[11px] text-blue-100/90">{{ erpSection.mobilePreview.walletNote }}</p>
                    </div>

                    <dl class="mt-3 grid grid-cols-3 gap-2">
                      <div v-for="stat in erpSection.mobilePreview.stats" :key="stat.label"
                        class="rounded-xl bg-white px-2 py-2.5 text-center shadow-sm ring-1 ring-slate-200/70">
                        <dd class="font-display text-[15px] font-bold text-slate-900">{{ stat.value }}</dd>
                        <dt class="mt-0.5 text-[9.5px] font-semibold uppercase tracking-wide text-slate-400">
                          {{ stat.label }}
                        </dt>
                      </div>
                    </dl>

                    <ul class="mt-3 grid grid-cols-4 gap-2" role="list">
                      <li v-for="mod in erpSection.mobilePreview.modules" :key="mod.label"
                        class="flex flex-col items-center gap-1">
                        <span
                          class="grid h-9 w-9 place-items-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-slate-200/80">
                          <Icon :icon="mod.iconMdi" class="h-4 w-4" />
                        </span>
                        <span class="text-[9.5px] font-semibold text-slate-500">{{ mod.label }}</span>
                      </li>
                    </ul>
                  </div>

                  <div class="mt-3 flex min-h-0 flex-1 flex-col overflow-hidden px-4 pb-1">
                    <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      {{ erpSection.mobilePreview.sessionsTitle }}
                    </p>
                    <ul class="mt-2 min-h-0 flex-1 space-y-2 overflow-hidden">
                      <li v-for="session in erpSection.mobilePreview.sessions" :key="session.student"
                        class="flex items-center gap-2.5 rounded-xl bg-white px-3 py-2.5 shadow-sm ring-1 ring-slate-200/70">
                        <span
                          class="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-[10px] font-bold text-blue-700">
                          {{ session.initials }}
                        </span>
                        <div class="min-w-0 flex-1">
                          <p class="truncate text-[12.5px] font-bold text-slate-900">{{ session.student }}</p>
                          <p class="truncate text-[10.5px] text-slate-500">{{ session.subject }} · {{ session.time }}
                          </p>
                        </div>
                        <span :class="[
                          'shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide',
                          session.status === 'Confirmed'
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'bg-amber-50 text-amber-700',
                        ]">
                          {{ session.status }}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <nav class="mt-auto grid grid-cols-4 border-t border-slate-200/80 bg-white px-1 pb-3 pt-2"
                    :aria-label="erpSection.previewUrl">
                    <span v-for="item in erpSection.mobilePreview.nav" :key="item.label" :class="[
                      'flex flex-col items-center gap-0.5 text-[9.5px] font-semibold',
                      item.active ? 'text-blue-700' : 'text-slate-400',
                    ]">
                      <Icon :icon="item.iconMdi" class="h-4 w-4" />
                      {{ item.label }}
                    </span>
                  </nav>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
      <!-- 
      <div class="mt-12 text-center">
        <h3 class="font-display text-lg font-bold text-slate-900 sm:text-xl">{{ erpSection.featuresTitle }}</h3>
        <p class="mx-auto mt-2 max-w-xl text-[13.5px] leading-relaxed text-slate-500">
          {{ erpSection.featuresSubtitle }}
        </p>
      </div> -->

      <!-- <ul class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4" role="list">
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
      </ul> -->
    </div>
  </section>
</template>

<style scoped>
.erp-showcase {
  clip-path: inset(0 round 28px);
}

.erp-phone-crop {
  clip-path: inset(0);
}

.phone-shell {
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
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

  .phone-shell,
  .erp-card {
    transition: none;
  }

  .phone-shell:hover,
  .erp-card:hover {
    transform: none;
  }
}
</style>
