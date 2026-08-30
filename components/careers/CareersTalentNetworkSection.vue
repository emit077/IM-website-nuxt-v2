<script setup lang="ts">
import { CAREERS_EMAIL, careerResumeMailto, talentNetworkSection, equalOpportunitySection } from '~/data/careers'
</script>

<template>
  <section
    id="talent-network"
    class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py"
    aria-labelledby="talent-network-heading"
  >
    <div class="container-page relative">
      <div
        class="mx-auto max-w-2xl text-center"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }"
      >
        <h2 id="talent-network-heading" class="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {{ talentNetworkSection.title }}
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600">
          {{ talentNetworkSection.description }}
        </p>
        <a
          :href="careerResumeMailto()"
          class="mt-8 inline-flex items-center justify-center rounded-xl bg-blue-800 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-900"
        >
          {{ talentNetworkSection.ctaLabel }}
        </a>
        <p class="mt-5 text-sm text-slate-500">
          {{ talentNetworkSection.emailPrompt }}
          <a :href="careerResumeMailto()" class="font-semibold text-blue-700 underline decoration-blue-200 underline-offset-2 hover:text-blue-800">
            {{ CAREERS_EMAIL }}
          </a>
        </p>
      </div>

      <p class="mx-auto mt-12 max-w-3xl text-center text-[13px] leading-relaxed text-slate-500">
        <span class="font-semibold text-slate-700">{{ equalOpportunitySection.title }}.</span>
        {{ equalOpportunitySection.description }}
      </p>
    </div>
  </section>
</template>
