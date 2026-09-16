<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'

const dashboardImage = '/assets/img/home/dashboard.png'

const headerContent = {
  badge: 'Channel Partner Programme',
  title: 'Become an Authorised <br class="hidden sm:inline"/> Regional Channel Partner',
  description:
    "Launch a premium education business with India's trusted tutoring brand. You focus on local growth and relationships — we provide the tutors, systems, and technology.",
  classes: '!mb-0 !mt-0 !px-0 !py-0',
}

const supports = [
  { icon: 'mdi:account-check-outline', label: 'Verified tutors' },
  // { icon: 'mdi:cog-outline', label: 'Proven systems' },
  { icon: 'mdi:bullhorn-outline', label: 'Marketing support' },
  { icon: 'mdi:monitor-dashboard', label: 'Partner technology' },
] as const

const steps = [
  { no: '01', icon: 'mdi:account-plus-outline', title: 'Register' },
  { no: '02', icon: 'mdi:handshake-outline', title: 'Collaborate' },
  { no: '03', icon: 'mdi:wallet-outline', title: 'Earn' },
] as const
</script>

<template>
  <section id="partner-programme" class="relative overflow-hidden section-py"
    aria-labelledby="partner-programme-heading">
    <div class="container-page relative">
      <div v-motion :initial="{ opacity: 0, y: 24 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="relative overflow-hidden rounded-[22px] border border-indigo-300/30 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-500 text-white sm:rounded-[28px]">
        <div aria-hidden="true"
          class="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full bg-sky-400/15 blur-3xl" />
        <div aria-hidden="true"
          class="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl" />

        <div
          class="relative z-[1] grid items-center gap-8 px-5 py-7 sm:gap-9 sm:px-7 sm:py-9 lg:grid-cols-12 lg:gap-8 lg:py-0 lg:pl-9 lg:pr-0">
          <div class="min-w-0 lg:col-span-6 lg:py-10 xl:col-span-6">
            <CardHeader heading-id="partner-programme-heading" theme="dark" align="left" :badge="headerContent.badge"
              :title="headerContent.title" :description="headerContent.description" :classes="headerContent.classes" />

            <ul class="mt-5 flex flex-wrap gap-2" role="list">
              <li v-for="item in supports" :key="item.label"
                class="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[12px] font-semibold text-indigo-50 ring-1 ring-white/15">
                <Icon :icon="item.icon" class="h-3.5 w-3.5 text-white" aria-hidden="true" />
                {{ item.label }}
              </li>
            </ul>

            <div class="mt-6">
              <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-200/90">
                Simple and structured onboarding
              </p>
              <p class="mt-1.5 text-[13.5px] font-medium leading-relaxed text-indigo-50/90">
                Our partnership journey is designed to be simple, transparent, and professional.
              </p>

              <ol class="mt-4 flex flex-wrap items-center gap-2" aria-label="Partnership onboarding steps">
                <template v-for="(step, i) in steps" :key="step.title">
                  <li
                    class="inline-flex items-center gap-2 rounded-full bg-white/10 py-1.5 pl-1.5 pr-3.5 ring-1 ring-white/20">
                    <span
                      class="grid h-7 w-7 place-items-center rounded-full bg-white text-[11px] font-bold text-indigo-800">
                      {{ step.no }}
                    </span>
                    <Icon :icon="step.icon" class="h-4 w-4 text-white" aria-hidden="true" />
                    <span class="text-[13px] font-semibold text-white">{{ step.title }}</span>
                  </li>
                  <Icon v-if="i < steps.length - 1" icon="mdi:arrow-right" class="hidden h-4 w-4 text-white/45 sm:block"
                    aria-hidden="true" />
                </template>
              </ol>
            </div>

            <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <NuxtLink to="/channel-partner"
                class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-indigo-800 shadow-lg shadow-indigo-950/25 transition hover:-translate-y-0.5 hover:bg-indigo-50 sm:w-auto sm:py-3">
                Apply for Partnership
                <Icon icon="mdi:arrow-right" class="h-4 w-4 shrink-0" aria-hidden="true" />
              </NuxtLink>
              <NuxtLink to="/channel-partner"
                class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15 sm:w-auto sm:py-3">
                <Icon icon="mdi:information-outline" class="h-4 w-4 shrink-0" aria-hidden="true" />
                Know More About Partnership
              </NuxtLink>
            </div>
          </div>

          <div class="min-w-0 self-stretch lg:col-span-6">
            <figure
              class="relative h-full overflow-hidden rounded-2xl border border-white/15 bg-white shadow-[0_24px_50px_-22px_rgba(2,6,23,0.55)] sm:rounded-[1.35rem] lg:rounded-none lg:rounded-l-[1.6rem] lg:border-y-0 lg:border-l lg:border-r-0"
              aria-label="Indian Mentors partner dashboard preview">
              <div class="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-3 py-2">
                <span class="h-2 w-2 rounded-full bg-rose-400" aria-hidden="true" />
                <span class="h-2 w-2 rounded-full bg-amber-400" aria-hidden="true" />
                <span class="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                <span class="ml-1 truncate text-[11px] font-semibold text-slate-400">Partner Dashboard</span>
              </div>
              <img :src="usePublicAsset(dashboardImage)" alt="Indian Mentors partner dashboard preview"
                class="aspect-[16/10] w-full object-cover object-left lg:aspect-auto lg:h-[calc(100%-2.25rem)] lg:min-h-[22rem] lg:object-left-top"
                width="960" height="600" loading="lazy" decoding="async" />

              <div
                class="absolute bottom-3 left-3 flex items-center gap-2 rounded-2xl border border-white/80 bg-white/95 px-3 py-2 shadow-[0_14px_36px_-14px_rgba(30,58,138,0.4)] backdrop-blur-sm sm:bottom-4 sm:left-4">
                <span class="grid h-8 w-8 place-items-center rounded-xl bg-blue-600 text-white" aria-hidden="true">
                  <Icon icon="mdi:account-group-outline" class="h-4 w-4" />
                </span>
                <div class="leading-tight">
                  <p class="font-display text-sm font-bold text-slate-900">100+</p>
                  <p class="text-[11px] font-medium text-slate-500">Active partners</p>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
