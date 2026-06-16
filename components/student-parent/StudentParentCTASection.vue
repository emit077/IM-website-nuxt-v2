<script setup lang="ts">
import { Icon } from '@iconify/vue'
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
  <section id="book-demo" class="relative bg-cream-50 py-12 sm:py-16" aria-label="Get started">
    <div class="container-page">
      <div
        class="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-6 py-12 text-center shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)] sm:px-12 sm:py-14"
        v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">
        <span aria-hidden="true"
          class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <span aria-hidden="true"
          class="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />

        <div class="relative mx-auto max-w-2xl">
          <h2 class="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Give your child the right academic support
          </h2>
          <p class="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-blue-100 sm:text-base">
            Start with a free demo class — experience personalised tutoring backed by
            transparent tracking and professional mentoring.
          </p>

          <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#book-demo" @mousemove="rippleHandler"
              class="ripple group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-sm font-semibold text-blue-700 shadow-lg transition duration-300 hover:-translate-y-0.5 sm:w-auto">
              <IconCalendar class="h-4 w-4 shrink-0" />
              Book Free Demo Class
              <IconArrowRight class="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="tel:+917389563564"
              class="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto">
              <Icon icon="mdi:phone-outline" class="h-4 w-4 shrink-0" aria-hidden="true" />
              Call Us
            </a>
            <a href="https://wa.me/917389563564" target="_blank" rel="noopener noreferrer"
              class="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto">
              <Icon icon="mdi:whatsapp" class="h-4 w-4 shrink-0" aria-hidden="true" />
              WhatsApp
            </a>
          </div>

          <a href="#plan-comparison"
            class="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-blue-100 underline-offset-4 transition hover:text-white hover:underline">
            Or compare plans in detail
            <IconArrowRight class="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
