<script setup lang="ts">
import CardHeader from './ui/cardheader.vue'
import IconArrowRight from './IconArrowRight.vue'
import IconCalendar from './IconCalendar.vue'

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section id="smart-learning-dashboard" class="relative overflow-hidden bg-cream-50 py-12 sm:py-14 lg:py-16"
    aria-label="Smart Learning Dashboard — ERP and transparency for families">
    <!-- Match HireInstitute / page rhythm -->
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#eef1ff] to-transparent"></div>
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10 bg-mesh-light opacity-90"></div>
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 top-1/4 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl"></div>
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl"></div>

    <div class="container-page relative">
      <div
        class="relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white px-5 py-6 shadow-soft sm:px-7 sm:py-8 lg:px-9 lg:py-10 lg:shadow-[0_8px_40px_-12px_rgba(15,23,42,0.08)]"
        v-motion :initial="{ opacity: 0, y: 14 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550, ease: 'easeOut' } }">
        <div aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-[0.35]"
          style="background-image: radial-gradient(#cbd5e1 0.45px, transparent 0.45px); background-size: 22px 22px;">
        </div>
        <div aria-hidden="true"
          class="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-indigo-100/50 blur-3xl"></div>
        <div aria-hidden="true"
          class="pointer-events-none absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-blue-50/90 blur-3xl"></div>

        <div class="relative grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          <!-- Copy + CTAs -->
          <div class="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
            <CardHeader variant="variant-1" content-class="!px-0 !py-0" badge="ERP &amp; TRANSPARENCY"
              title="Smart Learning <span class='text-gradient-brand'>Dashboard</span>"
              description="A secure, structured, and transparent learning ecosystem giving parents and students complete visibility." />

            <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap" v-motion :initial="{ opacity: 0, y: 10 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 120 } }">
              <a href="#book-demo" class="btn-primary ripple group w-full sm:w-auto" @mousemove="rippleHandler">
                <IconCalendar class="h-4 w-4 shrink-0 opacity-95" />
                Book Free Demo
                <IconArrowRight
                  class="dashboard-cta-arrow h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a href="#join" class="btn-secondary w-full sm:w-auto">
                Talk to Counsellor
              </a>
            </div>
          </div>

          <!-- Feature grid (HireInstitute-style tiles) -->
          <ul class="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5 lg:col-span-7 lg:grid-cols-3" role="list">
            <li v-motion :initial="{ opacity: 0, y: 12 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480, delay: 60 } }"
              class="dashboard-feature rounded-xl border border-[#e7eefb] bg-[#f6f8fd] p-4 shadow-[0_2px_10px_rgba(37,99,235,0.05)] sm:p-4">
              <div
                class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100/90"
                aria-hidden="true">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                  <rect x="9" y="3" width="6" height="4" rx="1" />
                  <path d="M9 12h6M9 16h4" />
                </svg>
              </div>
              <p class="text-[15px] font-semibold leading-snug text-slate-900">Track Attendance</p>
            </li>

            <li v-motion :initial="{ opacity: 0, y: 12 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480, delay: 100 } }"
              class="dashboard-feature rounded-xl border border-[#e7eefb] bg-[#f6f8fd] p-4 shadow-[0_2px_10px_rgba(37,99,235,0.05)] sm:p-4">
              <div
                class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100/90"
                aria-hidden="true">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65"
                  stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                  <path d="m9 16 2 2 4-4" />
                </svg>
              </div>
              <p class="text-[15px] font-semibold leading-snug text-slate-900">Scheduled Sessions</p>
            </li>

            <li v-motion :initial="{ opacity: 0, y: 12 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480, delay: 140 } }"
              class="dashboard-feature rounded-xl border border-[#e7eefb] bg-[#f6f8fd] p-4 shadow-[0_2px_10px_rgba(37,99,235,0.05)] sm:p-4">
              <div
                class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100/90"
                aria-hidden="true">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                </svg>
              </div>
              <p class="text-[15px] font-semibold leading-snug text-slate-900">Homework &amp; Notes</p>
            </li>

            <li v-motion :initial="{ opacity: 0, y: 12 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480, delay: 180 } }"
              class="dashboard-feature rounded-xl border border-[#e7eefb] bg-[#f6f8fd] p-4 shadow-[0_2px_10px_rgba(37,99,235,0.05)] sm:p-4">
              <div
                class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100/90"
                aria-hidden="true">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="M7 16v-5M12 16V8M17 16v-3" />
                </svg>
              </div>
              <p class="text-[15px] font-semibold leading-snug text-slate-900">Performance Analytics</p>
            </li>

            <li v-motion :initial="{ opacity: 0, y: 12 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480, delay: 220 } }"
              class="dashboard-feature rounded-xl border border-[#e7eefb] bg-[#f6f8fd] p-4 shadow-[0_2px_10px_rgba(37,99,235,0.05)] sm:p-4">
              <div
                class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100/90"
                aria-hidden="true">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65"
                  stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </div>
              <p class="text-[15px] font-semibold leading-snug text-slate-900">Fee &amp; Payments</p>
            </li>

            <li v-motion :initial="{ opacity: 0, y: 12 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480, delay: 260 } }"
              class="dashboard-feature rounded-xl border border-[#e7eefb] bg-[#f6f8fd] p-4 shadow-[0_2px_10px_rgba(37,99,235,0.05)] sm:p-4">
              <div
                class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100/90"
                aria-hidden="true">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <p class="text-[15px] font-semibold leading-snug text-slate-900">Real-Time Notifications</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dashboard-cta-arrow {
  animation: dashboard-arrow-loop 0.95s ease-in-out infinite;
}

@keyframes dashboard-arrow-loop {

  0%,
  100% {
    transform: translateX(0);
    opacity: 1;
  }

  50% {
    transform: translateX(3px);
    opacity: 0.75;
  }
}

.dashboard-feature {
  transition: border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.dashboard-feature:hover {
  border-color: rgba(191, 219, 254, 0.95);
  background-color: #fff;
  box-shadow: 0 8px 28px -12px rgba(37, 99, 235, 0.12);
  transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  .dashboard-cta-arrow {
    animation: none !important;
  }

  .dashboard-feature,
  .dashboard-feature:hover {
    transition: none;
    transform: none;
  }
}
</style>
