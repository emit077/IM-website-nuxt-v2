<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import { finalCta } from '~/data/channel-partner'

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section id="partner-register" class="relative scroll-mt-20 bg-cream-50 py-12 sm:py-16"
    aria-labelledby="partner-cta-heading">
    <div class="container-page">
      <div
        class="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-6 py-12 text-center shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)] sm:px-12 sm:py-14"
        v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">
        <span aria-hidden="true"
          class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <span aria-hidden="true"
          class="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />

        <div class="relative mx-auto max-w-2xl">
          <h2 id="partner-cta-heading" class="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {{ finalCta.title }}
          </h2>
          <p class="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-blue-100 sm:text-base">
            {{ finalCta.description }}
          </p>

          <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a :href="finalCta.primaryCta.href" @mousemove="rippleHandler"
              class="ripple group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-sm font-semibold text-blue-700 shadow-lg transition duration-300 hover:-translate-y-0.5 sm:w-auto">
              <Icon icon="mdi:account-plus-outline" class="h-4 w-4 shrink-0" aria-hidden="true" />
              {{ finalCta.primaryCta.label }}
              <IconArrowRight class="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a :href="finalCta.secondaryCta.href"
              class="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto">
              <Icon icon="mdi:headset" class="h-4 w-4 shrink-0" aria-hidden="true" />
              {{ finalCta.secondaryCta.label }}
            </a>
            <a :href="finalCta.tertiaryCta.href"
              class="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto">
              <Icon icon="mdi:file-download-outline" class="h-4 w-4 shrink-0" aria-hidden="true" />
              {{ finalCta.tertiaryCta.label }}
            </a>
          </div>

          <!-- Closing statement -->
          <div class="mt-9 border-t border-white/15 pt-7">
            <p class="font-display text-base font-bold text-white sm:text-lg">
              {{ finalCta.closingTitle }}
            </p>
            <p class="mx-auto mt-2 max-w-xl text-[13px] leading-relaxed text-blue-100/85 sm:text-sm">
              {{ finalCta.closingStatement }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
