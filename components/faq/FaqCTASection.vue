<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import { faqCta } from '~/data/faq'

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section id="book-demo" class="scroll-mt-24 bg-cream-50 py-12 sm:py-16" aria-labelledby="faq-cta-heading">
    <div class="container-page">
      <div
        class="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-6 py-12 text-center shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)] sm:px-12 sm:py-14"
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

        <div class="relative mx-auto max-w-2xl">
          <span
            class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-blue-100"
          >
            <Icon icon="mdi:headset" class="h-4 w-4" aria-hidden="true" />
            {{ faqCta.badge }}
          </span>

          <h2
            id="faq-cta-heading"
            class="font-display mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            {{ faqCta.title }}
          </h2>
          <p class="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-blue-100 sm:text-base">
            {{ faqCta.description }}
          </p>

          <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              v-for="(cta, i) in faqCta.ctas"
              :key="cta.label"
              :href="cta.href"
              :class="[
                'inline-flex w-full items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 sm:w-auto',
                i === 1
                  ? 'ripple group bg-white text-blue-700 shadow-lg hover:bg-blue-50'
                  : 'border border-white/40 text-white hover:bg-white/10',
              ]"
              @mousemove="i === 1 ? rippleHandler($event) : undefined"
            >
              <Icon :icon="cta.iconMdi" class="h-4 w-4 shrink-0" aria-hidden="true" />
              {{ cta.label }}
              <IconArrowRight
                v-if="i === 1"
                class="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
