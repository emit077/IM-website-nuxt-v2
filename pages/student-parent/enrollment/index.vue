<script setup lang="ts">
import StudentParentEnrollmentHeroSection from '~/components/student-parent/StudentParentEnrollmentHeroSection.vue'
import StudentParentProfilesSection from '~/components/student-parent/StudentParentProfilesSection.vue'
import EnrollmentProfileDetailsSection from '~/components/student-parent/EnrollmentProfileDetailsSection.vue'
import EnrollmentPlansSection from '~/components/student-parent/EnrollmentPlansSection.vue'
import EnrollmentWhyPremiumSection from '~/components/student-parent/EnrollmentWhyPremiumSection.vue'
import StudentParentJourneySection from '~/components/student-parent/StudentParentJourneySection.vue'
import EnrollmentExperienceSection from '~/components/student-parent/EnrollmentExperienceSection.vue'
import EnrollmentDecideSection from '~/components/student-parent/EnrollmentDecideSection.vue'
import EnrollmentTrustFaqSection from '~/components/student-parent/EnrollmentTrustFaqSection.vue'
import EnrollmentClosingSection from '~/components/student-parent/EnrollmentClosingSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import { enrollmentFinalCta } from '~/data/student-parent'

useSeoMeta({
  title: 'Student Enrollment Plans — Students & Parents | Indian Mentors',
  description:
    'Start with a Free Student Profile or upgrade to Premium for ₹1,200/year. Explore tutors, book a demo, and choose the right enrollment plan for your learning journey.',
  ogTitle: 'Student Enrollment Plans — Students & Parents | Indian Mentors',
  ogDescription:
    'Start free. Explore more. Learn better. Compare Free and Premium student profiles for personalised tutoring at Indian Mentors.',
  ogType: 'website',
})
</script>

<template>
  <div class="student-parent-enrollment">
    <StudentParentEnrollmentHeroSection />
    <StudentParentProfilesSection />
    <EnrollmentProfileDetailsSection />
    <EnrollmentPlansSection />
    <EnrollmentWhyPremiumSection />
    <StudentParentJourneySection />
    <EnrollmentExperienceSection />
    <EnrollmentDecideSection />
    <EnrollmentTrustFaqSection />
    <UiCTASection heading-id="sp-enrollment-cta-heading" surface-class="section-surface-muted"
      :title="enrollmentFinalCta.title" :description="enrollmentFinalCta.description"
      :supporting="enrollmentFinalCta.supporting" :ctas="enrollmentFinalCta.ctas" />
    <EnrollmentClosingSection />
  </div>
</template>
