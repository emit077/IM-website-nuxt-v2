<script setup lang="ts">
import StudentParentEnrollmentHeroSection from '~/components/student-parent/enrollment/StudentParentEnrollmentHeroSection.vue'
import StudentParentProfilesSection from '~/components/student-parent/enrollment/StudentParentProfilesSection.vue'
import EnrollmentPlansSection from '~/components/student-parent/enrollment/EnrollmentPlansSection.vue'
import EnrollmentDecideSection from '~/components/student-parent/enrollment/EnrollmentDecideSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import { enrollmentFinalCta } from '~/data/student-parent'
import LearningStepsSection from '~/components/student-parent/enrollment/LearningStepsSection.vue'
import StudentParentTrustSection from '~/components/student-parent/StudentParentTrustSection.vue'

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
    <div class="mt-12">
      <LearningStepsSection />
    </div>
    <StudentParentTrustSection />
    <StudentParentProfilesSection />
    <EnrollmentPlansSection />
    <EnrollmentDecideSection />
    <UiCTASection heading-id="sp-enrollment-cta-heading" surface-class="section-surface-muted"
      :title="enrollmentFinalCta.title" :description="enrollmentFinalCta.description" :ctas="enrollmentFinalCta.ctas" />
  </div>
</template>
