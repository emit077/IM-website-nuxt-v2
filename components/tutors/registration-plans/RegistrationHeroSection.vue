<script setup lang="ts">
import SecondaryHeroLayout from '~/components/ui/SecondaryHeroLayout.vue'
import type { SecondaryHeroContent } from '~/components/ui/SecondaryHeroLayout.vue'
import { registrationHero } from '~/data/tutor-registration-plans'

const secondaryHero: SecondaryHeroContent = {
  badge: registrationHero.badge,
  title: registrationHero.title,
  subtitle: registrationHero.subtitle,
  description: registrationHero.description,
  caption: registrationHero.caption,
  actionBtns: [registrationHero.primaryCta, registrationHero.secondaryCta],
  ticker: registrationHero.ticker,
  headingId: 'registration-plans-hero-heading',
  tickerAriaLabel: 'Tutor registration plan highlights',
  patternId: 'registration-plans-hero-waves',
}

const promiseSteps = registrationHero.promise.split('→').map((step) => step.trim())
</script>

<template>
  <SecondaryHeroLayout :hero-content="secondaryHero">
    <div class="mt-10 w-full" v-motion :initial="{ opacity: 0, y: 14 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 340 } }">
      <p class="text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">Core Promise</p>
      <ol class="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-2.5" role="list">
        <li v-for="(step, i) in promiseSteps" :key="step" class="flex items-center gap-2">
          <span
            class="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[12px] font-semibold text-white sm:text-[13px]">
            {{ step }}
          </span>
          <span v-if="i < promiseSteps.length - 1" class="text-white/40" aria-hidden="true">→</span>
        </li>
      </ol>
    </div>
  </SecondaryHeroLayout>
</template>
