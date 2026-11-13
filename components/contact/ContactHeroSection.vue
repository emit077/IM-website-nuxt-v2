<script setup lang="ts">
import { computed } from 'vue'
import HeroHeader from '~/components/ui/HeroHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import TrustIndicators from '~/components/ui/TrustIndicatorsLayout.vue'
import { contactHeroCollageBottom, contactHeroCollageTop } from '~/data/contact'

const { data: primaryContact } = await useWebsitePrimaryContact()
const { data: heroScreens } = await useWebsiteHeroScreens('contact')
const liveHero = computed(() => heroScreens.value?.[0])

const collageTop = contactHeroCollageTop
const collageBottom = contactHeroCollageBottom

const heroContent = computed(() => ({
  badge: liveHero.value?.badge?.trim() || '',
  title: liveHero.value?.title?.trim() || '',
  subtitle: liveHero.value?.subtitle?.trim() || '',
  description: liveHero.value?.description?.trim() || '',
  contentClass: '!px-0 !py-0 max-w-none',
}))

const primaryCtaLabel = computed(() => liveHero.value?.primary_cta_label?.trim() || '')
const secondaryCtaLabel = computed(() => liveHero.value?.secondary_cta_label?.trim() || '')
const primaryCtaHref = computed(() => {
  const route = liveHero.value?.primary_route?.trim()
  if (route) return route
  const tel = primaryContact.value?.phone.tel
  return tel ? `tel:${tel}` : ''
})
const secondaryCtaHref = computed(() => liveHero.value?.secondary_route?.trim() || '')
const trustStats = computed(() =>
  (liveHero.value?.stats ?? [])
    .map((stat) => ({
      value: stat.value?.trim() || '',
      label: stat.label?.trim() || '',
      icon: stat.icon?.trim() || '',
    }))
    .filter((stat) => stat.value || stat.label),
)

function collageSrc(city: { image: string }) {
  const img = city.image?.trim() || ''
  if (!img) return ''
  if (/^https?:\/\//i.test(img) || img.startsWith('//') || img.includes('/media/')) {
    return useApiMedia(img)
  }
  if (img.includes('/')) return usePublicAsset(img)
  return usePublicAsset(`/assets/img/city-img/${img}.png`)
}
</script>

<template>
  <section class="relative overflow-hidden border-b border-slate-100 bg-white" aria-labelledby="contact-hero-heading">
    <div aria-hidden="true" class="absolute inset-0 -z-10 bg-mesh-light" />
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-blue-50/70 to-transparent" />

    <div class="container-page section-py">
      <div class="grid items-center gap-8 md:gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
        <div class="order-1 lg:order-none lg:col-start-1 lg:row-start-1">
          <HeroHeader variant="hero" heading-id="contact-hero-heading" :badge="heroContent.badge"
            :title="heroContent.title" :subtitle="heroContent.subtitle" :description="heroContent.description"
            :content-class="heroContent.contentClass" />
        </div>

        <div v-if="collageTop.length || collageBottom.length" class="relative order-3 mx-auto w-full max-w-md sm:max-w-xl md:order-3 md:max-w-none lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-none" v-motion
          :initial="{ opacity: 0, x: 20 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200, ease: [0.22, 1, 0.36, 1] } }">
          <div aria-hidden="true"
            class="pointer-events-none absolute -inset-2 rounded-[1.35rem] bg-gradient-to-br from-blue-100/50 via-indigo-50/30 to-sky-50/40 blur-sm" />
          <div
            class="relative overflow-hidden rounded-[1.35rem] border border-slate-200/70 bg-slate-100/80 p-2 shadow-[0_20px_50px_-24px_rgba(37,99,235,0.22)] sm:p-2.5">
            <div class="flex flex-col gap-2 sm:gap-2.5">
              <div class="grid grid-cols-2 gap-2 sm:gap-2.5">
                <div v-for="city in collageTop" :key="city.id"
                  class="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200 md:aspect-[16/10] lg:aspect-[4/3]">
                  <img :src="collageSrc(city)" :alt="`${city.label} tutoring services`"
                    class="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    loading="lazy" decoding="async" />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent"
                    aria-hidden="true" />
                  <span
                    class="absolute bottom-2 left-2 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-xs">
                    {{ city.label }}
                  </span>
                </div>
              </div>

              <div class="grid grid-cols-4 gap-2 sm:gap-2.5">
                <div v-for="city in collageBottom" :key="city.id"
                  class="group relative aspect-square overflow-hidden rounded-xl bg-slate-200">
                  <img :src="collageSrc(city)" :alt="`${city.label} tutoring services`"
                    class="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    loading="lazy" decoding="async" />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent"
                    aria-hidden="true" />
                  <span
                    class="absolute bottom-1.5 left-1.5 rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-semibold text-white backdrop-blur-sm sm:bottom-2 sm:left-2 sm:px-2.5 sm:py-1 sm:text-[10px] md:text-xs lg:text-[10px] xl:text-xs">
                    {{ city.label }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="primaryCtaLabel || secondaryCtaLabel"
          class="order-4 flex w-full flex-col gap-3 sm:flex-row sm:gap-4 md:order-2 lg:order-none lg:col-start-1 lg:row-start-2"
          v-motion :initial="{ opacity: 0, y: 16 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }">
          <ActionBtn v-if="primaryCtaLabel" class="!w-full sm:!w-auto sm:flex-1 xl:flex-none" variant="primary"
            :label="primaryCtaLabel" icon="mdi:phone-outline" :href="primaryCtaHref || '#'" />
          <ActionBtn v-if="secondaryCtaLabel" class="!w-full sm:!w-auto sm:flex-1 xl:flex-none" variant="secondary" :label="secondaryCtaLabel"
            icon="mdi:map-marker-radius-outline" :href="secondaryCtaHref || '#'"
            icon-wrapper-class="grid h-6 w-6 place-items-center rounded-full bg-blue-100 text-blue-700 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white" />
        </div>
      </div>

      <TrustIndicators class="mt-10 lg:mt-12" :items="trustStats" />
    </div>
  </section>
</template>
