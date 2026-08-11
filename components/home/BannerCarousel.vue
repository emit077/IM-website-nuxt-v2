<script setup lang="ts">
import { computed } from 'vue'
import CarouselLayout from '~/components/ui/CarouselLayout.vue'
import { externalLinks } from '~/data/external-links'

export interface BannerSlide {
  /** Public URL, e.g. `/assets/img/banner/banner-1.png` */
  image: string
  /** Optional mobile crop; falls back to `image` when omitted. */
  mobileImage?: string
  /** Internal path (`/about`, `/#section`) or external URL (`https://…`). Omit for a non-clickable slide. */
  link?: string
  /** Accessible name when the slide is a link (recommended for SEO and screen readers). */
  label?: string
}

const props = withDefaults(
  defineProps<{
    slides?: BannerSlide[]
    /** Auto-advance interval in ms */
    interval?: number
    autoplay?: boolean
    showButtons?: boolean
    showDots?: boolean
    /**
     * Tailwind aspect / sizing classes for each slide.
     * Default keeps a wide desktop banner and a taller mobile crop.
     */
    aspectRatio?: string
    title?: string
  }>(),
  {
    title: 'Programs, offers & next steps',
    slides: () => [
      {
        image: '/assets/img/banner/banner-1.png',
        mobileImage: '/assets/img/banner/mobile-banner-1.png',
        link: externalLinks.studentSignup,
        label: 'Book a free demo — verified tutors',
      },
      {
        image: '/assets/img/banner/banner-2.png',
        mobileImage: '/assets/img/banner/mobile-banner-2.png',
        link: '/services',
        label: 'Explore tutoring services',
      },
    ],
    interval: 5000,
    autoplay: true,
    showButtons: false,
    showDots: true,
    aspectRatio:
      'aspect-[4/1] min-h-[140px] w-full max-sm:aspect-[2/1] sm:min-h-[160px] lg:min-h-[200px]',
  },
)

const list = computed(() => props.slides.filter((s) => s.image))

function isExternal(url: string) {
  return /^https?:\/\//i.test(url) || url.startsWith('mailto:') || url.startsWith('tel:')
}

function wrapTag(slide: BannerSlide) {
  if (!slide.link) return 'div'
  return isExternal(slide.link) ? 'a' : 'NuxtLink'
}

function wrapBind(slide: BannerSlide): Record<string, string> | { to: string } {
  if (!slide.link) return {}
  if (isExternal(slide.link)) {
    return { href: slide.link, target: '_blank', rel: 'noopener noreferrer' }
  }
  return { to: slide.link }
}
</script>

<template>
  <div class="my-10">
    <section v-if="list.length > 0" class="relative section-py-compact"
      :aria-label="`${props.title}. Promotional image carousel.`">
      <div class="container-page mt-12">
        <div class="overflow-hidden">
          <CarouselLayout :items="list" :interval="props.interval" :autoplay="props.autoplay"
            :show-buttons="props.showButtons" :show-dots="props.showDots" :aria-label="`${props.title} banners`">
            <template #default="{ item: slide }">
              <component :is="wrapTag(slide)" v-bind="wrapBind(slide)"
                class="block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50"
                :class="props.aspectRatio" :aria-label="slide.link ? slide.label : undefined">
                <picture>
                  <source v-if="slide.mobileImage" :srcset="usePublicAsset(slide.mobileImage)"
                    media="(max-width: 639px)" />
                  <img :src="usePublicAsset(slide.image)" :alt="slide.label ?? 'Banner'"
                    class="h-full w-full object-cover rounded-2xl shadow-soft" loading="lazy" decoding="async" />
                </picture>
              </component>
            </template>
          </CarouselLayout>
        </div>
      </div>
    </section>
  </div>
</template>
