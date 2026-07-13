<script setup lang="ts">
import TrustIndicators from '../ui/TrustIndicators.vue'
import { trustStats } from '~/data/trust'
import HeroHeader from '~/components/ui/HeroHeader.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import IconBook from '~/components/icons/IconBook.vue'
import IconCalendar from '~/components/icons/IconCalendar.vue'

const heroContent = {
  badge: "India's #1 Verified Tutor Platform",
  title: 'Find the <span class="text-gradient-brand">Perfect Tutor</span><br class="hidden sm:block" /> for Your Child',
  subtitle: '<span class="text-gradient-brand">Indian Mentors</span> - Where Learning Meets Mentorship',
  description:
    'Structured tutoring and reliable teacher recruitment — built for families and educators across India. Background-checked mentors. Personalised plans. Real progress.',
  contentClass: '!px-0 !py-0 max-w-2xl lg:max-w-[46rem]',
  backgroundImage: `url('${usePublicAsset('assets/img/hero/hero-1.png')}')`,
  caption: 'Trusted by 50,000+ students & Parents.',
}
</script>

<template>
  <section class="relative overflow-hidden bg-white  bg-right bg-no-repeat" aria-labelledby="hero-screen-1-heading"
    :style="{ backgroundImage: heroContent.backgroundImage }">
    <div class="container-page pb-12 pt-10 lg:pt-16">
      <HeroHeader variant="hero" heading-id="hero-screen-1-heading" badge="India's #1 Verified Tutor Platform"
        :title="heroContent.title" :subtitle="heroContent.subtitle" :description="heroContent.description"
        :content-class="heroContent.contentClass" />
      <div class="my-6 flex flex-col gap-3 sm:flex-row sm:gap-4" v-motion :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }">
        <ActionBtn variant="primary" label="Book Free Demo" :icon="IconCalendar" href="#book-demo" />
        <ActionBtn variant="secondary" label="Browse Tutors" :icon="IconBook" href="#tutors"
          icon-wrapper-class="grid h-6 w-6 place-items-center rounded-full bg-blue-100 text-blue-700 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white" />
      </div>
      <p class="mb-6 ml-2 text-sm text-gray-500" v-html="heroContent.caption" />
      <div aria-hidden="true"
        class="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-cream-50" />
      <TrustIndicators class="pt-1" :items="trustStats" />
    </div>
  </section>
</template>
