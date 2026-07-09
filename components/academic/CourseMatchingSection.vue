<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeader.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'

const matchCriteria = [
  'Subject expertise',
  'Grade level',
  'Academic board',
  'Learning objectives',
  'Preferred learning format',
]

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section id="course-matching"
    class="relative overflow-hidden bg-gradient-to-br from-[#0b1220] via-[#101a35] to-[#0a142f] section-py"
    aria-labelledby="course-matching-heading">
    <span aria-hidden="true"
      class="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-600/25 blur-3xl" />
    <span aria-hidden="true"
      class="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

    <div class="container-page relative z-[1]">
      <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12" v-motion
        :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">
        <div>
          <CardHeader theme="dark" classes="!px-0 !py-0" badge="🔎 INTELLIGENT COURSE MATCHING"
            title="Smart academic matching for optimal outcomes"
            description="Our system pairs students with the most suitable mentor based on academic profile and learning preferences." />

          <p class="mt-5 text-sm leading-relaxed text-blue-100/85 sm:text-base">
            This ensures students receive the most suitable mentor for optimal learning outcomes — not a generic
            assignment, but a deliberate match aligned with your goals.
          </p>

          <ul class="mt-6 space-y-3" role="list">
            <li v-for="(item, i) in matchCriteria" :key="item"
              class="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/95 backdrop-blur-sm"
              v-motion :initial="{ opacity: 0, x: -10 }"
              :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 100 + i * 70, duration: 400 } }">
              <span
                class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-500/30 text-blue-200 ring-1 ring-blue-400/30"
                aria-hidden="true">
                <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                  <path d="m5 12 4 4 10-10" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </span>
              {{ item }}
            </li>
          </ul>

          <div class="mt-8">
            <a href="#book-demo" class="btn-primary ripple group inline-flex w-full sm:w-auto"
              @mousemove="rippleHandler">
              Find Your Perfect Tutor
              <IconArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true" v-motion
          :initial="{ opacity: 0, scale: 0.96 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 200, duration: 600 } }">
          <div
            class="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)] backdrop-blur-md sm:p-8">
            <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-300">Match flow</p>
            <div class="mt-5 space-y-4">
              <div class="flex items-center gap-3">
                <span
                  class="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/25 text-blue-200 ring-1 ring-blue-400/30">
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                    <path d="M12 3 4 6v6c0 4.6 3.4 8.5 8 9 4.6-.5 8-4.4 8-9V6l-8-3z" stroke-linejoin="round" />
                  </svg>
                </span>
                <div>
                  <p class="text-sm font-semibold text-white">Student profile</p>
                  <p class="text-xs text-blue-100/70">Grade, board &amp; goals captured</p>
                </div>
              </div>
              <div class="ml-5 h-6 w-px bg-gradient-to-b from-blue-400/60 to-transparent" aria-hidden="true" />
              <div class="flex items-center gap-3">
                <span
                  class="grid h-10 w-10 place-items-center rounded-xl bg-indigo-500/25 text-indigo-200 ring-1 ring-indigo-400/30">
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                    <rect x="9" y="3" width="6" height="4" rx="1" />
                  </svg>
                </span>
                <div>
                  <p class="text-sm font-semibold text-white">Smart matching</p>
                  <p class="text-xs text-blue-100/70">AI-assisted tutor shortlist</p>
                </div>
              </div>
              <div class="ml-5 h-6 w-px bg-gradient-to-b from-indigo-400/60 to-transparent" aria-hidden="true" />
              <div class="flex items-center gap-3">
                <span
                  class="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/25 text-emerald-200 ring-1 ring-emerald-400/30">
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                    <path d="m9 12 2 2 4-4" stroke-linecap="round" stroke-linejoin="round" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </span>
                <div>
                  <p class="text-sm font-semibold text-white">Mentor assigned</p>
                  <p class="text-xs text-blue-100/70">Free demo &amp; learning plan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
