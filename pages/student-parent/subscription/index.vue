<script setup lang="ts">
import StudentParentSubscriptionHeroSection from '~/components/student-parent/subscription/StudentParentSubscriptionHeroSection.vue'
import SubscriptionPageNav from '~/components/student-parent/subscription/SubscriptionPageNav.vue'
import SubscriptionBuildConceptSection from '~/components/student-parent/subscription/SubscriptionBuildConceptSection.vue'
import StudentParentPlansSection from '~/components/student-parent/subscription/StudentParentPlansSection.vue'
import SubscriptionComparisonSection from '~/components/student-parent/subscription/SubscriptionComparisonSection.vue'
import SubscriptionTenureSection from '~/components/student-parent/subscription/SubscriptionTenureSection.vue'
import SubscriptionTrialSection from '~/components/student-parent/subscription/SubscriptionTrialSection.vue'
import SubscriptionSavingsSection from '~/components/student-parent/subscription/SubscriptionSavingsSection.vue'
import SubscriptionBuilderSection from '~/components/student-parent/subscription/SubscriptionBuilderSection.vue'
import SubscriptionMonitoringSection from '~/components/student-parent/subscription/SubscriptionMonitoringSection.vue'
import SubscriptionSupportsSection from '~/components/student-parent/subscription/SubscriptionSupportsSection.vue'
import SubscriptionRecommendSection from '~/components/student-parent/subscription/SubscriptionRecommendSection.vue'
import SubscriptionFaqSection from '~/components/student-parent/subscription/SubscriptionFaqSection.vue'
import SubscriptionTermsSection from '~/components/student-parent/subscription/SubscriptionTermsSection.vue'
import SubscriptionClosingSection from '~/components/student-parent/subscription/SubscriptionClosingSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import { subscriptionFinalCta } from '~/data/student-parent'

useSeoMeta({
  title: 'Subscription Plans — Students & Parents | Indian Mentors',
  description:
    'Choose a Gold, Diamond, or Platinum learning plan, then select a tenure from a 1-month paid trial to an annual subscription with eligible savings of up to 15%.',
  ogTitle: 'Subscription Plans — Students & Parents | Indian Mentors',
  ogDescription:
    'Personalised tutoring plans designed around how your child learns and how long you need the service — with transparent tenures and payment options.',
  ogType: 'website',
})
</script>

<template>
  <div class="student-parent-subscription pb-20 sm:pb-0">
    <StudentParentSubscriptionHeroSection />
    <SubscriptionBuildConceptSection />
    <StudentParentPlansSection :mini="false" />
    <SubscriptionComparisonSection />
    <SubscriptionTenureSection />
    <SubscriptionTrialSection />
    <!-- <SubscriptionSavingsSection /> -->
    <!-- <SubscriptionBuilderSection /> -->
    <!-- <SubscriptionMonitoringSection /> -->
    <SubscriptionSupportsSection />
    <SubscriptionRecommendSection />
    <SubscriptionTermsSection />
    <UiCTASection heading-id="sp-subscription-cta-heading" surface-class="section-surface-muted"
      :title="subscriptionFinalCta.title" :description="subscriptionFinalCta.description"
      :supporting="subscriptionFinalCta.supporting" :ctas="subscriptionFinalCta.ctas" />
    <!-- <SubscriptionClosingSection /> -->
  </div>
</template>
