<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import CardHeader from '~/components/ui/cardheader.vue'
import { successStoriesFinalCta } from '~/data/success-stories'

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section id="book-demo" class="relative scroll-mt-20 bg-cream-50 py-12 sm:py-16" aria-label="Book a demo">
    <div class="container-page">
      <div
        class="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-6 py-12 shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)] sm:px-12 sm:py-14"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }"
      >
        <span
          aria-hidden="true"
          class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        />
        <span
          aria-hidden="true"
          class="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl"
        />

        <div class="relative mx-auto max-w-2xl text-center">
          <CardHeader
            variant="section-dark"
            heading-id="success-stories-cta-heading"
            content-class="!px-0 !py-0"
            :badge="successStoriesFinalCta.badge"
            :title="successStoriesFinalCta.title"
            :description="`<span class='text-blue-100/85'>${successStoriesFinalCta.description}</span>`"
          />

          <div class="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              :href="successStoriesFinalCta.primaryCta.href"
              @mousemove="rippleHandler"
              class="ripple group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-sm font-semibold text-blue-700 shadow-lg transition duration-300 hover:-translate-y-0.5 sm:w-auto"
            >
              <Icon icon="mdi:calendar-check-outline" class="h-4 w-4 shrink-0" aria-hidden="true" />
              {{ successStoriesFinalCta.primaryCta.label }}
              <IconArrowRight
                class="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              :href="successStoriesFinalCta.secondaryCta.href"
              class="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
            >
              <Icon icon="mdi:phone-outline" class="h-4 w-4 shrink-0" aria-hidden="true" />
              {{ successStoriesFinalCta.secondaryCta.label }}
            </a>
          </div>

          <p class="mt-6 text-[13px] font-medium text-blue-100/90 sm:text-sm">
            {{ successStoriesFinalCta.closing }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
