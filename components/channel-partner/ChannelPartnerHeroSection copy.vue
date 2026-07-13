<script setup lang="ts">
import TrustIndicators from '../ui/TrustIndicators.vue'
import { trustStats } from '~/data/trust'
import HeroHeader from '~/components/ui/HeroHeader.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import IconBook from '~/components/icons/IconBook.vue'
import IconCalendar from '~/components/icons/IconCalendar.vue'
import { heroContent, heroHighlights } from '~/data/channel-partner'

const heroTitle = `${heroContent.titleLead} <span class="text-gradient-brand">${heroContent.titleHighlight}</span>`
const heroDescription = `${heroContent.description}<br><br>${heroContent.subDescription}`

const heroContent1 = {
  title: 'Partner with Indian Mentors – <span class="text-gradient-brand">Personalised Tutoring Services</span>',
  subtitle: "<span class='text-gradient-brand;'>Indian Mentors</span> -  Empowering Education Through Trusted Mentorship",
  description: 'Our Channel Partner (Authorised Reseller) Program enables individuals, education consultants, coaching centres, and entrepreneurs to offer trusted tutoring solutions in their city while earning attractive commissions',
  contentClass: '!px-0 !py-0 max-w-2xl lg:max-w-[46rem]',
  backgroundImage: `url('${usePublicAsset('assets/img/hero/hero-4.png')}')`,
  caption: 'Trusted by 50,000+ students & Parents.',
}
</script>
<template>
  <section class="relative overflow-hidden bg-white  bg-right bg-no-repeat" aria-labelledby="hero-screen-2-heading"
    :style="{ backgroundImage: heroContent1.backgroundImage }">
    <div class="container-page pb-12 pt-10 lg:pt-16">
      <HeroHeader variant="hero" heading-id="hero-screen-2-heading"
        badge="Stronger Concepts. Better Grades. Brighter Future." :title="heroContent1.title"
        :subtitle="heroContent1.subtitle" :description="heroContent1.description"
        :content-class="heroContent1.contentClass" />
      <div class="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row" v-motion
        :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 480 } }">
        <ActionBtn variant="primary" :href="heroContent.primaryCta.href" :label="heroContent.primaryCta.label"
          icon="mdi:account-plus-outline" />
        <ActionBtn variant="secondary" :href="heroContent.secondaryCta.href" :label="heroContent.secondaryCta.label"
          icon="mdi:map-search-outline" :show-arrow="false" />
      </div>
      <p class="mb-6 ml-2 text-sm text-gray-500" v-html="heroContent1.caption" />
      <div aria-hidden="true"
        class="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-cream-50">
      </div>
      <TrustIndicators class="pt-1" :items="trustStats" />
    </div>
  </section>
</template>
