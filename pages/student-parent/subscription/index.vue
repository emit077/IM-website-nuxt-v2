<script setup lang="ts">
import StudentParentSubscriptionHeroSection from '~/components/student-parent/StudentParentSubscriptionHeroSection.vue'
import SubscriptionPageNav from '~/components/student-parent/SubscriptionPageNav.vue'
import SubscriptionBuildConceptSection from '~/components/student-parent/SubscriptionBuildConceptSection.vue'
import StudentParentPlansSection from '~/components/student-parent/StudentParentPlansSection.vue'
import SubscriptionComparisonSection from '~/components/student-parent/SubscriptionComparisonSection.vue'
import SubscriptionTenureSection from '~/components/student-parent/SubscriptionTenureSection.vue'
import SubscriptionTrialSection from '~/components/student-parent/SubscriptionTrialSection.vue'
import SubscriptionSavingsSection from '~/components/student-parent/SubscriptionSavingsSection.vue'
import SubscriptionBuilderSection from '~/components/student-parent/SubscriptionBuilderSection.vue'
import SubscriptionMonitoringSection from '~/components/student-parent/SubscriptionMonitoringSection.vue'
import SubscriptionSupportsSection from '~/components/student-parent/SubscriptionSupportsSection.vue'
import SubscriptionRecommendSection from '~/components/student-parent/SubscriptionRecommendSection.vue'
import SubscriptionFaqSection from '~/components/student-parent/SubscriptionFaqSection.vue'
import SubscriptionTermsSection from '~/components/student-parent/SubscriptionTermsSection.vue'
import SubscriptionClosingSection from '~/components/student-parent/SubscriptionClosingSection.vue'
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
    <SubscriptionPageNav />
    <SubscriptionBuildConceptSection />
    <StudentParentPlansSection />
    <SubscriptionComparisonSection />
    <SubscriptionTenureSection />
    <SubscriptionTrialSection />
    <SubscriptionSavingsSection />
    <SubscriptionBuilderSection />
    <SubscriptionMonitoringSection />
    <SubscriptionSupportsSection />
    <SubscriptionRecommendSection />
    <SubscriptionFaqSection />
    <SubscriptionTermsSection />
    <UiCTASection heading-id="sp-subscription-cta-heading" surface-class="section-surface-muted"
      :title="subscriptionFinalCta.title" :description="subscriptionFinalCta.description"
      :supporting="subscriptionFinalCta.supporting" :ctas="subscriptionFinalCta.ctas" />
    <SubscriptionClosingSection />
  </div>
</template>
