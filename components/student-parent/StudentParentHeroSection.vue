<script setup lang="ts">
import HeroHeader from '~/components/ui/HeroHeader.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import TrustIndicators from '~/components/ui/TrustIndicators.vue'
import IconCalendar from '~/components/icons/IconCalendar.vue'
import { trustStats } from '~/data/trust'

const heroContent = {
  badge: 'For Students &amp; Parents',
  title: 'Personalised learning with <span class="text-gradient-brand">measurable progress</span>',
  subtitle: '',
  description:
    'One-to-one teaching, structured academic planning, and transparent tracking — a complete, dependable learning experience for every family.',
  contentClass: '!px-0 !py-0 mx-auto max-w-3xl text-center',
}
</script>

<template>
  <section class="relative overflow-hidden section-surface-white" aria-labelledby="sp-hero-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-[420px] max-w-5xl bg-gradient-to-b from-blue-100/60 via-indigo-50/40 to-transparent blur-3xl" />

    <div class="container-page pb-14 pt-10 text-center sm:pb-16 lg:pt-16">
      <HeroHeader heading-id="sp-hero-heading" :badge="heroContent.badge" :title="heroContent.title"
        :subtitle="heroContent.subtitle" :description="heroContent.description"
        :content-class="heroContent.contentClass">
        <div class="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row" v-motion
          :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 450 } }">
          <ActionBtn variant="primary" href="#book-demo" label="Book Free Demo" :icon="IconCalendar" />
          <ActionBtn variant="secondary" href="#enrollment-plans" label="View Plans" :show-arrow="false" />
        </div>
      </HeroHeader>

      <TrustIndicators class="mt-10" :items="trustStats" />
    </div>
  </section>
</template>
