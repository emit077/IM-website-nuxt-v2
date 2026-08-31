<script setup lang="ts">
import RegistrationHeroSection from '~/components/tutors/registration-plans/RegistrationHeroSection.vue'
import RegistrationPlanDiscoverySection from '~/components/tutors/registration-plans/RegistrationPlanDiscoverySection.vue'
import RegistrationFreePlanSection from '~/components/tutors/registration-plans/RegistrationFreePlanSection.vue'
import RegistrationPremiumPlanSection from '~/components/tutors/registration-plans/RegistrationPremiumPlanSection.vue'
import RegistrationComparisonSection from '~/components/tutors/registration-plans/RegistrationComparisonSection.vue'
import RegistrationWhyPremiumSection from '~/components/tutors/registration-plans/RegistrationWhyPremiumSection.vue'
import RegistrationWhoChoosesSection from '~/components/tutors/registration-plans/RegistrationWhoChoosesSection.vue'
import RegistrationJourneySection from '~/components/tutors/registration-plans/RegistrationJourneySection.vue'
import RegistrationMatchingSection from '~/components/tutors/registration-plans/RegistrationMatchingSection.vue'
import RegistrationRequirementsSection from '~/components/tutors/registration-plans/RegistrationRequirementsSection.vue'
import RegistrationResourcesSection from '~/components/tutors/registration-plans/RegistrationResourcesSection.vue'
import RegistrationEarningsSection from '~/components/tutors/registration-plans/RegistrationEarningsSection.vue'
import RegistrationProfileSection from '~/components/tutors/registration-plans/RegistrationProfileSection.vue'
import RegistrationFaqSection from '~/components/tutors/registration-plans/RegistrationFaqSection.vue'
import RegistrationStickyCta from '~/components/tutors/registration-plans/RegistrationStickyCta.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import { registrationBannerCta, registrationFinalCta } from '~/data/tutor-registration-plans'

useSeoMeta({
  title: 'Tutor Registration Plans — Free & Premium Tutor Profiles | Indian Mentors',
  description:
    'Create a Free Tutor Profile at ₹0 or choose the Premium Tutor Profile at ₹1,000 per year for enhanced visibility, priority opportunities, advanced insights, and dedicated support.',
  ogTitle: 'Tutor Registration Plans — Indian Mentors',
  ogDescription:
    'Start free, upgrade when you are ready. Compare Free and Premium tutor registration plans and begin your teaching journey with Indian Mentors.',
  ogType: 'website',
})
</script>

<template>
  <div class="tutor-registration-plans">
    <RegistrationHeroSection />
    <RegistrationPlanDiscoverySection />
    <RegistrationComparisonSection />
    <!-- <RegistrationFreePlanSection /> -->
    <RegistrationPremiumPlanSection />
    <RegistrationWhyPremiumSection />
    <RegistrationWhoChoosesSection />
    <!-- <RegistrationJourneySection /> -->
    <!-- <RegistrationMatchingSection /> -->
    <RegistrationRequirementsSection />
    <!-- <RegistrationResourcesSection />
    <RegistrationEarningsSection /> -->
    <!-- <RegistrationProfileSection /> -->
    <RegistrationFaqSection />

    <!-- <UiCTASection section-id="start-registration" heading-id="registration-final-cta-heading" variant="light"
      surface-class="section-surface-muted" badge-icon-mdi="mdi:rocket-launch-outline"
      :badge="registrationFinalCta.badge" :title="registrationFinalCta.title"
      :description="registrationFinalCta.description" :supporting="registrationFinalCta.supporting"
      :ctas="registrationFinalCta.ctas" /> -->

    <UiCTASection section-id="registration-banner" heading-id="registration-banner-heading" surface-class="bg-white"
      badge-icon-mdi="mdi:human-male-board" :title="registrationBannerCta.title"
      :description="registrationBannerCta.description" :supporting="registrationBannerCta.supporting"
      :ctas="registrationBannerCta.ctas" />

    <RegistrationStickyCta />
  </div>
</template>
