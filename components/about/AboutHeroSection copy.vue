<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import IconBook from '~/components/icons/IconBook.vue'
import IconAcademic from '~/components/icons/IconAcademic.vue'
import TrustIndicators from '~/components/shared/TrustIndicators.vue'
import { aboutHeroCollage } from '~/data/about'

function aboutCollageSrc(image: string) {
  return usePublicAsset(`assets/img/about/${image}.jpg`)
}

const heroHighlights = [
  { id: 'verified', label: 'Verified mentors', icon: 'mdi:shield-check-outline' },
  { id: 'reach', label: 'Pan-India reach', icon: 'mdi:map-marker-radius-outline' },
  { id: 'trusted', label: 'Parent trusted', icon: 'mdi:heart-outline' },
]

const heroCtas = [
  {
    id: 'join',
    label: 'Join Our Team',
    href: '#team-structure',
    icon: IconAcademic,
    variant: 'primary' as const,
  },
  {
    id: 'mission',
    label: 'Our Mission & vision',
    href: '#mission',
    icon: IconBook,
    variant: 'soft' as const,
  },
]

const heroStats = [
  {
    id: 'students',
    title: '50K+',
    description: 'Active students',
    icon: 'solar:users-group-rounded-bold-duotone',
  },
  {
    id: 'tutors',
    title: '5+ lakh',
    description: 'Verified tutors',
    icon: 'solar:square-academic-cap-bold-duotone',
  },
  {
    id: 'sessions',
    title: '50+ lakh',
    description: 'Sessions delivered',
    icon: 'solar:videocamera-record-bold-duotone',
  },
  {
    id: 'satisfaction',
    title: '98%',
    description: 'Satisfaction rate',
    icon: 'solar:star-bold-duotone',
  },
]

const heroTitle =
  'Building Futures through <span class="text-gradient-brand">Personalised Education</span>'

const heroTagline =
  '<span class="text-gradient-brand">Indian Mentors</span> — India\'s trusted tutoring ecosystem'

const heroDescription =
  'Connecting students, parents, tutors, and institutions through verified mentors and transparent, technology-driven learning.'

function collageCellClass(index: number) {
  if (index === 0) return 'col-span-4 row-span-2'
  if (index === 1 || index === 2) return 'col-span-2 row-span-1'
  return 'col-span-3 row-span-1'
}

