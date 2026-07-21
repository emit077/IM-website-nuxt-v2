<script setup lang="ts">
import { computed } from 'vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import CarouselLayout from '~/components/ui/CarouselLayout.vue'

export interface BannerSlide {
  /** Public URL, e.g. `/img/banner/banner-1.jpg` */
  image: string
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
    /** Section badge (CardHeader) */
    badge?: string
    /** Section title (CardHeader) */
    title?: string
    /** Short supporting copy under the title */
    description?: string
  }>(),
  {
    badge: 'Featured',
    title: 'Programs, offers & next steps',
    description:
      'Seasonal campaigns, partner highlights, and quick links for families — tap a slide to book a demo, explore a program, or jump straight to sign-up.',
    slides: () => [
      {
        image: '/assets/img/banner/banner-1.png',
        link: '/#book-demo',
        label: 'Book a free demo — verified tutors',
      },
      {
        image: '/assets/img/banner/banner-1.png',
        link: '/home',
        label: 'Explore the home experience',
      },
      {
        image: '/assets/img/banner/banner-1.png',
        link: '/#join',
        label: 'Join as a parent or tutor',
      },
    ],
    interval: 1000,
    autoplay: true,
    showButtons: true,
    showDots: false,
    aspectRatio:
      'aspect-[21/5] min-h-[140px] w-full max-sm:aspect-[4/3] sm:min-h-[160px] lg:min-h-[200px]',
  },
)

const headerContent = computed(() => ({
  badge: props.badge,
  title: props.title,
  description: props.description,
  classes: 'mb-3 sm:mb-4 !px-0 !py-0 max-w-3xl mx-auto',
}))

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
  <section v-if="list.length > 0" class="relative section-py-compact"
    :aria-label="`${props.title}. Promotional image carousel.`">
    <div class="container-page">
    <CardHeader theme="light" :badge="headerContent.badge" :title="headerContent.title"
      :description="headerContent.description" :classes="headerContent.classes" />

    <div class="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm ring-1 ring-black/5">
      <CarouselLayout :items="list" :interval="props.interval" :autoplay="props.autoplay"
        :show-buttons="props.showButtons" :show-dots="props.showDots" :aria-label="`${props.title} banners`">
        <template #default="{ item: slide }">
          <component :is="wrapTag(slide)" v-bind="wrapBind(slide)"
            class="block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50"
            :class="props.aspectRatio" :aria-label="slide.link ? slide.label : undefined">
            <img :src="usePublicAsset(slide.image)" :alt="slide.label ?? 'Banner'" class="h-full w-full object-cover"
              loading="lazy" decoding="async" />
          </component>
        </template>
      </CarouselLayout>
    </div>
    </div>
  </section>
</template>
