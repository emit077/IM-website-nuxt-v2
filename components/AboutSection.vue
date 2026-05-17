<script setup lang="ts">
import TrustIndicators from './TrustIndicators.vue'
import HeroStats from './HeroStats.vue'
import IconArrowRight from './IconArrowRight.vue'
import IconBook from './IconBook.vue'
import IconCheck from './IconCheck.vue'
import CardHeader from './ui/cardheader.vue'

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section id="about" class="relative overflow-hidden bg-cream-50" aria-label="About us">
    <!-- Animated mesh background -->
    <div aria-hidden="true" class="absolute inset-0 -z-10 bg-mesh-light"></div>
    <div aria-hidden="true" class="absolute inset-0 -z-10 opacity-[0.04]"
      style="background-image: radial-gradient(#1E293B 0.8px, transparent 0.8px); background-size: 24px 24px;"></div>
    <!-- Subtle decorative blobs -->
    <div aria-hidden="true"
      class="absolute -top-20 -left-14 w-72 h-72 rounded-full bg-indigo-300/25 blur-3xl -z-10 pointer-events-none">
    </div>
    <div aria-hidden="true"
      class="absolute top-28 -right-20 w-80 h-80 rounded-full bg-sky-300/20 blur-3xl -z-10 pointer-events-none"></div>
    <div aria-hidden="true"
      class="absolute bottom-12 right-[18%] w-44 h-44 rounded-full border border-indigo-200/70 bg-white/25 backdrop-blur-[1px] -z-10 pointer-events-none">
    </div>
    <!-- Soft top fade -->
    <div aria-hidden="true"
      class="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[400px] bg-gradient-to-b from-indigo-200/30 to-transparent blur-3xl -z-10">
    </div>

    <div class="container-page pt-10 lg:pt-16 pb-12 ">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start lg:items-stretch">
        <!-- LEFT: Content -->
        <div class="lg:col-span-7 xl:col-span-6 flex flex-col gap-7 lg:gap-8">
          <CardHeader variant="variant-1" class="mb-2" badge="ABOUT US" title="About Us" content-class="!px-0 !py-0" />
          <!-- Supporting text -->
          <p class="text-pretty text-base sm:text-lg text-slate-600 leading-relaxed" v-motion
            :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 350 } }">
            India's #1 verified tutor platform. Building futures through personalised education with structured tutoring
            services and reliable teacher recruitment solutions across India.
            <br />
            <br />
            Structured tutoring and reliable teacher recruitment — built for families
            and educators across India. Background-checked mentors. Personalised plans.
            Real progress.
          </p>
          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4" v-motion :initial="{ opacity: 0, y: 16 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }">
            <a href="#book-demo" class="btn-primary ripple group w-full sm:w-auto" @mousemove="rippleHandler">
              Know More
              <IconArrowRight
                class="hero-cta-arrow w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          <!-- Divider -->
          <div class="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mt-2" v-motion
            :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 1000, duration: 600 } }"></div>
        </div>
        <!-- RIGHT: Stats -->
        <div class="lg:col-span-5 xl:col-span-6 relative flex lg:self-stretch">
          <HeroStats />
        </div>
      </div>
      <!-- Trust Indicators -->
      <!-- <TrustIndicators class="pt-1" /> -->
    </div>
    <!-- Bottom soft fade into next section -->
    <div aria-hidden="true"
      class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-cream-50 pointer-events-none">
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
</style>