function collageTiltClass(index: number) {
  const tilts = ['-rotate-[0.5deg]', 'rotate-1', '-rotate-1', 'rotate-[0.5deg]', '-rotate-[0.75deg]']
  return tilts[index % tilts.length]
}

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section class="relative overflow-hidden border-b border-slate-100 bg-white" aria-labelledby="about-hero-heading">
    <div aria-hidden="true" class="absolute inset-0 -z-10 bg-mesh-light" />
    <div aria-hidden="true" class="absolute inset-0 -z-10 opacity-[0.035]"
      style="background-image: radial-gradient(#1e293b 0.8px, transparent 0.8px); background-size: 24px 24px" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-16 -top-24 -z-10 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl about-hero-float" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 top-20 -z-10 h-80 w-80 rounded-full bg-sky-300/25 blur-3xl about-hero-float about-hero-float-delayed" />
    <div aria-hidden="true"
      class="pointer-events-none absolute bottom-16 left-[42%] -z-10 h-36 w-36 rounded-full border border-indigo-200/60 bg-white/30 backdrop-blur-[2px]" />
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-blue-50/80 via-indigo-50/30 to-transparent" />

    <div class="container-page py-12 sm:py-14 lg:py-16">
      <div class="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <!-- Left: content -->
        <div class="flex flex-col justify-center">
          <CardHeader variant="hero" heading-id="about-hero-heading" content-class="!px-0 !py-0 max-w-none"
            badge="About Your Trusted Academic Partner" :title="heroTitle" :tagline="heroTagline"
            :description="heroDescription">
            <div class="flex flex-wrap gap-2.5" v-motion :initial="{ opacity: 0, y: 12 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 380 } }">
              <span v-for="chip in heroHighlights" :key="chip.id"
                class="inline-flex items-center gap-1.5 rounded-full border border-blue-100/90 bg-white/80 px-3.5 py-1.5 text-[12px] font-semibold text-blue-700 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 sm:text-[13px]">
                <Icon :icon="chip.icon" class="h-3.5 w-3.5 text-blue-500" aria-hidden="true" />
                {{ chip.label }}
              </span>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4" v-motion :initial="{ opacity: 0, y: 16 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }">
              <a v-for="cta in heroCtas" :key="cta.id" :href="cta.href" :class="[
                'group w-full items-center justify-center gap-2 sm:w-auto',
                cta.variant === 'primary'
                  ? 'btn-primary ripple shadow-[0_14px_36px_-16px_rgba(37,99,235,0.55)]'
                  : 'inline-flex rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 px-7 py-3.5 text-sm font-semibold text-blue-700 ring-1 ring-blue-100 transition duration-300 hover:-translate-y-0.5 hover:from-blue-100 hover:to-indigo-100 hover:ring-blue-200',
              ]" @mousemove="cta.variant === 'primary' ? rippleHandler($event) : undefined">
                <span :class="[
                  'grid h-7 w-7 place-items-center rounded-lg transition duration-300',
                  cta.variant === 'primary'
                    ? 'bg-white/15'
                    : 'bg-white text-blue-600 ring-1 ring-blue-100 group-hover:bg-blue-600 group-hover:text-white',
                ]">
                  <component :is="cta.icon" class="h-[16px] w-[16px] shrink-0" />
                </span>
                <span>{{ cta.label }}</span>
                <IconArrowRight class="hero-cta-arrow h-4 w-4 shrink-0" />
              </a>
            </div>

            <div class="mt-2 h-px bg-gradient-to-r from-blue-200/80 via-slate-200 to-transparent" v-motion
              :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 1000, duration: 600 } }" />
          </CardHeader>
        </div>

        <!-- Right: image collage -->
        <div class="relative flex h-full min-h-[400px] w-full lg:min-h-[540px]" v-motion
          :initial="{ opacity: 0, x: 20 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200, ease: [0.22, 1, 0.36, 1] } }">
          <div aria-hidden="true"
            class="pointer-events-none absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-blue-200/40 via-indigo-100/30 to-amber-100/20 blur-md" />

          <Icon icon="mdi:sparkles" aria-hidden="true"
            class="pointer-events-none absolute -right-1 top-6 z-20 h-7 w-7 text-amber-400/90 about-hero-sparkle" />
          <Icon icon="mdi:star-four-points" aria-hidden="true"
            class="pointer-events-none absolute -left-2 bottom-24 z-20 h-5 w-5 text-blue-400/70 about-hero-sparkle about-hero-sparkle-delayed" />

          <div
            class="relative flex h-full w-full overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/60 p-2.5 shadow-[0_24px_60px_-28px_rgba(37,99,235,0.35)] ring-1 ring-slate-200/70 backdrop-blur-sm sm:p-3">
            <div class="grid h-full min-h-0 w-full grid-cols-6 grid-rows-3 gap-2.5 sm:gap-3">
              <div v-for="(photo, index) in aboutHeroCollage" :key="photo.id"
                class="group relative min-h-0 overflow-hidden rounded-[1rem] bg-slate-200 shadow-sm ring-1 ring-white/60 transition duration-500 hover:z-10 hover:shadow-lg"
                :class="[collageCellClass(index), collageTiltClass(index), 'hover:rotate-0']" v-motion
                :initial="{ opacity: 0, scale: 0.96 }"
                :enter="{ opacity: 1, scale: 1, transition: { duration: 500, delay: 280 + index * 80 } }">
                <img :src="aboutCollageSrc(photo.image)" :alt="photo.alt"
                  class="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                  :loading="index === 0 ? 'eager' : 'lazy'" decoding="async" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-950/5 to-transparent"
                  aria-hidden="true" />
              </div>
            </div>

            <div
              class="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3.5 py-2 text-[11px] font-bold text-slate-800 shadow-lg backdrop-blur-md sm:text-xs">
              <span class="grid h-6 w-6 place-items-center rounded-full bg-emerald-500 text-white">
                <Icon icon="mdi:check-bold" class="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              Trusted by families nationwide
            </div>
          </div>
        </div>
      </div>

      <TrustIndicators class="mt-10 sm:mt-12 lg:mt-14" :stats="heroStats" />
    </div>

    <div aria-hidden="true"
      class="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-cream-50" />
  </section>
</template>

<style scoped>
.hero-cta-arrow {
  animation: hero-arrow-loop 0.95s ease-in-out infinite;
}

.about-hero-float {
  animation: about-hero-float 8s ease-in-out infinite;
}

.about-hero-float-delayed {
  animation-delay: -3s;
}

.about-hero-sparkle {
  animation: about-hero-sparkle 3s ease-in-out infinite;
}

.about-hero-sparkle-delayed {
  animation-delay: -1.4s;
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

@keyframes about-hero-float {

  0%,
  100% {
    transform: translateY(0) scale(1);
  }

  50% {
    transform: translateY(-12px) scale(1.03);
  }
}

@keyframes about-hero-sparkle {

  0%,
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.85;
  }

  50% {
    transform: scale(1.12) rotate(12deg);
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {

  .hero-cta-arrow,
  .about-hero-float,
  .about-hero-float-delayed,
  .about-hero-sparkle,
  .about-hero-sparkle-delayed {
    animation: none;
  }
}
</style>
