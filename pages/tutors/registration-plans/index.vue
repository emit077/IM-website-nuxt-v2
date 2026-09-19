<script setup lang="ts">
import RegistrationHeroSection from '~/components/tutors/registration-plans/RegistrationHeroSection.vue'
import RegistrationPlanDiscoverySection from '~/components/tutors/registration-plans/RegistrationPlanDiscoverySection.vue'
import RegistrationPremiumPlanSection from '~/components/tutors/registration-plans/RegistrationPremiumPlanSection.vue'
import RegistrationComparisonSection from '~/components/tutors/registration-plans/RegistrationComparisonSection.vue'
import RegistrationWhyPremiumSection from '~/components/tutors/registration-plans/RegistrationWhyPremiumSection.vue'
import RegistrationWhoChoosesSection from '~/components/tutors/registration-plans/RegistrationWhoChoosesSection.vue'
import RegistrationRequirementsSection from '~/components/tutors/registration-plans/RegistrationRequirementsSection.vue'
import RegistrationFaqSection from '~/components/tutors/registration-plans/RegistrationFaqSection.vue'
import FaqSectionMini from '~/components/ui/shared/FaqSectionMini.vue'
import RegistrationStickyCta from '~/components/tutors/registration-plans/RegistrationStickyCta.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import { registrationBannerCta } from '~/data/tutor-registration-plans'

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
    <RegistrationPremiumPlanSection />
    <RegistrationWhyPremiumSection />
    <RegistrationWhoChoosesSection />
    <RegistrationRequirementsSection />
    <RegistrationFaqSection />
    <FaqSectionMini category="tutors" />

    <UiCTASection section-id="registration-banner" heading-id="registration-banner-heading" surface-class="bg-white"
      badge-icon-mdi="mdi:human-male-board" :title="registrationBannerCta.title"
      :description="registrationBannerCta.description" :supporting="registrationBannerCta.supporting"
      :ctas="registrationBannerCta.ctas" />

    <RegistrationStickyCta />
  </div>
</template>
