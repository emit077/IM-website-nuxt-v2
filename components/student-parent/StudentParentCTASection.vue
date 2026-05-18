<script setup lang="ts">
import CardHeader from '~/components/ui/cardheader.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import IconCalendar from '~/components/icons/IconCalendar.vue'

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <!-- Conversion strip -->
  <section id="book-demo" class="relative bg-cream-50 py-10 sm:py-12" aria-label="Get started">
    <div class="container-page">
      <div
        class="relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-700 px-6 py-10 text-center shadow-[0_20px_60px_-22px_rgba(16,185,129,0.5)] sm:px-10 sm:py-12"
        v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">
        <span aria-hidden="true"
          class="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <div class="relative z-[1] mx-auto max-w-2xl">
          <h2 class="font-display text-2xl font-bold text-white sm:text-3xl">
            🔥 Give Your Child the Right Academic Support Today
          </h2>
          <p class="mt-3 text-sm text-emerald-50/95 sm:text-base">
            Experience personalised tutoring supported by transparent academic tracking and professional mentoring.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <a href="#book-demo"
              class="sp-cta-btn group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-[14px] font-semibold text-emerald-700 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(255,255,255,0.35)] sm:w-auto sm:min-w-[200px]"
              @mousemove="rippleHandler">
              <IconCalendar class="h-4 w-4 shrink-0" />
              Book Free Demo Class
              <IconArrowRight class="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="tel:+917389563564"
              class="sp-cta-btn inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-white/90 bg-white/10 px-6 py-3.5 text-[14px] font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/20 sm:w-auto sm:min-w-[160px]">
              📞 Call Now
            </a>
            <a href="https://wa.me/917389563564" target="_blank" rel="noopener noreferrer"
              class="sp-cta-btn inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-white/90 bg-white/10 px-6 py-3.5 text-[14px] font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/20 sm:w-auto sm:min-w-[180px]">
              💬 WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      <!-- Final journey CTA -->
      <div
        class="relative mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700 px-6 py-10 text-center shadow-[0_20px_60px_-22px_rgba(37,99,235,0.55)] sm:px-10 sm:py-12"
        v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550, delay: 100 } }">
        <span aria-hidden="true"
          class="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <div class="relative z-[1] mx-auto max-w-2xl">
          <CardHeader variant="variant-2"
            content-class="!px-0 !py-0 text-center [&_[data-slot=card-badge]]:mx-auto [&_[data-slot=card-title]]:text-center [&_[data-slot=card-description]]:mx-auto"
            badge="🚀 Start Your Learning Journey"
            title="Start Your Personalised Learning Journey Today"
            description="Choose a plan that matches your academic goals and learning intensity." />

          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <a href="#book-demo"
              class="sp-cta-btn group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-[14px] font-semibold text-blue-700 shadow-lg transition duration-300 hover:-translate-y-1 sm:w-auto"
              @mousemove="rippleHandler">
              <IconCalendar class="h-4 w-4 shrink-0" />
              Book Free Demo
            </a>
            <a href="#book-demo"
              class="sp-cta-btn inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-white bg-white/95 px-6 py-3.5 text-[14px] font-semibold text-blue-700 transition duration-300 hover:-translate-y-1 sm:w-auto">
              📞 Talk to Counsellor
            </a>
            <a href="#plan-comparison"
              class="sp-cta-btn inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-white/60 bg-transparent px-6 py-3.5 text-[14px] font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10 sm:w-auto">
              📊 Compare Plans in Detail
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sp-cta-btn {
  position: relative;
  overflow: hidden;
}

.sp-cta-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at var(--x, 50%) var(--y, 50%),
      rgba(255, 255, 255, 0.35) 0%,
      rgba(255, 255, 255, 0) 60%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.sp-cta-btn:hover::after {
  opacity: 1;
}
</style>
