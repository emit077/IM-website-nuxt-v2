<script setup lang="ts">
import IconArrowRight from '~/components/icons/IconArrowRight.vue'

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section
    id="about-cta"
    class="bg-gradient-to-br from-[#0b1220] via-[#101a35] to-[#0a142f] py-16 sm:py-20 lg:py-24"
    aria-labelledby="about-cta-heading"
  >
    <div class="container-page">
      <div
        class="mx-auto max-w-2xl text-center"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <h2
          id="about-cta-heading"
          class="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
        >
          Ready to Learn Smarter?
        </h2>
        <p class="mt-5 text-base leading-relaxed text-blue-100/85 sm:text-lg">
          Book a free demo with a verified mentor — personalised learning, transparent progress, no commitment.
        </p>

        <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#book-demo"
            class="btn-primary ripple group w-full sm:w-auto"
            @mousemove="rippleHandler"
          >
            Book Free Demo
            <IconArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <NuxtLink to="/academic-coverage" class="btn-secondary w-full border-white/20 bg-white/10 text-white hover:border-white/40 hover:bg-white/15 hover:text-white sm:w-auto">
            Explore Academic Coverage
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
