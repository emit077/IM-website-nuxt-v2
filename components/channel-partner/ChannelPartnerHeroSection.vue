<script setup lang="ts">
import TrustIndicators from '~/components/ui/TrustIndicators.vue'
import HeroHeader from '~/components/ui/HeroHeader.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { heroContent, heroTrustStats } from '~/data/channel-partner'

const heroSectionStyle = {
  backgroundImage: `url('${usePublicAsset(heroContent.backgroundImage)}')`,
}
</script>

<template>
  <section class="relative overflow-hidden bg-white bg-right bg-no-repeat" aria-labelledby="partner-hero-heading"
    :style="heroSectionStyle">
    <div class="container-page pb-12 pt-10 lg:pt-16">
      <HeroHeader variant="hero" heading-id="partner-hero-heading" :badge="heroContent.badge" :title="heroContent.title"
        :subtitle="heroContent.subtitle" :description="heroContent.description"
        :content-class="heroContent.contentClass" />

      <div class="my-7 flex flex-col gap-3 sm:flex-row" v-motion :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 480 } }">
        <ActionBtn variant="primary" :href="heroContent.primaryCta.href" :label="heroContent.primaryCta.label"
          icon="mdi:account-plus-outline" />
        <ActionBtn variant="secondary" :href="heroContent.secondaryCta.href" :label="heroContent.secondaryCta.label"
          icon="mdi:map-search-outline" :show-arrow="false" />
      </div>
      <p class="mb-6 ml-2 text-sm text-gray-500" v-html="heroContent.caption" />
      <div aria-hidden="true"
        class="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-cream-50" />
      <TrustIndicators class="pt-1" :items="heroTrustStats" />
    </div>
  </section>
</template>
