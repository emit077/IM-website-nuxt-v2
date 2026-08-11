<script setup lang="ts">
import CarouselLayout from '~/components/ui/CarouselLayout.vue'
import HeroLayout from '~/components/ui/HeroLayout.vue'
import type { HeroContent } from '~/components/ui/HeroLayout.vue'
import HeroTickerStrip from '~/components/ui/HeroTickerStrip.vue'
import IconBook from '~/components/icons/IconBook.vue'
import IconCalendar from '~/components/icons/IconCalendar.vue'
import IconAcademic from '~/components/icons/IconAcademic.vue'
import { externalLinks } from '~/data/external-links'

const props = withDefaults(
  defineProps<{
    /** Auto-advance interval in ms */
    interval?: number
    autoplay?: boolean
    showButtons?: boolean
    showDots?: boolean
  }>(),
  {
    interval: 5000,
    autoplay: true,
    showButtons: true,
    showDots: false,
  },
)


const secondaryIconClass =
  'grid h-6 w-6 place-items-center rounded-full bg-blue-100 text-blue-700 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white'

const bookDemoBtn = {
  variant: 'primary' as const,
  label: 'Book Free Demo',
  icon: IconCalendar,
  link: externalLinks.studentSignup,
}
const trustStats = [
  {
    value: '50,000+',
    label: 'Students Supported',
    icon: 'solar:users-group-two-rounded-linear',
  },
  {
    value: '1,00,000+',
    label: 'Verified Tutors',
    icon: 'solar:square-academic-cap-linear',
  },
  {
    value: '50,00,000+',
    label: 'Sessions Delivered',
    icon: 'solar:bookmark-linear',
  },
  {
    value: '98%',
    label: 'Satisfaction Rate',
    icon: 'solar:star-bold-duotone',
  },
]

const heroTickerItems = trustStats.map((stat) => `${stat.value} ${stat.label}`)
const browseTutorsBtn = {
  variant: 'secondary' as const,
  label: 'Browse Tutors',
  icon: IconBook,
  link: '#tutors',
  iconWrapperClass: secondaryIconClass,
}

const heroScreens: HeroContent[] = [
  {
    badge: "India's #1 Verified Tutor Platform",
    title:
      'Find the <span class="text-gradient-brand">Perfect Tutor</span><br class="hidden sm:block" /> for Your Child',
    subtitle:
      '<span class="text-gradient-brand">Indian Mentors</span> - Where Learning Meets Mentorship',
    description:
      'Structured tutoring and teacher recruitment for families across India.<br class="hidden sm:block" /> Background-checked mentors. Personalised plans. Real progress.',
    contentClass: '!px-0 !py-0 max-w-2xl lg:max-w-[46rem]',
    backgroundImage: `url('${usePublicAsset('assets/img/hero/hero-1.png')}')`,
    mobileBackgroundImage: `${usePublicAsset('assets/img/hero/hero-mobile-1.png')}`,
    caption: 'Trusted by 50,000+ students & Parents.',
    headingId: 'hero-screen-1-heading',
    actionBtns: [bookDemoBtn, browseTutorsBtn],
    trustStats,
  },
  {
    badge: 'Stronger Concepts. Better Grades. Brighter Future.',
    title:
      'Personalised <span class="text-gradient-brand"> </span> Learning for <span class="text-gradient-brand"> Your Success</span>',
    subtitle:
      '<span class="text-gradient-brand">Indian Mentors</span> - Guiding Every Student Towards Academic Excellence',
    description:
      'Providing structured tutoring services and reliable teacher recruitment solutions across India.',
    contentClass: '!px-0 !py-0 max-w-2xl lg:max-w-[46rem]',
    backgroundImage: `url('${usePublicAsset('assets/img/hero/hero-2.png')}')`,
    mobileBackgroundImage: `${usePublicAsset('assets/img/hero/hero-mobile-2.png')}`,
    caption: 'Trusted by 50,000+ students & Parents.',
    headingId: 'hero-screen-2-heading',
    actionBtns: [bookDemoBtn, browseTutorsBtn],
    trustStats,
  },
  {
    badge: 'Safety, Quality &amp; Transparency in Every Session',
    title:
      'Learn from <span class="text-gradient-brand">  Background</span><br class="hidden sm:block" /> Verified Tutors',
    subtitle: '<span class="text-gradient-brand">Indian Mentors</span> - Building Strong Foundations for Lifelong Learning',
    description:
      'Building Strong Foundations for Lifelong Learning<br />Every tutor undergoes structured verification and performance monitoring.',
    contentClass: '!px-0 !py-0 max-w-2xl lg:max-w-[46rem]',
    backgroundImage: `url('${usePublicAsset('assets/img/hero/hero-3.png')}')`,
    mobileBackgroundImage: `${usePublicAsset('assets/img/hero/hero-mobile-3.png')}`,
    caption: 'Trusted by 50,000+ students & Parents.',
    headingId: 'hero-screen-3-heading',
    actionBtns: [bookDemoBtn, browseTutorsBtn],
    trustStats,
  },
  {
    badge: 'Structured System. Verified Students. Transparent Earnings',
    title:
      'Join India\'s <span class="text-gradient-brand"> Trusted Tutor</span> Network',
    subtitle: '<span class="text-gradient-brand">Indian Mentors</span> - Empowering Educators with Smart Opportunities',
    description:
      'Empowering Educators with Smart Opportunities. Access quality student leads and build your teaching career with institutional support.',
    contentClass: '!px-0 !py-0 max-w-2xl lg:max-w-[46rem]',
    backgroundImage: `url('${usePublicAsset('assets/img/hero/hero-4.png')}')`,
    mobileBackgroundImage: `${usePublicAsset('assets/img/hero/hero-mobile-4.png')}`,
    caption: 'Trusted by 1,00,000+ Educators across India.',
    headingId: 'hero-screen-4-heading',
    actionBtns: [
      {
        variant: 'primary',
        label: 'Become A Tutor',
        icon: IconAcademic,
        link: externalLinks.tutorRegistration,
      },
      {
        variant: 'secondary',
        label: 'Talk to Recruiter',
        link: '#tutors',
      },
    ],
    trustStats,
  },
]
</script>

<template>
  <div class="hero-carousel overflow-x-clip">
    <CarouselLayout :items="heroScreens" :interval="props.interval" :autoplay="props.autoplay"
      :show-buttons="props.showButtons" :show-dots="props.showDots" aria-label="Featured highlights">
      <template #default="{ item }">
        <HeroLayout :hero-content="item" />
      </template>
    </CarouselLayout>

    <div class="hero-carousel-ticker mb-10 mt-[-20px]">
      <HeroTickerStrip :items="heroTickerItems" aria-label="Platform highlights" />
    </div>
  </div>
</template>

<style scoped>
.hero-carousel-ticker {
  --theme-secondary: var(--theme-blue, #2a2fff);
  --theme-secondary-ink: #ffffff;
  --theme-secondary-glow: rgba(42, 47, 255, 0.45);
}
</style>
