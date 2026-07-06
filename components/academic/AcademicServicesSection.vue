<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import ServiceOfferingCard from '~/components/home/ServiceOfferingCard.vue'

type ServiceCard = {
  title: string
  description: string
  iconMdi: string
  features: string[]
  accent: {
    checkCircle: string
    link: string
    iconTint: string
    headingBar?: string
    iconMdiClass?: string
  }
}

const services: ServiceCard[] = [
  {
    title: 'Home Tutors',
    description: 'Personalised learning at your doorstep.',
    iconMdi: 'mdi:home',
    features: ['1-on-1 offline', 'Flexible schedule', 'All boards'],
    accent: {
      checkCircle: 'bg-blue-600 text-white',
      link: 'text-blue-600 group-hover:text-blue-700',
      iconTint: 'bg-blue-50 ring-1 ring-blue-100/90',
      iconMdiClass: 'text-blue-600',
    },
  },
  {
    title: 'Online Tutors',
    description: 'Live classes from anywhere.',
    iconMdi: 'mdi:monitor',
    features: ['Digital whiteboard', 'Recorded sessions', 'Remote support'],
    accent: {
      checkCircle: 'bg-blue-600 text-white',
      link: 'text-blue-600 group-hover:text-blue-700',
      iconTint: 'bg-blue-50 ring-1 ring-blue-100/90',
      iconMdiClass: 'text-blue-600',
    },
  },
  {
    title: 'Shadow Tutors',
    description: 'Support during school hours.',
    iconMdi: 'mdi:account-multiple',
    features: ['School-hour help', 'Concept boost', 'Exam prep'],
    accent: {
      checkCircle: 'bg-indigo-600 text-white',
      link: 'text-indigo-600 group-hover:text-indigo-700',
      iconTint: 'bg-indigo-50 ring-1 ring-indigo-100/90',
      headingBar: 'bg-indigo-600',
      iconMdiClass: 'text-indigo-600',
    },
  },
  {
    title: 'Travel Tutors',
    description: 'Learning continues on the move.',
    iconMdi: 'mdi:airplane',
    features: ['Travel with family', 'No gaps', 'On-demand'],
    accent: {
      checkCircle: 'bg-blue-600 text-white',
      link: 'text-blue-600 group-hover:text-blue-700',
      iconTint: 'bg-blue-50 ring-1 ring-blue-100/90',
      iconMdiClass: 'text-blue-600',
    },
  },
  {
    title: 'Live-In Tutors',
    description: 'Full-time residential mentoring.',
    iconMdi: 'mdi:home-account',
    features: ['Daily routine', 'Discipline', 'Immersive'],
    accent: {
      checkCircle: 'bg-blue-600 text-white',
      link: 'text-blue-600 group-hover:text-blue-700',
      iconTint: 'bg-blue-50 ring-1 ring-blue-100/90',
      iconMdiClass: 'text-blue-600',
    },
  },
  {
    title: 'Home Schooling',
    description: 'Curriculum-aligned home education.',
    iconMdi: 'mdi:book-education',
    features: ['Board syllabus', 'Dedicated mentor', 'Assessments'],
    accent: {
      checkCircle: 'bg-indigo-600 text-white',
      link: 'text-indigo-600 group-hover:text-indigo-700',
      iconTint: 'bg-indigo-50 ring-1 ring-indigo-100/90',
      headingBar: 'bg-indigo-600',
      iconMdiClass: 'text-indigo-600',
    },
  },
]

const modeIcons = services.map((s) => s.iconMdi)

function cardWidthClass() {
  return 'w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]'
}
</script>

<template>
  <section id="academic-services" class="relative overflow-hidden bg-cream-50 py-12 sm:py-14 lg:py-16"
    aria-labelledby="academic-services-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#eef1ff] to-transparent" />

    <div class="container-page relative z-[1]">
      <CardHeader heading-id="academic-services-heading" content-class="!px-0 !py-0" badge="Our services"
        title='Six ways we <span class="text-gradient-brand">reach you</span>' />

      <!-- Visual mode picker strip -->
      <div class="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3" aria-hidden="true">
        <span v-for="(icon, i) in modeIcons" :key="icon"
          class="grid h-12 w-12 place-items-center rounded-2xl bg-white text-blue-600 shadow-md ring-1 ring-slate-200/80 transition hover:-translate-y-1 hover:shadow-lg"
          v-motion :initial="{ opacity: 0, rotate: -8 }"
          :visibleOnce="{ opacity: 1, rotate: 0, transition: { delay: i * 50, duration: 400 } }">
          <Icon :icon="icon" class="h-6 w-6" />
        </span>
      </div>

      <div class="mt-8 flex flex-wrap justify-center gap-4 sm:gap-5">
        <ServiceOfferingCard v-for="(service, i) in services" :key="service.title" :class="cardWidthClass()"
          :title="service.title" :description="service.description" :features="service.features"
          :icon-mdi="service.iconMdi" :animation-index="i" :accent="service.accent" href="#book-demo" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 100 + i * 70, duration: 480 } }" />
      </div>
    </div>
  </section>
</template>
