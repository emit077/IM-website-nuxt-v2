<script setup lang="ts">
import { computed } from 'vue'
import SecondaryHeroLayout from '~/components/ui/SecondaryHeroLayout.vue'
import type { SecondaryHeroContent } from '~/components/ui/SecondaryHeroLayout.vue'
import { jobPageCtas } from '~/data/careers'
import { jobApplyHref, jobResumeHref, type CareerJob } from '~/data/career-jobs'

const props = defineProps<{ job: CareerJob }>()

const secondaryHero = computed<SecondaryHeroContent>(() => ({
  badge: 'Careers at Indian Mentors',
  title: props.job.hero.headline,
  subtitle: props.job.hero.subheadline,
  description: props.job.hero.paragraphs[0],
  caption: props.job.hero.paragraphs.slice(1).join(' '),
  actionBtns: [
    { label: jobPageCtas.applyLabel, href: jobApplyHref(props.job) },
    { label: jobPageCtas.resumeLabel, href: jobResumeHref(props.job) },
  ],
  ticker: [props.job.title, props.job.locationShort, props.job.employmentType, props.job.industry],
  headingId: 'job-hero-heading',
  tickerAriaLabel: 'Job highlights',
  patternId: 'job-hero-waves',
}))

const highlights = computed(() => [
  { label: 'Position', value: props.job.title },
  { label: 'Location', value: props.job.location },
  { label: 'Industry', value: props.job.industry },
  { label: 'Employment', value: props.job.employmentType },
])
</script>

<template>
  <SecondaryHeroLayout :hero-content="secondaryHero">
    <ul class="mt-8 grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4" role="list">
      <li
        v-for="item in highlights"
        :key="item.label"
        class="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-left backdrop-blur-sm"
      >
        <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-100">{{ item.label }}</p>
        <p class="mt-1 text-[13px] font-semibold leading-snug text-white">{{ item.value }}</p>
      </li>
    </ul>
  </SecondaryHeroLayout>
</template>
