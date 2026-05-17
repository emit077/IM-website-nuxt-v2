<script setup lang="ts">
import CardHeader from './ui/cardheader.vue'

const metrics = [
  { value: '500K', suffix: '+', label: 'Verified Tutors' },
  { value: '100', suffix: '+', label: 'Institutions' },
  { value: '4.8', suffix: '/5', label: 'Satisfaction' },
  { value: '100', suffix: '%', label: 'Verified & Safe' },
]

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section id="institute-hiring" class="relative bg-cream-50 py-12 sm:py-14 lg:py-16"
    aria-label="Institute hiring section">
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#eef1ff] to-transparent"></div>

    <div class="container-page relative">
      <div
        class="relative overflow-hidden rounded-[28px] border border-slate-200/90 bg-white px-5 py-6 shadow-soft sm:px-7 sm:py-8 lg:px-8 lg:py-9">
        <div aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-[0.35]"
          style="background-image: radial-gradient(#cbd5e1 0.45px, transparent 0.45px); background-size: 22px 22px;">
        </div>
        <div aria-hidden="true"
          class="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-indigo-100/60 blur-3xl"></div>
        <div aria-hidden="true"
          class="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-blue-50/80 blur-3xl"></div>

        <div class="relative grid gap-8 lg:grid-cols-[1fr_300px] lg:items-start lg:gap-10">
          <div>
            <CardHeader variant="variant-1" content-class="!px-0 !py-0" badge="INSTITUTIONAL HIRING"
              title="Hire Verified Teachers <span class='text-gradient-brand'><br>at Scale</span>"
              description="From single hires to bulk staffing, Indian Mentors' institutional division handles verified teacher sourcing, interview coordination, and contract management for educational organizations." />

            <div class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div v-for="metric in metrics" :key="metric.label"
                class="rounded-xl border border-[#e7eefb] bg-[#f6f8fd] px-4 py-3 shadow-[0_2px_10px_rgba(37,99,235,0.05)] transition duration-200 hover:border-blue-200/80 hover:bg-white">
                <div
                  class="font-display text-[1.65rem] font-extrabold leading-none tracking-tight text-slate-900 sm:text-[1.85rem]">
                  {{ metric.value }}<span class="text-blue-600">{{ metric.suffix }}</span>
                </div>
                <p class="mt-2 text-[12px] font-semibold leading-snug text-slate-600 sm:text-[13px]">
                  {{ metric.label }}
                </p>
              </div>
            </div>

            <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#contact"
                class="btn-primary ripple group inline-flex h-12 items-center justify-center gap-2 !px-7 text-[15px]"
                @mousemove="rippleHandler">
                Hire Teachers
                <svg class="hiring-cta-arrow h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
              </a>
              <a href="#contact"
                class="btn-secondary inline-flex h-12 items-center justify-center gap-2 !px-6 text-[15px]">
                <svg class="h-4 w-4 text-blue-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 2.8a9.2 9.2 0 1 0 9.2 9.2A9.2 9.2 0 0 0 12 2.8Zm4.1 6.7-5 5a1 1 0 0 1-1.4 0l-2.4-2.4a1 1 0 0 1 1.4-1.4l1.7 1.7 4.3-4.3a1 1 0 1 1 1.4 1.4Z"
                    fill="currentColor" />
                </svg>
                Talk to Recruiter
              </a>
            </div>
          </div>

          <aside
            class="rounded-2xl border border-[#e7eefb] bg-[#f6f8fd] p-4 shadow-[0_2px_10px_rgba(37,99,235,0.05)] sm:p-5"
            aria-label="Institutional hiring highlights">
            <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600 sm:text-[12px]">Hiring Workflow
            </p>
            <ol class="mt-3 space-y-3">
              <li class="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm">
                <span
                  class="mt-0.5 inline-grid h-6 w-6 shrink-0 place-items-center rounded-full bg-indigo-600 text-[11px] font-bold text-white">1</span>
                <div>
                  <p class="text-[15px] font-semibold text-slate-900">Requirement Intake</p>
                  <p class="mt-0.5 text-[12px] leading-snug text-slate-600">Role mapping by subject, grade, and
                    location.</p>
                </div>
              </li>
              <li class="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm">
                <span
                  class="mt-0.5 inline-grid h-6 w-6 shrink-0 place-items-center rounded-full bg-indigo-600 text-[11px] font-bold text-white">2</span>
                <div>
                  <p class="text-[15px] font-semibold text-slate-900">Screening & Demo</p>
                  <p class="mt-0.5 text-[12px] leading-snug text-slate-600">Background checks, interviews, and trial
                    classes.</p>
                </div>
              </li>
              <li class="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm">
                <span
                  class="mt-0.5 inline-grid h-6 w-6 shrink-0 place-items-center rounded-full bg-indigo-600 text-[11px] font-bold text-white">3</span>
                <div>
                  <p class="text-[15px] font-semibold text-slate-900">Deployment Support</p>
                  <p class="mt-0.5 text-[12px] leading-snug text-slate-600">Onboarding, replacement, and quality
                    follow-ups.</p>
                </div>
              </li>
            </ol>
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hiring-cta-arrow {
  animation: hiring-arrow-loop 0.95s ease-in-out infinite;
}

@keyframes hiring-arrow-loop {

  0%,
  100% {
    transform: translateX(0);
    opacity: 1;
  }

  50% {
    transform: translateX(4px);
    opacity: 0.7;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hiring-cta-arrow {
    animation: none !important;
  }
}
</style>
