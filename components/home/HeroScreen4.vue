<script setup lang="ts">
import TrustIndicators from '../ui/TrustIndicators.vue'
import { trustStats } from '~/data/trust'
import HeroHeader from '~/components/ui/HeroHeader.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import IconAcademic from '~/components/icons/IconAcademic.vue'

const heroContent = {
  badge: 'Structured System. Verified Students. Transparent Earnings',
  title: 'Join India\'s <span class="text-gradient-brand"> Trusted Tutor</span> Network',
  subtitle: 'Empowering Educators with Smart Opportunities',
  description:
    '<span class="text-gradient-brand">Indian Mentors</span> - Empowering Educators with Smart Opportunities. Access quality student leads and build your teaching career with institutional support.',
  contentClass: '!px-0 !py-0 max-w-2xl lg:max-w-[46rem]',
  backgroundImage: `url('${usePublicAsset('assets/img/hero/hero-4.png')}')`,
  caption: 'Trusted by 1,00,000+ Educators across India.',
}
</script>

<template>
  <section class="relative overflow-hidden bg-white  bg-right bg-no-repeat" aria-labelledby="hero-screen-4-heading"
    :style="{ backgroundImage: heroContent.backgroundImage }">
    <div class="container-page pb-12 pt-10 lg:pt-16">
      <HeroHeader variant="hero" heading-id="hero-screen-4-heading" :badge="heroContent.badge"
        :title="heroContent.title" :subtitle="heroContent.subtitle" :description="heroContent.description"
        :content-class="heroContent.contentClass" />
      <div class="my-6 flex flex-col gap-3 sm:flex-row sm:gap-4 " v-motion :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }">
        <ActionBtn variant="primary" label="Become A Tutor" :icon="IconAcademic" href="#book-demo" />
        <ActionBtn variant="secondary" label="Talk to Recruiter" href="#tutors" />
      </div>
      <p class="mb-6 ml-2 text-sm text-gray-500" v-html="heroContent.caption" />
      <div aria-hidden="true"
        class="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-cream-50" />
      <TrustIndicators class="pt-1" :items="trustStats" />
    </div>
  </section>
</template>
