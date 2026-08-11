<script setup lang="ts">
import StudentParentHeroSection from '~/components/student-parent/StudentParentHeroSection.vue'
import StudentParentNavSection from '~/components/student-parent/StudentParentNavSection.vue'
import EnrollmentPlansSection from '~/components/student-parent/EnrollmentPlansSection.vue'
import StudentParentErpSection from '~/components/student-parent/StudentParentErpSection.vue'
import SubscriptionPlansSection from '~/components/student-parent/SubscriptionPlansSection.vue'
import SubscriptionComparisonSection from '~/components/student-parent/SubscriptionComparisonSection.vue'
import LearningStepsSection from '~/components/student-parent/LearningStepsSection.vue'
import BrowseMentorsSection from '~/components/shared/BrowseMentorsSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import { externalLinks } from '~/data/external-links'

const studentParentCtas = [
  { label: 'Book Free Demo Class', href: externalLinks.studentSignup, iconMdi: 'mdi:calendar-check-outline', primary: true },
  { label: 'Call Us', href: 'tel:+917389563564', iconMdi: 'mdi:phone-outline' },
  { label: 'WhatsApp', href: 'https://wa.me/917389563564', iconMdi: 'mdi:whatsapp', target: '_blank' },
] as const

useSeoMeta({
  title: 'Students & Parents — Indian Mentors',
  description:
    'Personalised learning, measurable progress, and trusted support. Explore free and premium student profiles, subscription plans, and the Parents & Student Learning Dashboard.',
  ogTitle: 'Students & Parents — Indian Mentors',
  ogDescription:
    'Flexible enrollment and subscription plans with ERP-powered transparency for families across India.',
  ogType: 'website',
})
</script>

<template>
  <div class="student-parent">
    <StudentParentHeroSection />
    <!-- <StudentParentNavSection /> -->
    <EnrollmentPlansSection />
    <LearningStepsSection />
    <section id="browse-tutors" class="scroll-mt-20">
      <BrowseMentorsSection mode="tutors" />
    </section>
    <StudentParentErpSection />
    <!-- <SubscriptionPlansSection /> -->
    <SubscriptionComparisonSection />
    <UiCTASection surface-class="section-surface-white" title="Give your child the right academic support"
      description="Start with a free demo class — experience personalised tutoring backed by transparent tracking and professional mentoring."
      supporting="Compare plans anytime in the plan comparison above." :ctas="studentParentCtas" />
  </div>
</template>
