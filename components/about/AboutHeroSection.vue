<script setup lang="ts">
import HeroHeader from '~/components/ui/HeroHeaderLayout.vue'
import IconBook from '~/components/icons/IconBook.vue'
import IconAcademic from '~/components/icons/IconAcademic.vue'
import TrustIndicators from '~/components/ui/TrustIndicatorsLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'

const heroContent = {
  badge: 'About Your Trusted Academic Partner',
  title: 'Building Futures through <span class="text-gradient-brand">Personalised Education</span>',
  subtitle: '<span class="text-gradient-brand">Indian Mentors</span> — India\'s trusted tutoring ecosystem',
  description:
    'Connecting students, parents, tutors, and institutions through verified mentors and transparent, technology-driven learning.',
  contentClass: '!px-0 !py-0 max-w-2xl lg:max-w-[46rem]',
  backgroundImage: `url('${usePublicAsset('assets/img/hero/hero-3.png')}')`,
}

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

</script>

<template>
  <section class="relative overflow-hidden bg-white  bg-right bg-no-repeat " aria-labelledby="about-hero-heading"
    :style="{ backgroundImage: heroContent.backgroundImage }">
    <div class="bg-contain bg-no-repeat bg-right container-page">
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
        <HeroHeader heading-id="about-hero-heading" :badge="heroContent.badge" :title="heroContent.title"
          :subtitle="heroContent.subtitle" :description="heroContent.description"
          :content-class="heroContent.contentClass" />

        <div class="mt-6 mb-10 flex flex-col gap-3 sm:flex-row sm:gap-4" v-motion :initial="{ opacity: 0, y: 16 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }">
          <ActionBtn variant="primary" v-for="cta in heroCtas" :key="cta.id" :href="cta.href" :label="cta.label"
            :icon="cta.icon" />
        </div>

        <div aria-hidden="true"
          class="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-cream-50" />
        <TrustIndicators class="mt-4" :items="heroStats" />
      </div>
    </div>
  </section>
</template>
