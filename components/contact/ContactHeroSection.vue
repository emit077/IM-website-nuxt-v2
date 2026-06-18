<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import { contactHero, contactHeroCollageBottom, contactHeroCollageTop } from '~/data/contact'

const heroTitle = `Contact Us<br class="hidden sm:block" /> <span class="text-gradient-brand">We’re Here to Help</span>`

const heroTagline =
  '<span class="text-gradient-brand">Indian Mentors</span> – Structured Academic Support, Delivered Nationwide'

const heroDescription = contactHero.subheadline

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section class="relative overflow-hidden border-b border-slate-100 bg-white" aria-labelledby="contact-hero-heading">
    <div aria-hidden="true" class="absolute inset-0 -z-10 bg-mesh-light" />
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-blue-50/70 to-transparent" />

    <div class="container-page py-12 sm:py-14 lg:py-16">
      <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <CardHeader variant="hero" heading-id="contact-hero-heading" content-class="!px-0 !py-0 max-w-none"
          :badge="contactHero.badge" :title="heroTitle" :tagline="heroTagline" :description="heroDescription">
          <div class="flex flex-col gap-3 sm:flex-row sm:gap-4" v-motion :initial="{ opacity: 0, y: 16 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }">
            <a :href="contactHero.primaryCta.href" class="btn-primary ripple group w-full sm:w-auto"
              @mousemove="rippleHandler">
              <Icon icon="mdi:map-marker-radius-outline" class="h-4 w-4 shrink-0 opacity-95" aria-hidden="true" />
              {{ contactHero.primaryCta.label }}
              <IconArrowRight
                class="hero-cta-arrow h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a :href="contactHero.secondaryCta.href" class="btn-secondary group w-full sm:w-auto">
              <span
                class="grid h-6 w-6 place-items-center rounded-full bg-blue-100 text-blue-700 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white">
                <Icon icon="mdi:phone-outline" class="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              {{ contactHero.secondaryCta.label }}
            </a>
          </div>

          <div class="mt-2 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" v-motion
            :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 1000, duration: 600 } }" />
        </CardHeader>

        <div class="relative mx-auto w-full max-w-md lg:max-w-none" v-motion :initial="{ opacity: 0, x: 20 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200, ease: [0.22, 1, 0.36, 1] } }">
          <div aria-hidden="true"
            class="pointer-events-none absolute -inset-2 rounded-[1.35rem] bg-gradient-to-br from-blue-100/50 via-indigo-50/30 to-sky-50/40 blur-sm" />

          <div
            class="relative overflow-hidden rounded-[1.35rem] border border-slate-200/70 bg-slate-100/80 p-2 shadow-[0_20px_50px_-24px_rgba(37,99,235,0.22)] sm:p-2.5">
            <div class="flex flex-col gap-2 sm:gap-2.5">
              <div class="grid grid-cols-2 gap-2 sm:gap-2.5">
                <div v-for="city in contactHeroCollageTop" :key="city.id"
                  class="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200">
                  <img :src="usePublicAsset(`/assets/img/city-img/${city.image}.png`)"
                    :alt="`${city.label} tutoring services`"
                    class="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    loading="lazy" decoding="async" />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent"
                    aria-hidden="true" />
                  <span
                    class="absolute bottom-2 left-2 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-xs">
                    {{ city.label }}
                  </span>
                </div>
              </div>

              <div class="grid grid-cols-4 gap-2 sm:gap-2.5">
                <div v-for="city in contactHeroCollageBottom" :key="city.id"
                  class="group relative aspect-square overflow-hidden rounded-xl bg-slate-200">
                  <img :src="usePublicAsset(`/assets/img/city-img/${city.image}.png`)"
                    :alt="`${city.label} tutoring services`"
                    class="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    loading="lazy" decoding="async" />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent"
                    aria-hidden="true" />
                  <span
                    class="absolute bottom-1.5 left-1.5 rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-semibold text-white backdrop-blur-sm sm:bottom-2 sm:left-2 sm:px-2.5 sm:py-1 sm:text-[10px]">
                    {{ city.label }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-cta-arrow {
  animation: hero-arrow-loop 0.95s ease-in-out infinite;
}

@keyframes hero-arrow-loop {

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
  .hero-cta-arrow {
    animation: none;
  }
}
</style>
