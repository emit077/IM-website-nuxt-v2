<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import { institutionsFinalCta } from '~/data/institutions'

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section id="hire-teachers" class="relative scroll-mt-24 bg-cream-50 py-12 sm:py-16"
    aria-labelledby="institutions-cta-heading">
    <div class="container-page">
      <div id="talk-to-recruiter"
        class="relative scroll-mt-24 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#0b1220] via-[#101a35] to-[#0a142f] px-6 py-12 text-center shadow-[0_24px_60px_-24px_rgba(15,23,42,0.55)] sm:px-12 sm:py-14"
        v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">
        <span aria-hidden="true"
          class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <span aria-hidden="true"
          class="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />

        <div class="relative mx-auto max-w-2xl">
          <span
            class="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-blue-100">
            <Icon icon="mdi:account-tie-outline" class="h-4 w-4" aria-hidden="true" />
            {{ institutionsFinalCta.badge }}
          </span>

          <h2 id="institutions-cta-heading"
            class="font-display mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            {{ institutionsFinalCta.title }}
          </h2>
          <p class="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-blue-100/85 sm:text-base">
            {{ institutionsFinalCta.description }}
          </p>

          <div id="book-demo" class="scroll-mt-24 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a :href="institutionsFinalCta.primaryCta.href" @mousemove="rippleHandler"
              class="ripple group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-sm font-semibold text-blue-700 shadow-lg transition duration-300 hover:-translate-y-0.5 sm:w-auto">
              <Icon icon="mdi:account-tie-outline" class="h-4 w-4 shrink-0" aria-hidden="true" />
              {{ institutionsFinalCta.primaryCta.label }}
              <IconArrowRight class="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a :href="institutionsFinalCta.secondaryCta.href"
              class="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto">
              <Icon icon="mdi:phone-outline" class="h-4 w-4 shrink-0" aria-hidden="true" />
              {{ institutionsFinalCta.secondaryCta.label }}
            </a>
            <a :href="institutionsFinalCta.tertiaryCta.href" target="_blank" rel="noopener noreferrer"
              class="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto">
              <Icon icon="mdi:whatsapp" class="h-4 w-4 shrink-0" aria-hidden="true" />
              {{ institutionsFinalCta.tertiaryCta.label }}
            </a>
          </div>

          <p class="mt-8 text-sm font-medium text-blue-200/70">
            {{ institutionsFinalCta.closing }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
