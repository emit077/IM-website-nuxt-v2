<script setup lang="ts">
import HeroLayout from '~/components/ui/HeroLayout.vue'
import type { HeroContent } from '~/components/ui/HeroLayout.vue'
import IconBook from '~/components/icons/IconBook.vue'
import IconAcademic from '~/components/icons/IconAcademic.vue'

const secondaryIconClass =
  'grid h-6 w-6 place-items-center rounded-full bg-blue-100 text-blue-700 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white'

const heroContent: HeroContent = {
  badge: 'About Your Trusted Academic Partner',
  title: 'Building Futures through <span class="text-gradient-brand">Personalised Education</span>',
  subtitle: '<span class="text-gradient-brand">Indian Mentors</span> — India\'s trusted tutoring ecosystem',
  description:
    'Connecting students, parents, tutors, and institutions through verified mentors and transparent, technology-driven learning.',
  contentClass: '!px-0 !py-0 max-w-2xl lg:max-w-[46rem]',
  backgroundImage: `url('${usePublicAsset('assets/img/hero/hero-3.png')}')`,
  mobileBackgroundImage: `${usePublicAsset('assets/img/hero/hero-mobile-3.png')}`,
  headingId: 'about-hero-heading',
  actionBtns: [
    {
      variant: 'primary',
      label: 'Join Our Team',
      icon: IconAcademic,
      link: '#team-structure',
    },
    {
      variant: 'secondary',
      label: 'Our Mission & vision',
      icon: IconBook,
      link: '#mission',
      iconWrapperClass: secondaryIconClass,
    },
  ],
  trustStats: [
    {
      value: '50K+',
      label: 'Active students',
      icon: 'solar:users-group-rounded-bold-duotone',
    },
    {
      value: '5+ lakh',
      label: 'Verified tutors',
      icon: 'solar:square-academic-cap-bold-duotone',
    },
    {
      value: '50+ lakh',
      label: 'Sessions delivered',
      icon: 'solar:videocamera-record-bold-duotone',
    },
    {
      value: '98%',
      label: 'Satisfaction rate',
      icon: 'solar:star-bold-duotone',
    },
  ],
}
</script>

<template>
  <HeroLayout :hero-content="heroContent" />
</template>
