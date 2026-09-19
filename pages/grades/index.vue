<script setup lang="ts">
import { nextTick, onMounted, watch } from 'vue'
import GradesHeroSection from '~/components/grades/GradesHeroSection.vue'
import GradesPathwaySection from '~/components/grades/GradesPathwaySection.vue'
import GradesExplorerSection from '~/components/grades/GradesExplorerSection.vue'
import GradesPromiseSection from '~/components/grades/GradesPromiseSection.vue'
import GradesAdaptSection from '~/components/grades/GradesAdaptSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import FaqSectionMini from '~/components/ui/shared/FaqSectionMini.vue'
import { gradesFinalCta } from '~/data/grades'

const route = useRoute()

function scrollToHash(behavior: ScrollBehavior = 'smooth') {
  const id = route.hash.replace(/^#/, '')
  if (!id || !import.meta.client) return
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior, block: 'start' })
}

onMounted(() => {
  nextTick(() => scrollToHash('auto'))
})

watch(() => route.hash, () => {
  nextTick(() => scrollToHash())
})

useSeoMeta({
  title: 'Grades Covered — Indian Mentors',
  description:
    'Personalised learning support from pre-primary to postgraduate. Nursery to Class 12, competitive exams, and university mentoring with verified tutors across India.',
  ogTitle: 'Grades Covered — Indian Mentors',
  ogDescription:
    'Structured tutoring for every academic stage — early learning, primary, middle, secondary, senior secondary, competitive exams, and university support.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen">
    <GradesHeroSection />
    <!-- <GradesPathwaySection /> -->
    <GradesExplorerSection />
    <GradesAdaptSection />
    <GradesPromiseSection />
    <FaqSectionMini category="Academic Coverage" />
    <UiCTASection section-id="book-demo" heading-id="grades-cta-heading" :extra-anchor-ids="['counsellor']"
      badge-icon-mdi="mdi:book-education-outline" :badge="gradesFinalCta.badge" :title="gradesFinalCta.title"
      :description="gradesFinalCta.description" :supporting="gradesFinalCta.supporting" :ctas="gradesFinalCta.ctas" />
  </div>
</template>
