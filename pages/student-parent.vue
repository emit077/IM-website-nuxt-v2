<script setup lang="ts">
import StudentParentHeroSection from '~/components/student-parent/StudentParentHeroSection.vue'
import StudentParentNavSection from '~/components/student-parent/StudentParentNavSection.vue'
import EnrollmentPlansSection from '~/components/student-parent/EnrollmentPlansSection.vue'
import StudentParentErpSection from '~/components/student-parent/StudentParentErpSection.vue'
import SubscriptionPlansSection from '~/components/student-parent/SubscriptionPlansSection.vue'
import SubscriptionComparisonSection from '~/components/student-parent/SubscriptionComparisonSection.vue'
import StudentParentCTASection from '~/components/student-parent/StudentParentCTASection.vue'
import LearningStepsSection from '~/components/home/LearningStepsSection.vue'
import BrowseMentorsSection from '~/components/shared/BrowseMentorsSection.vue'

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
  <div>
    <StudentParentHeroSection />
    <StudentParentNavSection />
    <EnrollmentPlansSection />
    <section id="enrollment-process" class="scroll-mt-20">
      <LearningStepsSection />
    </section>
    <section id="browse-tutors" class="scroll-mt-20">
      <BrowseMentorsSection />
    </section>
    <StudentParentErpSection />
    <SubscriptionPlansSection />
    <SubscriptionComparisonSection />
    <StudentParentCTASection />
  </div>
</template>
