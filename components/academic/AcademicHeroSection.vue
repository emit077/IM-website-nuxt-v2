<script setup lang="ts">
import HeroHeader from '~/components/ui/HeroHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import TrustIndicators from '~/components/ui/TrustIndicatorsLayout.vue'
import IconCalendar from '~/components/icons/IconCalendar.vue'

const heroContent = {
  badge: 'Academic Coverage &amp; Courses',
  title: 'Complete learning support from <span class="text-gradient-brand">nursery to university</span>',
  subtitle: '',
  description:
    'Structured programs for every grade, board, and subject — including competitive exam prep, with verified mentors across India.',
  contentClass: '!px-0 !py-0 mx-auto max-w-3xl text-center',
}

const heroStats = [
  {
    value: '50K+',
    label: 'Active students learning every month',
    icon: 'solar:users-group-rounded-bold-duotone',
  },
  {
    value: '5+ lakh',
    label: 'Verified tutors across every subject',
    icon: 'solar:square-academic-cap-bold-duotone',
  },
  {
    value: '50+ lakh',
    label: 'Sessions delivered to date',
    icon: 'solar:videocamera-record-bold-duotone',
  },
  {
    value: '98%',
    label: 'Satisfaction rate from verified reviews',
    icon: 'solar:star-bold-duotone',
  },
]
</script>

<template>
  <section class="relative overflow-hidden section-surface-white" aria-labelledby="academic-hero-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-[420px] max-w-5xl bg-gradient-to-b from-blue-100/60 via-indigo-50/40 to-transparent blur-3xl" />

    <div class="container-page pb-14 pt-10 text-center sm:pb-16 lg:pt-16">
      <HeroHeader heading-id="academic-hero-heading" :badge="heroContent.badge" :title="heroContent.title"
        :subtitle="heroContent.subtitle" :description="heroContent.description"
        :content-class="heroContent.contentClass">
        <div class="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row" v-motion
          :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 450 } }">
          <ActionBtn variant="primary" href="#book-demo" label="Book Free Demo" :icon="IconCalendar" />
          <ActionBtn variant="secondary" href="#grades-covered" label="Explore Coverage" :show-arrow="false" />
        </div>
      </HeroHeader>

      <TrustIndicators class="mt-10 text-left" :items="heroStats" />
    </div>
  </section>
</template>
