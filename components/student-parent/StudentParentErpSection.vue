<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import {
  dashboardModules,
  erpDashboardSection,
  parentVisibilityPoints,
  secureEcosystemPoints,
} from '~/data/student-parent'

const spotlightIds = ['sessions', 'payments', 'notifications', 'feedback', 'messages', 'demo'] as const
const spotlightModules = dashboardModules.filter((m) =>
  (spotlightIds as readonly string[]).includes(m.id),
)

const navItems = [
  { label: 'Overview', icon: 'mdi:view-dashboard-outline', active: true },
  { label: 'Sessions', icon: 'mdi:calendar-clock-outline', active: false },
  { label: 'Attendance', icon: 'mdi:clipboard-check-outline', active: false },
  { label: 'Homework', icon: 'mdi:book-open-page-variant-outline', active: false },
  { label: 'Reports', icon: 'mdi:file-chart-outline', active: false },
  { label: 'Payments', icon: 'mdi:credit-card-outline', active: false },
  { label: 'Messages', icon: 'mdi:message-text-outline', active: false },
  { label: 'Settings', icon: 'mdi:cog-outline', active: false },
] as const

const previewStats = [
  { label: 'Attendance', value: '94%', delta: '+2.4% vs last month', icon: 'mdi:clipboard-check-outline' },
  { label: 'Sessions Done', value: '48', delta: '+12.1% vs last month', icon: 'mdi:calendar-check-outline' },
  { label: 'Avg. Score', value: '86%', delta: '+5.8% vs last month', icon: 'mdi:chart-line' },
] as const

const secondaryStats = [
  { label: 'Pending Homework', value: '3', action: 'View all' },
  { label: 'Upcoming Classes', value: '5', action: 'View schedule' },
  { label: 'Hours This Week', value: '6.5', action: 'View hours' },
  { label: 'Reports Ready', value: '2', action: 'View reports' },
] as const

const recentSessions = [
  { subject: 'Mathematics', tutor: 'Priya S.', date: '10 Aug', status: 'Done', tone: 'done' },
  { subject: 'Science', tutor: 'Rahul M.', date: '09 Aug', status: 'Done', tone: 'done' },
  { subject: 'English', tutor: 'Ananya K.', date: 'Today', status: 'Upcoming', tone: 'upcoming' },
] as const

const chartPoints = [
  { x: 8, y: 72 },
  { x: 22, y: 64 },
  { x: 36, y: 58 },
  { x: 50, y: 48 },
  { x: 64, y: 42 },
  { x: 78, y: 30 },
  { x: 92, y: 22 },
] as const

