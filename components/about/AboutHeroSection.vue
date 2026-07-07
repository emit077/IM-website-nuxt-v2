<script setup lang="ts">
import CardHeader from '~/components/ui/cardheader.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import IconCalendar from '~/components/icons/IconCalendar.vue'
import IconBook from '~/components/icons/IconBook.vue'
import IconAcademic from '~/components/icons/IconAcademic.vue'
import TrustIndicators from '~/components/shared/TrustIndicators.vue'
import { trustItems } from '~/data/trust'

const heroCtas = [
  {
    id: 'join',
    label: 'Join Our Team',
    href: '#team-structure',
    icon: IconAcademic,
  },
  {
    id: 'mission',
    label: 'Our Mission & vision',
    href: '#mission',
    icon: IconBook,
  }
]

const heroStats = [
  {
    value: '50K+',
    label: 'Active students',
    icon: 'solar:users-group-rounded-bold-duotone',
  },
  {
    value: '5+ lakh',
    label: 'Verified tutors',
    icon: 'solar:square-academic-cap-bold-duotone',
  },
  {
    value: '50+ lakh',
    label: 'Sessions delivered',
    icon: 'solar:videocamera-record-bold-duotone',
  },
  {
    value: '98%',
    label: 'Satisfaction rate',
    icon: 'solar:star-bold-duotone',
  },
]

const heroTitle =
  'Building Futures through <span class="text-gradient-brand">Personalised Education</span>'

const heroTagline =
  '<span class="text-gradient-brand">Indian Mentors</span> — India\'s trusted tutoring ecosystem'

const heroDescription =
  'Connecting students, parents, tutors, and institutions through verified mentors and transparent, technology-driven learning.'

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

const heroSectionStyle = {
  backgroundImage: `url('${usePublicAsset('assets/img/hero/hero-3.png')}')`,
}
</script>

<template>
  <section class="relative overflow-hidden bg-white  bg-center bg-no-repeat container-page"
    aria-labelledby="about-hero-heading">
    <div class="bg-contain bg-no-repeat bg-right" :style="heroSectionStyle">
      <div aria-hidden="true" class="absolute inset-0 -z-10 bg-mesh-light" />
      <div aria-hidden="true" class="absolute inset-0 -z-10 opacity-[0.04]"
        style="background-image: radial-gradient(#1e293b 0.8px, transparent 0.8px); background-size: 24px 24px" />
      <div aria-hidden="true"
        class="pointer-events-none absolute -left-14 -top-20 -z-10 h-72 w-72 rounded-full bg-indigo-300/25 blur-3xl" />
      <div aria-hidden="true"
        class="pointer-events-none absolute -right-20 top-28 -z-10 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
      <div aria-hidden="true"
        class="pointer-events-none absolute bottom-12 right-[18%] -z-10 h-44 w-44 rounded-full border border-indigo-200/70 bg-white/25 backdrop-blur-[1px]" />
      <div aria-hidden="true"
        class="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[400px] w-[1100px] -translate-x-1/2 bg-gradient-to-b from-indigo-200/30 to-transparent blur-3xl" />

      <div class=" pb-8 pt-10 lg:pt-16">
        <CardHeader variant="hero" heading-id="about-hero-heading"
          content-class="!px-0 !py-0 max-w-2xl lg:max-w-[46rem]" badge=" About Your Trusted Academic Partner"
          :title="heroTitle" :tagline="heroTagline" :description="heroDescription">
          <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4" v-motion :initial="{ opacity: 0, y: 16 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }">
            <a v-for="cta in heroCtas" :key="cta.id" :href="cta.href"
              class="btn-primary group w-full items-center justify-center gap-2 sm:w-auto">
              <component :is="cta.icon" class="h-[18px] w-[18px] shrink-0" />
              <span>{{ cta.label }}</span>
              <IconArrowRight class="hero-cta-arrow h-4 w-4 shrink-0" />
            </a>
          </div>
        </CardHeader>

        <div aria-hidden="true"
          class="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-cream-50" />
        <TrustIndicators class="mt-4" :items="heroStats" />
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
