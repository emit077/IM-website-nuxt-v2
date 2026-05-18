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
  <section id="book-demo" class="relative bg-cream-50 py-12 sm:py-14 lg:py-16" aria-labelledby="academic-cta-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#eef1ff] to-transparent" />

    <div class="container-page relative">
      <div
        class="relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700 px-6 py-10 text-center shadow-[0_20px_60px_-22px_rgba(37,99,235,0.55)] sm:px-10 sm:py-12 lg:px-14"
        v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">
        <span aria-hidden="true"
          class="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <span aria-hidden="true"
          class="pointer-events-none absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-indigo-400/20 blur-3xl" />

        <div class="relative z-[1] mx-auto max-w-2xl">
          <CardHeader variant="variant-2"
            content-class="!px-0 !py-0 text-center [&_[data-slot=card-badge]]:mx-auto [&_[data-slot=card-title]]:text-center [&_[data-slot=card-description]]:mx-auto"
            title="Start Your Personalised Learning Journey Today"
            description="Whether your child needs foundation learning, board exam preparation, or competitive mentoring — we connect you with verified tutors across India." />

          <div id="counsellor" class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <a href="#book-demo"
              class="academic-cta-btn group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-[14px] font-semibold text-blue-700 shadow-[0_14px_30px_-12px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:bg-blue-50 sm:w-auto sm:min-w-[200px]"
              @mousemove="rippleHandler">
              <IconCalendar class="h-4 w-4 shrink-0" />
              Book Free Demo
              <IconArrowRight class="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a href="#book-demo"
              class="academic-cta-btn group inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-white bg-white/95 px-6 py-3.5 text-[14px] font-semibold text-blue-700 shadow-md transition duration-300 hover:-translate-y-1 hover:bg-white sm:w-auto sm:min-w-[200px]">
              Find a Personalised Tutor
              <IconArrowRight class="h-4 w-4 shrink-0 opacity-80" />
            </a>
          </div>
          <p class="mt-5 text-sm text-blue-100/90">
            No commitment required · Background-verified tutors · Free demo session
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.academic-cta-btn {
  position: relative;
  overflow: hidden;
}

.academic-cta-btn::after {
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

.academic-cta-btn:hover::after {
  opacity: 1;
}
</style>