const chartPolyline = chartPoints.map((p) => `${p.x},${p.y}`).join(' ')
const chartArea = `8,88 ${chartPolyline} 92,88`

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section id="erp-dashboard" class="relative section-py" aria-labelledby="erp-heading">
    <div class="container-page relative">
      <!-- Hero split card (Partner Programme pattern) -->
      <div
        class="relative overflow-hidden rounded-[22px] border border-indigo-300/35 bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-500 text-white shadow-[0_24px_55px_-30px_rgba(37,99,235,0.85)] sm:rounded-[28px]"
        v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">
        <div
          class="grid items-center gap-6 px-5 py-6 sm:gap-8 sm:px-7 sm:py-8 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-0 lg:pl-10 lg:pr-0">
          <div class="min-w-0 lg:col-span-5 lg:py-10 xl:col-span-5">
            <CardHeader theme="dark" align="left" heading-id="erp-heading" :badge="erpDashboardSection.badge"
              :title="erpDashboardSection.title" :description="erpDashboardSection.description"
              :classes="erpDashboardSection.classes" />

            <ol class="mt-5 flex flex-wrap items-stretch gap-2 sm:gap-0" aria-label="Learning progress framework">
              <li v-for="(step, i) in erpDashboardSection.frameworkSteps" :key="step.label"
                class="flex min-w-[6.5rem] flex-1 items-stretch sm:min-w-0">
                <div
                  class="flex w-full flex-col rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 backdrop-blur-sm">

                  <span class="mt-0.5 text-sm font-bold text-white">{{ step.label }}</span>
                  <span class="mt-0.5 text-[11px] leading-snug text-white/70">{{ step.hint }}</span>
                </div>
                <span v-if="i < erpDashboardSection.frameworkSteps.length - 1" aria-hidden="true"
                  class="mx-1.5 hidden items-center text-white/45 sm:flex">
                  <Icon icon="mdi:arrow-right" class="h-4 w-4" />
                </span>
              </li>
            </ol>

            <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a :href="erpDashboardSection.ctaPrimary.href"
                class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 sm:w-auto sm:py-3 ripple group"
                @mousemove="rippleHandler">
                {{ erpDashboardSection.ctaPrimary.label }}
                <IconArrowRight
                  class="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a :href="erpDashboardSection.ctaSecondary.href"
                class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700 sm:w-auto sm:py-3">
                {{ erpDashboardSection.ctaSecondary.label }}
              </a>
            </div>
          </div>

          <!-- Learning dashboard mock -->
          <div class="min-w-0 self-stretch lg:col-span-7 lg:pl-2">
            <div
              class="relative h-full overflow-hidden rounded-2xl border border-white/15 bg-[#f4f6fb] shadow-[0_18px_50px_-26px_rgba(15,23,42,0.45)] sm:min-h-[380px] lg:min-h-[460px] lg:rounded-none lg:rounded-l-3xl lg:border-y-0 lg:border-l lg:border-r-0 lg:border-white/20">
              <div class="absolute inset-0 flex" aria-hidden="true">
                <!-- Sidebar -->
                <aside
                  class="hidden w-[118px] shrink-0 flex-col border-r border-slate-200/80 bg-white px-2.5 py-3 sm:flex">
                  <div class="mb-3 flex items-center gap-1.5 px-1">
                    <span
                      class="grid h-6 w-6 place-items-center rounded-md bg-blue-600 text-[9px] font-bold text-white">
                      IM
                    </span>
                    <div class="min-w-0 leading-tight">
                      <p class="truncate text-[9px] font-bold text-slate-800">Indian Mentors</p>
                      <p class="truncate text-[8px] text-slate-400">Learning Dashboard</p>
                    </div>
                  </div>
                  <nav class="flex flex-1 flex-col gap-0.5">
                    <div v-for="item in navItems" :key="item.label" :class="[
                      'flex items-center gap-1.5 rounded-lg px-1.5 py-1.5 text-[9px] font-medium',
                      item.active
                        ? 'bg-blue-50 font-semibold text-blue-700'
                        : 'text-slate-500',
                    ]">
                      <Icon :icon="item.icon" class="h-3 w-3 shrink-0" />
                      <span class="truncate">{{ item.label }}</span>
                    </div>
                  </nav>
                  <div class="mt-2 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 p-2 text-white">
                    <p class="text-[8px] font-semibold leading-snug">Need help?</p>
                    <p class="mt-0.5 text-[7px] text-white/80">Talk to counsellor</p>
                    <span
                      class="mt-1.5 inline-flex rounded-md bg-white px-1.5 py-0.5 text-[7px] font-bold text-blue-700">
                      Chat Now
                    </span>
                  </div>
                </aside>

                <!-- Main panel -->
                <div class="flex min-w-0 flex-1 flex-col overflow-hidden p-3 sm:p-3.5">
                  <div class="flex items-start justify-between gap-2">
                    <div>
                      <p class="text-[9px] font-semibold uppercase tracking-[0.12em] text-blue-600">
                        {{ erpDashboardSection.previewLabel }}
                      </p>
                      <h3 class="mt-0.5 text-[13px] font-bold text-slate-900 sm:text-[15px]">Overview</h3>
                      <p class="mt-0.5 text-[9px] text-slate-500 sm:text-[10px]">
                        Welcome back — {{ erpDashboardSection.previewStudent }}
                      </p>
                    </div>
                    <span
                      class="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[8px] font-bold text-emerald-700 ring-1 ring-emerald-100">
                      <span class="relative flex h-1.5 w-1.5">
                        <span
                          class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                        <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </span>
                      Live
                    </span>
                  </div>

                  <!-- KPI row -->
                  <div class="mt-2.5 grid grid-cols-3 gap-1.5 sm:gap-2">
                    <div v-for="stat in previewStats" :key="stat.label"
                      class="rounded-xl border border-slate-200/80 bg-white p-1.5 shadow-sm sm:p-2">
                      <div class="flex items-center gap-1">
                        <span class="grid h-5 w-5 place-items-center rounded-md bg-blue-50 text-blue-600 sm:h-6 sm:w-6">
                          <Icon :icon="stat.icon" class="h-3 w-3" />
                        </span>
                        <p class="truncate text-[8px] font-medium text-slate-500 sm:text-[9px]">{{ stat.label }}</p>
                      </div>
                      <p class="mt-1 font-display text-[13px] font-extrabold text-slate-900 sm:text-[15px]">
                        {{ stat.value }}
                      </p>
                      <p class="mt-0.5 truncate text-[7px] font-semibold text-emerald-600 sm:text-[8px]">
                        {{ stat.delta }}
                      </p>
                    </div>
                  </div>

                  <!-- Chart -->
                  <div
                    class="mt-2 flex-1 rounded-xl border border-slate-200/80 bg-white p-2 shadow-sm sm:mt-2.5 sm:p-2.5">
                    <div class="flex items-center justify-between gap-2">
                      <p class="text-[10px] font-bold text-slate-800 sm:text-[11px]">Learning Progress</p>
                      <p class="text-[8px] font-semibold text-blue-600">+12% vs last week</p>
                    </div>
                    <div class="relative mt-1 h-[72px] sm:h-[88px]">
                      <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="absolute inset-0 h-full w-full">
                        <defs>
                          <linearGradient id="learningProgressFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.28" />
                            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.02" />
                          </linearGradient>
                        </defs>
                        <polygon :points="chartArea" fill="url(#learningProgressFill)" stroke="none" />
                        <polyline :points="chartPolyline" fill="none" stroke="#2563eb" stroke-width="1.8"
                          stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" />
                        <circle cx="50" cy="48" r="2.2" fill="#2563eb" />
                      </svg>
                      <div
                        class="absolute left-[42%] top-[28%] rounded-md bg-slate-900 px-1.5 py-0.5 text-[7px] font-semibold text-white shadow-md">
                        Apr · 86% score
                      </div>
                      <div class="absolute inset-x-0 bottom-0 flex justify-between px-0.5 text-[7px] text-slate-400">
                        <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
                      </div>
                    </div>
                  </div>

                  <!-- Secondary stats -->
                  <div class="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-4 sm:gap-2">
                    <div v-for="item in secondaryStats" :key="item.label"
                      class="rounded-lg border border-slate-200/70 bg-white px-1.5 py-1.5 sm:px-2">
                      <p class="truncate text-[7px] font-medium text-slate-500 sm:text-[8px]">{{ item.label }}</p>
                      <p class="font-display text-[12px] font-extrabold text-slate-900 sm:text-[13px]">{{ item.value }}
                      </p>
                      <p class="truncate text-[7px] font-semibold text-blue-600">{{ item.action }} →</p>
                    </div>
                  </div>

                  <!-- Recent sessions table -->
                  <div
                    class="mt-2 hidden overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm sm:block">
                    <div class="flex items-center justify-between border-b border-slate-100 px-2.5 py-1.5">
                      <p class="text-[10px] font-bold text-slate-800">Recent Sessions</p>
                      <p class="text-[8px] font-semibold text-blue-600">View all →</p>
                    </div>
                    <div class="divide-y divide-slate-50">
                      <div v-for="row in recentSessions" :key="row.subject"
                        class="grid grid-cols-[1.2fr_1fr_0.7fr_0.8fr] items-center gap-1 px-2.5 py-1.5 text-[8px]">
                        <div class="flex items-center gap-1.5 min-w-0">
                          <span
                            class="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-[8px] font-bold text-blue-700">
                            {{ row.subject.charAt(0) }}
                          </span>
                          <span class="truncate font-semibold text-slate-800">{{ row.subject }}</span>
                        </div>
                        <span class="truncate text-slate-500">{{ row.tutor }}</span>
                        <span class="text-slate-500">{{ row.date }}</span>
                        <span :class="[
                          'justify-self-end rounded-full px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wide',
                          row.tone === 'done'
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'bg-amber-50 text-amber-700',
                        ]">
                          {{ row.status }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Spotlight modules -->
      <div class="mt-12">
        <div class="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">What you can control</p>
            <h3 class="mt-1 font-display text-xl font-bold text-slate-900 sm:text-2xl">
              Everything that matters, one tap away
            </h3>
          </div>
        </div>

        <ul class="grid grid-cols-1 gap-3 grid-cols-2 lg:grid-cols-6 lg:gap-4" role="list">
          <li v-for="(mod, i) in spotlightModules" :key="mod.id" v-motion :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 50, duration: 420 } }">
            <article
              class="group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card">
              <span
                class="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20"
                aria-hidden="true">
                <Icon :icon="mod.iconMdi" class="h-5 w-5" />
              </span>
              <h4 class="mt-4 font-display text-[15px] font-bold text-slate-900">{{ mod.title }}</h4>
              <p class="mt-1.5 flex-1 text-[13px] leading-relaxed text-slate-500">{{ mod.description }}</p>
            </article>
          </li>
        </ul>
      </div>

      <!-- Trust band -->
      <div class="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
        <div
          class="relative overflow-hidden rounded-[1.75rem] border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/60 p-6 sm:p-7"
          v-motion :initial="{ opacity: 0, y: 12 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
          <div class="flex items-center gap-3">
            <span
              class="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-500 text-white shadow-md shadow-emerald-500/25">
              <Icon icon="mdi:shield-lock-outline" class="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 class="font-display text-base font-bold text-slate-900 sm:text-lg">Secure by design</h3>
              <p class="text-[12px] text-slate-500">Your child’s data stays protected</p>
            </div>
          </div>
          <ul class="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2" role="list">
            <li v-for="point in secureEcosystemPoints" :key="point"
              class="flex items-start gap-2 text-[13px] text-slate-700">
              <Icon icon="mdi:check-circle" class="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
              {{ point }}
            </li>
          </ul>
        </div>

        <div
          class="relative overflow-hidden rounded-[1.75rem] border border-blue-100 bg-gradient-to-br from-[var(--theme-blue,#2a2fff)] to-sky-600 p-6 text-white sm:p-7"
          v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450, delay: 80 } }">
          <div class="flex items-center gap-3">
            <span class="grid h-11 w-11 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25">
              <Icon icon="mdi:eye-check-outline" class="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 class="font-display text-base font-bold sm:text-lg">Parents always know</h3>
              <p class="text-[12px] text-white/75">No guessing. No chasing updates.</p>
            </div>
          </div>
          <ul class="mt-5 space-y-2.5" role="list">
            <li v-for="point in parentVisibilityPoints" :key="point"
              class="flex items-start gap-2.5 text-[13px] text-white/95">
              <Icon icon="mdi:check-circle" class="mt-0.5 h-4 w-4 shrink-0 text-yellow-300" aria-hidden="true" />
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
