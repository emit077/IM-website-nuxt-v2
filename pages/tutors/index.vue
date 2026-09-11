<script setup lang="ts">
import TutorsHeroSection from '~/components/tutors/TutorsHeroSection.vue'
import TutorBenefitsSection from '~/components/tutors/TutorBenefitsSection.vue'
import TutorWhoCanJoinSection from '~/components/tutors/TutorWhoCanJoinSection.vue'
import TutorOpportunitiesSection from '~/components/tutors/TutorOpportunitiesSection.vue'
import TutorSubjectsSection from '~/components/tutors/TutorSubjectsSection.vue'
import TutorHiringProcessSection from '~/components/tutors/TutorHiringProcessSection.vue'
import TutorPlansSection from '~/components/tutors/TutorPlansSection.vue'
import TutorEarningsSection from '~/components/tutors/TutorEarningsSection.vue'
import TutorErpSection from '~/components/tutors/TutorErpSection.vue'
import TutorComplianceSection from '~/components/tutors/TutorComplianceSection.vue'
import TutorPolicySection from '~/components/tutors/TutorPolicySection.vue'
import TutorTrainingSection from '~/components/tutors/TutorTrainingSection.vue'
import TutorReferralSection from '~/components/tutors/TutorReferralSection.vue'
import TutorResourcesSection from '~/components/tutors/TutorResourcesSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import { tutorsBannerCta } from '~/data/tutors'

useSeoMeta({
  title: 'Tutors — Indian Mentors',
  description:
    'Build your teaching career with Indian Mentors. Join a professional mentor network with relevant student opportunities, flexible teaching formats, transparent earnings, and structured academic support.',
  ogTitle: 'Build Your Teaching Career with Indian Mentors',
  ogDescription:
    'Register as a tutor and connect with personalised tutoring opportunities across home, online, hybrid, and specialised teaching formats.',
  ogType: 'website',
})
</script>

<template>
  <div class="tutors">
    <TutorsHeroSection />
    <TutorBenefitsSection />
    <TutorWhoCanJoinSection />
    <TutorOpportunitiesSection />
    <TutorSubjectsSection />
    <TutorHiringProcessSection />
    <TutorPlansSection />
    <TutorEarningsSection />
    <TutorErpSection />
    <TutorPolicySection />
    <TutorComplianceSection />
    <TutorTrainingSection />
    <TutorReferralSection />
    <TutorResourcesSection />
    <UiCTASection heading-id="tutor-banner-heading" surface-class="section-surface-muted"
      badge-icon-mdi="mdi:human-male-board" :title="tutorsBannerCta.title" :description="tutorsBannerCta.description"
      :supporting="tutorsBannerCta.supporting" :ctas="tutorsBannerCta.ctas" />
  </div>
</template>
