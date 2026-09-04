<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import TrustIndicatorsLayout from '~/components/ui/TrustIndicatorsLayout.vue'
import { insightsImpactSection, insightsImpactStats } from '~/data/insights'
</script>

<template>
  <section id="impact" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="insights-impact-heading">
    <div class="container-page">
      <CardHeader heading-id="insights-impact-heading" :badge="insightsImpactSection.kicker"
        :title="insightsImpactSection.title" :description="insightsImpactSection.description"
        :classes="`${insightsImpactSection.classes} mx-auto max-w-3xl`" />

      <div class="mt-10" v-motion :initial="{ opacity: 0, y: 14 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
        <TrustIndicatorsLayout :items="[...insightsImpactStats]" />
      </div>
    </div>
  </section>
</template>
