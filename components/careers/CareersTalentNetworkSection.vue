<script setup lang="ts">
import { CAREERS_EMAIL, careerResumeMailto, talentNetworkSection, equalOpportunitySection } from '~/data/careers'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
</script>

<template>
  <section id="talent-network" class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py"
    aria-labelledby="talent-network-heading">
    <div class="container-page relative">
      <div class="mx-auto max-w-2xl text-center" v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">

        <CardHeader :title="talentNetworkSection.title" :description="talentNetworkSection.description" />
        <a :href="careerResumeMailto()"
          class="mt-8 inline-flex items-center justify-center rounded-xl bg-blue-800 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-900">
          {{ talentNetworkSection.ctaLabel }}
        </a>
        <p class="mt-5 text-sm text-slate-500">
          {{ talentNetworkSection.emailPrompt }}
          <a :href="careerResumeMailto()"
            class="font-semibold text-blue-700 underline decoration-blue-200 underline-offset-2 hover:text-blue-800">
            {{ CAREERS_EMAIL }}
          </a>
        </p>
      </div>

    </div>
  </section>
</template>
