<script setup lang="ts">
import StudentParentHeroSection from '~/components/student-parent/StudentParentHeroSection.vue'
import StudentParentAudiencesSection from '~/components/student-parent/StudentParentAudiencesSection.vue'
import StudentParentNeedsSection from '~/components/student-parent/StudentParentNeedsSection.vue'
import StudentParentExpectSection from '~/components/student-parent/StudentParentExpectSection.vue'
import StudentParentMatchingSection from '~/components/student-parent/StudentParentMatchingSection.vue'
import StudentParentDemoSection from '~/components/student-parent/StudentParentDemoSection.vue'
import StudentParentModesSection from '~/components/student-parent/StudentParentModesSection.vue'
import StudentParentCoverageSection from '~/components/student-parent/StudentParentCoverageSection.vue'
import StudentParentEnrollmentPreviewSection from '~/components/student-parent/StudentParentEnrollmentPreviewSection.vue'
import StudentParentPlansPreviewSection from '~/components/student-parent/StudentParentPlansPreviewSection.vue'
import StudentParentMonitoringSection from '~/components/student-parent/StudentParentMonitoringSection.vue'
import StudentParentCollaborationSection from '~/components/student-parent/StudentParentCollaborationSection.vue'
import StudentParentWhySection from '~/components/student-parent/StudentParentWhySection.vue'
import StudentParentTrustSection from '~/components/student-parent/StudentParentTrustSection.vue'
import StudentParentFaqSection from '~/components/student-parent/StudentParentFaqSection.vue'
import StudentParentClosingSection from '~/components/student-parent/StudentParentClosingSection.vue'
import StudentParentPlansSection from '~/components/student-parent/subscription/StudentParentPlansSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import WhyChooseUs from '~/components/ui/shared/WhyChooseUs.vue'
import StudentParentSupportSection from '~/components/ui/shared/StudentParentSupportSection.vue'
import BrowseMentorsSection from '~/components/shared/BrowseMentorsSection.vue'
import { spFinalCta, spWhyFamilies } from '~/data/student-parent'

useSeoMeta({
  title: 'Parents & Students — Indian Mentors',
  description:
    'Personalised learning, measurable progress, and trusted support. One-to-one tutoring with structured matching, free demos, academic monitoring, and dedicated counselling for families.',
  ogTitle: 'Parents & Students — Indian Mentors',
  ogDescription:
    'A better way to learn. A smarter way to support your child — personalised tutoring, transparent progress, and a complete learning journey.',
  ogType: 'website',
})
</script>

<template>
  <div class="student-parent">
    <StudentParentHeroSection />
    <StudentParentAudiencesSection />
    <StudentParentNeedsSection />
    <!-- <StudentParentExpectSection /> -->
    <StudentParentMatchingSection />
    <StudentParentDemoSection />
    <StudentParentModesSection />
    <StudentParentCoverageSection />
    <StudentParentEnrollmentPreviewSection />
    <StudentParentPlansSection :mini="true" />
    <BrowseMentorsSection mode="students" />
    <StudentParentMonitoringSection />
    <!-- <StudentParentCollaborationSection /> -->
    <!-- <StudentParentWhySection /> -->
    <WhyChooseUs />
    <WhyChooseUs layout="grid" :show-ctas="false" section-id="why-families" heading-id="why-families-heading"
      surface-class="section-surface-white" :badge="spWhyFamilies.badge" :title="spWhyFamilies.title"
      :description="spWhyFamilies.description" :classes="spWhyFamilies.classes" :items="spWhyFamilies.items" />
    <StudentParentTrustSection />
    <UiCTASection heading-id="sp-final-cta-heading" layout="split" surface-class="section-surface-muted"
      :title="spFinalCta.title" :description="spFinalCta.description" :ctas="spFinalCta.ctas" />
    <StudentParentSupportSection />
    <!-- <StudentParentClosingSection /> -->
  </div>
</template>
